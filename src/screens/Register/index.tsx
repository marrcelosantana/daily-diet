import { useState } from "react";
import { Text, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { Input } from "@components/Input";
import { Button } from "@components/Button";

import {
  ArrowLeftIcon,
  ButtonsDietTitle,
  MiniInputsContainer,
  ButtonsDietContainer,
  Container,
  Form,
  Header,
  HeaderTitle,
} from "./styles";
import { Radio } from "@components/Radio";

export function Register() {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [dietOption, setDietOption] = useState<string | null>(null);

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.navigate("home");
  }

  function handleDietOption(option: string) {
    setDietOption(option);
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
          <Input title="Data" style={{ width: 180 }} />
          <Input title="Horário" style={{ width: 180 }} />
        </MiniInputsContainer>

        <ButtonsDietContainer>
          <Radio
            title="Está dentro da dieta?"
            options={["Sim", "Não"]}
            onSelect={handleDietOption}
          />
        </ButtonsDietContainer>

        <Button
          type="dark"
          title="Cadastrar refeição"
          onPress={handleRegister}
        />
      </Form>
    </Container>
  );
}
