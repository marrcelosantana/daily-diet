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
    time: string;
  };

export function MealCard({ status, title, time, ...rest }: MealCardProps) {
  return (
    <Container {...rest}>
      <InfoContainer>
        <Time>{time}</Time>
        <Divider />
        <Title numberOfLines={1} ellipsizeMode="tail">
          {title}
        </Title>
      </InfoContainer>

      <Status status={status} />
    </Container>
  );
}
