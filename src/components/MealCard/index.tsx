import { PressableProps } from "react-native";
import { Meal } from "@models/Meal";
import { formatDate } from "@utils/formatDate";
import {
  Container,
  Divider,
  MealStatusProps,
  Status,
  Time,
  InfoContainer,
  Title,
} from "./styles";

type MealCardProps = MealStatusProps &
  PressableProps & {
    meal: Meal;
  };

export function MealCard({ meal, ...rest }: MealCardProps) {
  return (
    <Container {...rest}>
      <InfoContainer>
        <Time>{formatDate(meal.date, "date")}</Time>
        <Divider />
        <Title numberOfLines={1} ellipsizeMode="tail">
          {meal.name}
        </Title>
      </InfoContainer>

      <Status status={meal.status} />
    </Container>
  );
}
