import { TouchableProps } from "react-native-svg";
import {
  ArrowUpRightIcon,
  Container,
  Header,
  PercentCardStyleProps,
  SubTitle,
  Title,
} from "./styles";

type PercentCardProps = TouchableProps & {
  type?: PercentCardStyleProps;
  percent: string;
};

export function PercentCard({
  type = "inTheDiet",
  percent,
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
