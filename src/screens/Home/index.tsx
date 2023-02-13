import { useNavigation } from "@react-navigation/native";

import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { PercentCard } from "@components/PercentCard";

import { Container, Content, Title } from "./styles";

export default function Home() {
  const navigation = useNavigation();

  function handleOpenStatistics() {
    navigation.navigate("statistics");
  }

  function handleRegisterMeal() {
    navigation.navigate("register");
  }

  return (
    <Container>
      <Header />
      <PercentCard percent="90,86" onPress={handleOpenStatistics} />

      <Content>
        <Title>Refeições</Title>
        <Button
          type="dark"
          title="Nova refeição"
          icon="add"
          onPress={handleRegisterMeal}
        />
      </Content>
    </Container>
  );
}
