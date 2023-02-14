import { useState } from "react";
import { Text, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { Input } from "@components/Input";
import { ButtonDiet } from "@components/ButtonDiet";
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

export function Register() {
  const [isActiveYes, setIsActiveYes] = useState(true);
  const [isActiveNo, setIsActiveNo] = useState(false);

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.navigate("home");
  }

  function handleChoice() {
    setIsActiveYes(!isActiveYes);
    setIsActiveNo(!isActiveNo);
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
          <Input title="Data" style={{ width: 160 }} />
          <Input title="Horário" style={{ width: 160 }} />
        </MiniInputsContainer>

        <ButtonsDietTitle>Está dentro da dieta?</ButtonsDietTitle>

        <ButtonsDietContainer>
          <ButtonDiet
            title="Sim"
            type="inTheDiet"
            isActive={isActiveYes}
            onPress={handleChoice}
          />
          <ButtonDiet
            title="Não"
            type="offDiet"
            isActive={isActiveNo}
            onPress={handleChoice}
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
