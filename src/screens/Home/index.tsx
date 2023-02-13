import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { PercentCard } from "@components/PercentCard";
import { HomeContainer, HomeContent, HomeTitle } from "./styles";

export default function Home() {
  return (
    <HomeContainer>
      <Header />
      <PercentCard percent="90,86" />

      <HomeContent>
        <HomeTitle>Refeições</HomeTitle>
        <Button type="dark" title="Nova refeição" icon="add" />
      </HomeContent>
    </HomeContainer>
  );
}
