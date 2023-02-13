import { TouchableOpacityProps } from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import {
  ButtonContainer,
  ButtonTitle,
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
    <ButtonContainer type={type} {...rest}>
      {icon && <Icon type={type} name={icon} />}
      {iconCommunity && <IconCommunity type={type} name={iconCommunity} />}
      <ButtonTitle type={type}>{title}</ButtonTitle>
    </ButtonContainer>
  );
}
