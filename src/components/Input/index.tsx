import { TextInputProps } from "react-native";
import { InputContainer, InputTitle, InputForm } from "./styles";

type Props = TextInputProps & {
  title: string;
};

export function Input({ title, ...rest }: Props) {
  return (
    <InputContainer>
      <InputTitle>{title}</InputTitle>
      <InputForm {...rest} />
    </InputContainer>
  );
}
