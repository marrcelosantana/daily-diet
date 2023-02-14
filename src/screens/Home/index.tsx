import { useState } from "react";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { PercentCard } from "@components/PercentCard";
import { MealCard } from "@components/MealCard";

import { Container, Content, Date, Title } from "./styles";

export function Home() {
  const [mealCards, setMealCards] = useState<any[]>([
    {
      id: 1,
      title: "Whey protein com leite e biscoito com xilito",
      status: "inTheDiet",
      time: "20:00",
    },

    {
      id: 2,
      title: "X-Tudo",
      status: "offDiet",
      time: "19:00",
    },

    {
      id: 3,
      title: "Pipoca com Chocolate",
      status: "offDiet",
      time: "14:30",
    },
  ]);

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

        <FlatList
          data={mealCards}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <MealCard
              time={item.time}
              title={item.title}
              status={item.status}
            />
          )}
        />
      </Content>
    </Container>
  );
}
