import { TouchableProps } from "react-native-svg";
import {
  ArrowUpRightIcon,
  PercentCardContainer,
  PercentCardHeader,
  PercentCardStyleProps,
  PercentCardSubTitle,
  PercentCardTitle,
} from "./styles";

type PercentCardProps = TouchableProps & {
  type?: PercentCardStyleProps;
  percent: string;
};

export function PercentCard({
  type = "success",
  percent,
  ...rest
}: PercentCardProps) {
  return (
    <PercentCardContainer type={type} {...rest}>
      <PercentCardHeader>
        <ArrowUpRightIcon type={type} name="arrow-up-right" />
      </PercentCardHeader>
      <PercentCardTitle>{percent}%</PercentCardTitle>
      <PercentCardSubTitle>das refeições dentro da dieta</PercentCardSubTitle>
    </PercentCardContainer>
  );
}
