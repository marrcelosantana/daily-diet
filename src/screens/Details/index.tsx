import { useEffect, useState } from "react";
import { Alert, Text, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import { StatusTag } from "@components/StatusTag";
import { Button } from "@components/Button";
import { Meal } from "@models/Meal";

import { getOneMeal } from "@storage/meal/getOneMeal";

import {
  ArrowLeftIcon,
  Container,
  Content,
  DetailsStyleProps,
  Header,
  HeaderTitle,
  DescriptionContainer,
  Title,
  Subtitle,
  InfoContainer,
  InfoTitle,
  InfoSubtitle,
  ButtonsContainer,
} from "./styles";

type RouteParams = {
  mealId: string;
};

type DetailsProps = DetailsStyleProps & {};

export function Details({ type = "inTheDiet" }: DetailsProps) {
  const [meal, setMeal] = useState<Meal>();

  const navigation = useNavigation();
  const route = useRoute();
  const { mealId } = route.params as RouteParams;

  async function getData() {
    const data = await getOneMeal(mealId);
    setMeal(data);
    console.log(data);
  }

  function handleEdit(id: string) {
    navigation.navigate("update", { id });
  }

  function handleRemoveMeal() {
    Alert.alert("Remover", "Deseja realmente excluir o registro da refeição?", [
      { text: "Cancelar", style: "cancel" },
      { text: "Excluir", onPress: () => {} },
    ]);
  }

  useEffect(() => {
    console.log(meal);
  }, []);

  return (
    <Container type={type}>
      <Header>
        <TouchableOpacity onPress={() => navigation.navigate("home")}>
          <ArrowLeftIcon name="arrow-left" />
        </TouchableOpacity>
        <HeaderTitle>Refeição</HeaderTitle>
        <Text />
      </Header>

      <Content>
        <DescriptionContainer>
          <Title>Sanduíche</Title>
          <Subtitle>
            Sanduíche de pão integral com atum e salada de alface e tomate.
          </Subtitle>
        </DescriptionContainer>

        <InfoContainer>
          <InfoTitle>Data e hora</InfoTitle>
          <InfoSubtitle>12/08/2022 às 16:00</InfoSubtitle>
        </InfoContainer>

        <StatusTag title="Dentro da dieta" type="inTheDiet" />

        <ButtonsContainer>
          <Button
            title="Editar refeição"
            type="dark"
            iconCommunity="lead-pencil"
          />

          <Button
            title="Excluir refeição"
            type="light"
            iconCommunity="trash-can"
            style={{ marginTop: -15 }}
            onPress={handleRemoveMeal}
          />
        </ButtonsContainer>
      </Content>
    </Container>
  );
}
