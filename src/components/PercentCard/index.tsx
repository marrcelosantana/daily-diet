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
};

export function PercentCard({ type = "success", ...rest }: PercentCardProps) {
  return (
    <PercentCardContainer type={type} {...rest}>
      <PercentCardHeader>
        <ArrowUpRightIcon type={type} name="arrow-up-right" />
      </PercentCardHeader>
      <PercentCardTitle>90,86%</PercentCardTitle>
      <PercentCardSubTitle>das refeições dentro da dieta</PercentCardSubTitle>
    </PercentCardContainer>
  );
}
