import { TouchableProps } from "react-native-svg";
import { ButtonDietStyleProps, Container, Icon, Title } from "./styles";

type ButtonDietProps = TouchableProps &
  ButtonDietStyleProps & {
    title: string;
  };

export function ButtonDiet({ title, type, ...rest }: ButtonDietProps) {
  return (
    <Container type={type} {...rest}>
      <Icon type={type} />
      <Title>{title}</Title>
    </Container>
  );
}
