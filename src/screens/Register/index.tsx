import { Text, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { Input } from "@components/Input";

import {
  ArrowLeftIcon,
  ButtonsDietTitle,
  MiniInputsContainer,
  ButtonsDietContainer,
  RegisterContainer,
  RegisterForm,
  RegisterHeader,
  RegisterHeaderTitle,
} from "./styles";

export function Register() {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.navigate("home");
  }

  return (
    <RegisterContainer>
      <RegisterHeader>
        <TouchableOpacity onPress={handleGoBack}>
          <ArrowLeftIcon name="arrow-left" />
        </TouchableOpacity>

        <RegisterHeaderTitle>Nova refeição</RegisterHeaderTitle>
        <Text />
      </RegisterHeader>

      <RegisterForm>
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

        <ButtonsDietContainer></ButtonsDietContainer>
      </RegisterForm>
    </RegisterContainer>
  );
}
