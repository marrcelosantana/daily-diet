import { TouchableProps } from "react-native-svg";
import {
  Container,
  Divider,
  MealStatusProps,
  Status,
  Time,
  InfoContainer,
  Title,
} from "./styles";

type MealCardProps = TouchableProps &
  MealStatusProps & {
    title: string;
    date: string;
  };

export function MealCard({ status, title, date, ...rest }: MealCardProps) {
  return (
    <Container {...rest}>
      <InfoContainer>
        <Time>{date}</Time>
        <Divider />
        <Title numberOfLines={1} ellipsizeMode="tail">
          {title}
        </Title>
      </InfoContainer>

      <Status status={status} />
    </Container>
  );
}
