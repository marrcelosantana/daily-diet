import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { EmptyListContent } from "@components/EmptyListContent";
import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { PercentCard } from "@components/PercentCard";
import { MealCard } from "@components/MealCard";
import { EmptyPercentCard } from "@components/EmptyPercentCard";

import { Meal } from "@models/Meal";
import { getAllMeals } from "@storage/meal/getAllMeals";
import { formatPercentage } from "@utils/formatPercent";

import { Container, Content, Title } from "./styles";

export function Home() {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [dietStatus, setDietStatus] = useState("");

  const mealsInTheDiet = meals.filter(
    (meal) => meal.status === "inTheDiet"
  ).length;
  const totalMeals = meals.length;

  const percentInTheDiet = formatPercentage(mealsInTheDiet, totalMeals);

  const navigation = useNavigation();

  function handleOpenCard(meal: Meal, status: string) {
    navigation.navigate("details", { meal, status });
  }

  function findDietStatus() {
    if (percentInTheDiet < 50) {
      setDietStatus("offDiet");
    } else {
      setDietStatus("inTheDiet");
    }
  }

  async function fetchMeals() {
    const data = await getAllMeals();
    setMeals(data);
  }

  useEffect(() => {
    fetchMeals();
    findDietStatus();
  }, [meals, dietStatus]);

  return (
    <Container>
      <Header />

      {percentInTheDiet >= 0 ? (
        <PercentCard
          percent={percentInTheDiet}
          onPress={() =>
            navigation.navigate("statistics", { meals, dietStatus })
          }
        />
      ) : (
        <EmptyPercentCard />
      )}

      <Content>
        <Title>Refeições</Title>
        <Button
          type="dark"
          title="Nova refeição"
          icon="add"
          onPress={() => navigation.navigate("register")}
        />

        <FlatList
          data={meals}
          keyExtractor={(item, index) => item.id + index}
          renderItem={({ item }) => (
            <MealCard
              meal={item}
              onPress={() => handleOpenCard(item, item.status)}
              key={item.id}
            />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={meals.length === 0 && { flex: 1 }}
          ListEmptyComponent={() => <EmptyListContent />}
        />
      </Content>
    </Container>
  );
}
