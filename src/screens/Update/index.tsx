import { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Input } from "@components/Input";
import { Button } from "@components/Button";

import {
  ArrowLeftIcon,
  MiniInputsContainer,
  ButtonsDietContainer,
  Container,
  Form,
  Header,
  HeaderTitle,
} from "./styles";

export function Update() {
  const [isActiveYes, setIsActiveYes] = useState(true);
  const [isActiveNo, setIsActiveNo] = useState(false);

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.navigate("details");
  }

  function handleChoice() {
    setIsActiveYes(!isActiveYes);
    setIsActiveNo(!isActiveNo);
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

        <HeaderTitle>Editar refeição</HeaderTitle>
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
          <Input title="Data" style={{ width: 160 }} />
          <Input title="Horário" style={{ width: 160 }} />
        </MiniInputsContainer>

        <Button type="dark" title="Cadastrar refeição" onPress={handleUpdate} />
      </Form>
    </Container>
  );
}
