import { useState, useId } from "react";
import { Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  DateTimePickerAndroid,
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";

import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { Radio } from "@components/Radio";

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

  function handleRegister() {
    navigation.navigate("feedback");
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
        <Input title="Nome" maxLength={40} />
        <Input
          title="Descrição"
          maxLength={220}
          style={{ height: 120 }}
          textAlignVertical={"top"}
        />

        <MiniInputsContainer>
          <Input
            title="Data"
            style={{ width: 180 }}
            onPressIn={() => {
              showMode("date");
            }}
          />
          <Input
            title="Horário"
            style={{ width: 180 }}
            onPressIn={() => {
              showMode("time");
            }}
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
