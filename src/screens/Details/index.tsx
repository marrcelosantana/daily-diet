import { useState } from "react";
import { Alert, Text, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import { StatusTag } from "@components/StatusTag";
import { Button } from "@components/Button";
import { DeleteModal } from "@components/DeleteModal";

import { Meal } from "@models/Meal";
import { formatDate } from "@utils/formatDate";
import { removeMeal } from "@storage/meal/removeMeal";

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
  meal: Meal;
  status: string;
};

type DetailsProps = DetailsStyleProps & {};

export function Details({}: DetailsProps) {
  const navigation = useNavigation();
  const route = useRoute();
  const { meal, status } = route.params as RouteParams;

  const [modalVisible, setModalVisible] = useState(false);

  function handleEdit(meal: Meal) {
    navigation.navigate("update", { meal });
  }

  async function onRemove(id: string) {
    try {
      await removeMeal(id);
      navigation.navigate("home");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container type={status}>
      <Header>
        <TouchableOpacity onPress={() => navigation.navigate("home")}>
          <ArrowLeftIcon name="arrow-left" />
        </TouchableOpacity>
        <HeaderTitle>Refeição</HeaderTitle>
        <Text />
      </Header>

      <Content>
        <DescriptionContainer>
          <Title>{meal.name}</Title>
          <Subtitle>{meal.description}</Subtitle>
        </DescriptionContainer>

        <InfoContainer>
          <InfoTitle>Data e hora</InfoTitle>
          <InfoSubtitle>
            {formatDate(meal.date, "date")} às {formatDate(meal.date, "time")}
          </InfoSubtitle>
        </InfoContainer>

        <StatusTag type={meal.status} />

        <ButtonsContainer>
          <Button
            title="Editar refeição"
            type="dark"
            iconCommunity="lead-pencil"
            onPress={() => handleEdit(meal)}
          />

          <Button
            title="Excluir refeição"
            type="light"
            iconCommunity="trash-can"
            style={{ marginTop: -15 }}
            onPress={() => setModalVisible(true)}
          />
        </ButtonsContainer>
      </Content>
      <DeleteModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        mealId={meal.id}
        handleDeleteMeal={onRemove}
      />
    </Container>
  );
}
