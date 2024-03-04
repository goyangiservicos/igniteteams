import { useNavigation } from "@react-navigation/native";
import { Container, Logo, BackButton, BackIcon } from "./styles";
import logoImg from "@assets/logo.png";

type props = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: props) {
  const nativation = useNavigation();

  function hendleGoBack() {
    nativation.navigate("groups");
  }
  return (
    <Container>
      {showBackButton && ( // se showBackButton for verdadeiro "&&" mostra o BackIcon
        <BackButton onPress={hendleGoBack}>
          <BackIcon />
        </BackButton>
      )}
      <Logo source={logoImg} />
    </Container>
  );
}
