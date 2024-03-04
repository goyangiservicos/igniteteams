import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
//com styled-components pode ser escritas as propriedades com o padrao web, separado por traços, sem aspas, dentro de `` terminado em ;

//estilo Container - da tela incial do app
export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 24px;
`;
