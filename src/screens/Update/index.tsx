import { useState } from "react";
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
  Container,
  Form,
  Header,
  HeaderTitle,
  RadioContainer,
} from "./styles";

export function Update() {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [dietOption, setDietOption] = useState<string | null>(null);
  const [date, setDate] = useState<number>(new Date().getTime());

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
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

  function handleUpdate() {
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
        <Input title="Nome" maxLength={40} autoCorrect={false} />
        <Input
          multiline={true}
          numberOfLines={5}
          title="Descrição"
          maxLength={220}
          style={{ height: 120 }}
          textAlignVertical={"top"}
        />

        <MiniInputsContainer>
          <Input title="Data" style={{ width: 160 }} />
          <Input title="Horário" style={{ width: 160 }} />
        </MiniInputsContainer>

        <RadioContainer>
          <Radio
            title="Está dentro da dieta?"
            options={["Sim", "Não"]}
            onSelect={handleDietOption}
          />
        </RadioContainer>

        <Button type="dark" title="Editar refeição" onPress={handleUpdate} />
      </Form>
    </Container>
  );
}
