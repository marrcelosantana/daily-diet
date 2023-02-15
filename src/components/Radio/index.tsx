import { useEffect, useState } from "react";
import {
  Container,
  OptionIcon,
  OptionsContainer,
  OptionText,
  OptionWrapper,
  Title,
} from "./styles";

type RadioProps = {
  title: string;
  options: string[];
  onSelect: (option: string) => void;
  prevValue?: string;
};

export function Radio({ title, options, prevValue, onSelect }: RadioProps) {
  const [userOption, setUserOption] = useState<string | null>(null);

  function handleUserOption(option: string) {
    onSelect(option);
    setUserOption(option);
  }

  useEffect(() => {
    if (prevValue) {
      setUserOption(prevValue);
    }
  }, [prevValue]);

  return (
    <Container>
      <Title>{title}</Title>
      <OptionsContainer>
        {options.map((option, index) => (
          <OptionWrapper
            key={option}
            type={option === "Sim" ? "inTheDiet" : "offDiet"}
            hasMarginLeft={index > 0}
            isSelected={option === userOption}
            onPress={() => handleUserOption(option)}
          >
            <OptionIcon type={option === "Sim" ? "inTheDiet" : "offDiet"} />
            <OptionText>{option}</OptionText>
          </OptionWrapper>
        ))}
      </OptionsContainer>
    </Container>
  );
}
