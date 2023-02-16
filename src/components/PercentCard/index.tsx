import { PressableProps } from "react-native";

import {
  ArrowUpRightIcon,
  Container,
  Header,
  PercentCardStyleProps,
  SubTitle,
  Title,
} from "./styles";

type PercentCardProps = PressableProps & {
  type?: PercentCardStyleProps;
  percent: number;
};

export function PercentCard({
  percent,
  type = percent >= 50 ? "inTheDiet" : "offDiet",
  ...rest
}: PercentCardProps) {
  return (
    <Container type={type} {...rest}>
      <Header>
        <ArrowUpRightIcon type={type} name="arrow-up-right" />
      </Header>
      <Title>{percent}%</Title>
      <SubTitle>das refeições dentro da dieta</SubTitle>
    </Container>
  );
}
