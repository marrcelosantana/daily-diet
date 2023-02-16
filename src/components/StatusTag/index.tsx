import { Container, Icon, StatusTagStyleProps, Title } from "./styles";

type StatusTagProps = StatusTagStyleProps & {};

export function StatusTag({ type }: StatusTagProps) {
  return (
    <Container>
      <Icon type={type} />
      {type === "inTheDiet" ? (
        <Title>Dentro da dieta</Title>
      ) : (
        <Title>Fora da dieta</Title>
      )}
    </Container>
  );
}
