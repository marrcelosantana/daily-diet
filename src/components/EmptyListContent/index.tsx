import { Container, Icon, Title } from "./styles";

export function EmptyListContent() {
  return (
    <Container>
      <Icon name="no-meals" />
      <Title>Não há refeições registradas</Title>
    </Container>
  );
}
