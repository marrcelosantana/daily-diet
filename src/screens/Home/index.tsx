import { useEffect, useState } from "react";
import { FlatList, SectionList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { EmptyListContent } from "@components/EmptyListContent";
import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { PercentCard } from "@components/PercentCard";
import { MealCard } from "@components/MealCard";

import { Meal } from "@models/Meal";
import { MealsByDate } from "@models/MealsByDate";

import { Container, Content, Date, Title } from "./styles";
import { getAllMeals } from "@storage/meal/getAllMeals";

export function Home() {
  const [data, setData] = useState<MealsByDate[]>([]);

  const meals = data.map((meal) => meal.meals).flat();

  const navigation = useNavigation();

  function handleOpenCard() {
    navigation.navigate("details");
  }

  async function getData() {
    const data = await getAllMeals();
    setData(data);
  }

  useEffect(() => {
    getData();
    console.log(meals);
  }, []);

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
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <MealCard meal={item} onPress={handleOpenCard} key={item.id} />
          )}
          contentContainerStyle={meals.length === 0 && { flex: 1 }}
          ListEmptyComponent={() => <EmptyListContent />}
        />
      </Content>
    </Container>
  );
}
