import { Text, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { StatusTag } from "@components/StatusTag";
import { Button } from "@components/Button";

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

type DetailsProps = DetailsStyleProps & {};

export function Details({ type = "inTheDiet" }: DetailsProps) {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.navigate("home");
  }

  function handleEdit() {
    navigation.navigate("update");
  }

  return (
    <Container type={type}>
      <Header>
        <TouchableOpacity onPress={handleGoBack}>
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
            onPress={handleEdit}
          />

          <Button
            title="Excluir refeição"
            type="light"
            iconCommunity="trash-can"
            style={{ marginTop: -15 }}
          />
        </ButtonsContainer>
      </Content>
    </Container>
  );
}
