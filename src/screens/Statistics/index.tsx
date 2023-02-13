import { useNavigation } from "@react-navigation/native";

import {
  ArrowLeftIcon,
  CardSubtitle,
  CardTitle,
  DangerCard,
  FooterCardsContainer,
  GeneralStatisticsCard,
  GoBackButton,
  StatisticsContainer,
  StatisticsContent,
  StatisticsContentTitle,
  StatisticsHeader,
  StatisticsHeaderSubtitle,
  StatisticsHeaderTitle,
  StatisticsStyleProps,
  SuccessCard,
} from "./styles";

type StatisticsProps = {
  type: StatisticsStyleProps;
};

export function Statistics({ type = "success" }: StatisticsProps) {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.navigate("home");
  }

  return (
    <StatisticsContainer type={type}>
      <GoBackButton onPress={handleGoBack}>
        <ArrowLeftIcon type={type} name="arrow-left" />
      </GoBackButton>

      <StatisticsHeader>
        <StatisticsHeaderTitle>90,86%</StatisticsHeaderTitle>
        <StatisticsHeaderSubtitle>
          das refeições dentro da dieta
        </StatisticsHeaderSubtitle>
      </StatisticsHeader>

      <StatisticsContent>
        <StatisticsContentTitle>Estatísticas gerais</StatisticsContentTitle>

        <GeneralStatisticsCard>
          <CardTitle>22</CardTitle>
          <CardSubtitle>
            melhor sequência de pratos dentro da dieta
          </CardSubtitle>
        </GeneralStatisticsCard>

        <GeneralStatisticsCard>
          <CardTitle>109</CardTitle>
          <CardSubtitle>refeições registradas</CardSubtitle>
        </GeneralStatisticsCard>

        <FooterCardsContainer>
          <SuccessCard>
            <CardTitle>99</CardTitle>
            <CardSubtitle>refeições dentro da dieta</CardSubtitle>
          </SuccessCard>

          <DangerCard>
            <CardTitle>10</CardTitle>
            <CardSubtitle>refeições fora da dieta</CardSubtitle>
          </DangerCard>
        </FooterCardsContainer>
      </StatisticsContent>
    </StatisticsContainer>
  );
}
