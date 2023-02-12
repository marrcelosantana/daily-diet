import { Header } from "@components/Header";
import { PercentCard } from "@components/PercentCard";
import { HomeContainer } from "./styles";

export default function Home() {
  return (
    <HomeContainer>
      <Header />
      <PercentCard />
    </HomeContainer>
  );
}
