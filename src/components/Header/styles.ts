import styled from "styled-components/native";
import { CaretLeft } from "phosphor-react-native"; //biblioteca de icones
export const Container = styled.View`
  width: 100%;
  flex-direction: row; // um do lado do outro
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  width: 46px;
  height: 55px;
`;
//fazer com oque o icone seja um regiao de click
export const BackButton = styled.TouchableOpacity`
  flex: 1; //vai jogar o icone para o lado esquerdo da tela
`;

//CaretLeft nao é um componente padrao entao pra estilizar precisa usar o attrs
export const BackIcon = styled(CaretLeft).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.WHITE,
}))``;
