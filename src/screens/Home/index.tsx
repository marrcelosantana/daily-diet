import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { EmptyListContent } from "@components/EmptyListContent";
import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { PercentCard } from "@components/PercentCard";
import { MealCard } from "@components/MealCard";

import { Meal } from "@models/Meal";
import { getAllMeals } from "@storage/meal/getAllMeals";

import { Container, Content, Title } from "./styles";
import { clearStorage } from "@storage/meal/clearStorage";

export function Home() {
  const [meals, setMeals] = useState<Meal[]>([]);

  const navigation = useNavigation();

  function handleOpenCard(meal: Meal, status: string) {
    navigation.navigate("details", { meal, status });
  }

  async function fetchMeals() {
    const data = await getAllMeals();
    setMeals(data);
  }

  useEffect(() => {
    fetchMeals();
  }, [meals]);

  return (
    <Container>
      <Header />
      <PercentCard
        percent="90,86"
        onPress={() => navigation.navigate("statistics")}
      />

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
          contentContainerStyle={meals.length === 0 && { flex: 1 }}
          ListEmptyComponent={() => <EmptyListContent />}
        />
      </Content>
    </Container>
  );
}
