import { TouchableOpacityProps } from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Container,
  Title,
  ButtonTypeStyleProps,
  Icon,
  IconCommunity,
} from "./styles";

type ButtonProps = TouchableOpacityProps &
  ButtonTypeStyleProps & {
    title: string;
    type: string;
    icon?: keyof typeof MaterialIcons.glyphMap;
    iconCommunity?: keyof typeof MaterialCommunityIcons.glyphMap;
  };

export function Button({
  title,
  icon,
  iconCommunity,
  type,
  ...rest
}: ButtonProps) {
  return (
    <Container type={type} {...rest}>
      {icon && <Icon type={type} name={icon} />}
      {iconCommunity && <IconCommunity type={type} name={iconCommunity} />}
      <Title type={type}>{title}</Title>
    </Container>
  );
}
