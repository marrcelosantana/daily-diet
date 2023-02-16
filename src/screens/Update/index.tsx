import { useState } from "react";
import { Alert, Text, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  DateTimePickerAndroid,
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";

import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { Radio } from "@components/Radio";

import { Meal } from "@models/Meal";
import { formatDate } from "@utils/formatDate";
import { AppError } from "@utils/AppError";
import { updateMeal } from "@storage/meal/updateMeal";

import {
  ArrowLeftIcon,
  MiniInputsContainer,
  Container,
  Form,
  Header,
  HeaderTitle,
  RadioContainer,
} from "./styles";

type RouteParams = {
  meal: Meal;
};

export function Update() {
  const navigation = useNavigation();
  const route = useRoute();
  const { meal } = route.params as RouteParams;

  const [name, setName] = useState<string>(meal.name);
  const [description, setDescription] = useState<string>(meal.description);
  const [date, setDate] = useState<number>(meal.date);
  const [dietOption, setDietOption] = useState<string>(
    meal.status === "inTheDiet" ? "Sim" : "Não"
  );

  function handleDietOption(option: string) {
    setDietOption(option);
  }

  function onChange(event: DateTimePickerEvent, selectedDate?: Date) {
    const formatedDate = selectedDate!.getTime();
    setDate(formatedDate);
  }

  function showMode(mode: "date" | "time") {
    DateTimePickerAndroid.open({
      value: new Date(date),
      onChange,
      mode,
      is24Hour: true,
    });
  }

  async function handleUpdate() {
    if (name === "" || description === "") {
      return Alert.alert(
        "Nova Refeição",
        "Você deixou de informar algum dado."
      );
    }

    if (dietOption === null) {
      return Alert.alert(
        "Nova Refeição",
        "Você não informou se está dentro ou fora da dieta."
      );
    }

    const updatedMeal = {
      id: meal.id,
      name: name,
      description: description,
      date: date,
      status: dietOption === "Sim" ? "inTheDiet" : "offDiet",
    };

    try {
      await updateMeal(meal.id, updatedMeal);
      navigation.navigate("home");
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Editar", error.message);
      } else {
        Alert.alert("Editar", "Não foi possível editar a refeição.");
      }
    }
  }

  return (
    <Container>
      <Header>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <ArrowLeftIcon name="arrow-left" />
        </TouchableOpacity>

        <HeaderTitle>Nova refeição</HeaderTitle>
        <Text />
      </Header>

      <Form>
        <Input
          title="Nome"
          maxLength={40}
          autoCorrect={false}
          value={name}
          onChangeText={(name) => setName(name)}
        />
        <Input
          multiline={true}
          numberOfLines={5}
          title="Descrição"
          maxLength={220}
          style={{ height: 120 }}
          textAlignVertical={"top"}
          value={description}
          onChangeText={(description) => setDescription(description)}
        />

        <MiniInputsContainer>
          <Input
            title="Data"
            style={{ width: 160 }}
            onPressIn={() => {
              showMode("date");
            }}
            defaultValue={formatDate(date, "date")}
          />
          <Input
            title="Horário"
            style={{ width: 160 }}
            onPressIn={() => {
              showMode("time");
            }}
            defaultValue={formatDate(date, "time")}
          />
        </MiniInputsContainer>

        <RadioContainer>
          <Radio
            title="Está dentro da dieta?"
            options={["Sim", "Não"]}
            onSelect={handleDietOption}
            prevValue={meal.status === "inTheDiet" ? "Sim" : "Não"}
          />
        </RadioContainer>

        <Button type="dark" title="Editar refeição" onPress={handleUpdate} />
      </Form>
    </Container>
  );
}
