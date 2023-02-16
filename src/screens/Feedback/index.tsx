import { Image } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

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

type RouteParams = {
  status: string;
};

export function Feedback({}: FeedbackStyleProps) {
  const navigation = useNavigation();
  const route = useRoute();

  const { status } = route.params as RouteParams;

  function handleGoBack() {
    navigation.navigate("home");
  }
  return (
    <Container>
      {status === "inTheDiet" ? (
        <Highlight status={status}>
          <Title status={status}>Continue assim!</Title>
          <Subtitle status={status}>
            Você continua <SubtitleBold>dentro da dieta</SubtitleBold> muito
            bem!
          </Subtitle>
          <Image source={inTheDietImg} />
        </Highlight>
      ) : (
        <Highlight status={status}>
          <Title status={status}>Que pena!</Title>
          <Subtitle status={status}>
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
