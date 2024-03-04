import { Container, Logo, BackButton, BackIcon } from "./styles";
import logoImg from "@assets/logo.png";

type props = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: props) {
  return (
    <Container>
      {showBackButton && ( // se showBackButton for verdadeiro "&&" mostra o BackIcon
        <BackButton>
          <BackIcon />
        </BackButton>
      )}
      <Logo source={logoImg} />
    </Container>
  );
}
