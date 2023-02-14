import { Container, Icon, StatusTagStyleProps, Title } from "./styles";

type StatusTagProps = StatusTagStyleProps & {
  title: string;
};

export function StatusTag({ title, type }: StatusTagProps) {
  return (
    <Container>
      <Icon type={type} />
      <Title>{title}</Title>
    </Container>
  );
}
