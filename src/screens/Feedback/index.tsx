import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import inTheDietImg from "@assets/woman.png";
import offDietImg from "@assets/man.png";

import { Button } from "@components/Button";

import {
  Container,
  Highlight,
  Subtitle,
  SubtitleBold,
  Title,
  FeedbackStyleProps,
} from "./styles";

export function Feedback({ isInDiet = true }: FeedbackStyleProps) {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.navigate("home");
  }
  return (
    <Container>
      {isInDiet ? (
        <Highlight isInDiet={isInDiet}>
          <Title isInDiet={isInDiet}>Continue assim!</Title>
          <Subtitle isInDiet={isInDiet}>
            Você continua <SubtitleBold>dentro da dieta</SubtitleBold> muito
            bem!
          </Subtitle>
          <Image source={inTheDietImg} />
        </Highlight>
      ) : (
        <Highlight isInDiet={isInDiet}>
          <Title isInDiet={isInDiet}>Que pena!</Title>
          <Subtitle isInDiet={isInDiet}>
            Você <SubtitleBold>saiu da dieta</SubtitleBold> dessa vez, mas
            continue se esforçando e não desista!
          </Subtitle>
          <Image source={offDietImg} />
        </Highlight>
      )}

      <Button
        type="dark"
        title="Ir para a página inicial"
        onPress={handleGoBack}
      />
    </Container>
  );
}
