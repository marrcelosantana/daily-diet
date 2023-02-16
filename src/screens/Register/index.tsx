import { useState, useId } from "react";
import { Alert, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  DateTimePickerAndroid,
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";

import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { Radio } from "@components/Radio";

import { formatDate } from "@utils/formatDate";
import { AppError } from "@utils/AppError";
import { createMeal } from "@storage/meal/createMeal";

import {
  ArrowLeftIcon,
  MiniInputsContainer,
  RadioContainer,
  Container,
  Form,
  Header,
  HeaderTitle,
} from "./styles";

export function Register() {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [dietOption, setDietOption] = useState<string | null>(null);
  const [date, setDate] = useState<number>(new Date().getTime());

  const mealId = useId();
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.navigate("home");
  }

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

  function goToFeedback(status: string) {
    navigation.navigate("feedback", { status });
  }

  async function handleRegister() {
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

    try {
      const newMeal = {
        id: mealId,
        name: name,
        description: description,
        date: date,
        status: dietOption === "Sim" ? "inTheDiet" : "offDiet",
      };

      const status = newMeal.status;

      await createMeal(newMeal);
      goToFeedback(status);
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Registro", error.message);
      } else {
        console.log(error);
      }
    }
  }

  return (
    <Container>
      <Header>
        <TouchableOpacity onPress={handleGoBack}>
          <ArrowLeftIcon name="arrow-left" />
        </TouchableOpacity>

        <HeaderTitle>Nova refeição</HeaderTitle>
        <Text />
      </Header>

      <Form>
        <Input
          title="Nome"
          maxLength={60}
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
          />
        </RadioContainer>

        <Button
          type="dark"
          title="Cadastrar refeição"
          onPress={handleRegister}
        />
      </Form>
    </Container>
  );
}
