import { Meal } from "@models/Meal";
import { useNavigation, useRoute } from "@react-navigation/native";
import { calcSequence } from "@utils/calcSequence";
import { formatPercentage } from "@utils/formatPercent";

import {
  ArrowLeftIcon,
  CardSubtitle,
  CardTitle,
  OffDietCard,
  FooterCardsContainer,
  GeneralStatisticsCard,
  GoBackButton,
  Container,
  Content,
  ContentTitle,
  Header,
  HeaderSubtitle,
  HeaderTitle,
  StatisticsStyleProps,
  InTheDietCard,
} from "./styles";

type RouteParams = {
  meals: Meal[];
  dietStatus: string;
};

type StatisticsProps = {
  type: StatisticsStyleProps;
};

export function Statistics({}: StatisticsProps) {
  const navigation = useNavigation();

  const route = useRoute();
  const { meals, dietStatus } = route.params as RouteParams;

  const mealsInTheDiet = meals.filter(
    (meal) => meal.status === "inTheDiet"
  ).length;
  const mealsOffDiet = meals.filter((meal) => meal.status === "offDiet").length;
  const totalMeals = meals.length;

  const percentInTheDiet = formatPercentage(mealsInTheDiet, totalMeals);

  const bestSequence = calcSequence(meals);

  return (
    <Container type={dietStatus}>
      <GoBackButton onPress={() => navigation.navigate("home")}>
        <ArrowLeftIcon type={dietStatus} name="arrow-left" />
      </GoBackButton>

      <Header>
        <HeaderTitle>{percentInTheDiet}%</HeaderTitle>
        <HeaderSubtitle>das refeições dentro da dieta</HeaderSubtitle>
      </Header>

      <Content>
        <ContentTitle>Estatísticas gerais</ContentTitle>

        <GeneralStatisticsCard>
          <CardTitle>{bestSequence}</CardTitle>
          <CardSubtitle>
            melhor sequência de pratos dentro da dieta
          </CardSubtitle>
        </GeneralStatisticsCard>

        <GeneralStatisticsCard>
          <CardTitle>{totalMeals}</CardTitle>
          <CardSubtitle>refeições registradas</CardSubtitle>
        </GeneralStatisticsCard>

        <FooterCardsContainer>
          <InTheDietCard>
            <CardTitle>{mealsInTheDiet}</CardTitle>
            <CardSubtitle>refeições dentro da dieta</CardSubtitle>
          </InTheDietCard>

          <OffDietCard>
            <CardTitle>{mealsOffDiet}</CardTitle>
            <CardSubtitle>refeições fora da dieta</CardSubtitle>
          </OffDietCard>
        </FooterCardsContainer>
      </Content>
    </Container>
  );
}
