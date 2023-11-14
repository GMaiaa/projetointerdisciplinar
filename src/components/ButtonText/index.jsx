import { Container } from "./styles";

export function ButtonText({ title, isActive = false, isAdminPanel = false, ...rest }) {
  return (
    <Container type="button" isAdminPanel={isAdminPanel} isActive={isActive} {...rest}>
      {title}
    </Container>
  );
}
