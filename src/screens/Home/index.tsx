import { useNavigation } from "@react-navigation/native";

import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { PercentCard } from "@components/PercentCard";

import { Container, Content, Date, Title } from "./styles";
import { MealCard } from "@components/MealCard";

export function Home() {
  const navigation = useNavigation();

  function handleOpenStatistics() {
    navigation.navigate("statistics");
  }

  function handleRegisterMeal() {
    navigation.navigate("register");
  }

  return (
    <Container>
      <Header />
      <PercentCard percent="90,86" onPress={handleOpenStatistics} />

      <Content>
        <Title>Refeições</Title>
        <Button
          type="dark"
          title="Nova refeição"
          icon="add"
          onPress={handleRegisterMeal}
        />
        <Date>12.03.2023</Date>

        <MealCard
          title="Whey protein com leite e biscoito com xilito
          "
          status="inTheDiet"
          date="20:00"
        />
        <MealCard title="X-Tudo" status="offDiet" date="18:00" />
      </Content>
    </Container>
  );
}
