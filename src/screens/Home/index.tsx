import { useNavigation } from "@react-navigation/native";

import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { PercentCard } from "@components/PercentCard";

import { HomeContainer, HomeContent, HomeTitle } from "./styles";

export default function Home() {
  const navigation = useNavigation();

  function handleOpenStatistics() {
    navigation.navigate("statistics");
  }

  return (
    <HomeContainer>
      <Header />
      <PercentCard percent="90,86" onPress={handleOpenStatistics} />

      <HomeContent>
        <HomeTitle>Refeições</HomeTitle>
        <Button type="dark" title="Nova refeição" icon="add" />
      </HomeContent>
    </HomeContainer>
  );
}
