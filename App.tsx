import { Groups } from "@screens/Groups";
import { ThemeProvider } from "styled-components/native";
import theme from "src/theme";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { Loading } from "@components/Loading";
import { StatusBar } from "react-native";
import { Routes } from "./src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  //fontsLoad está verificnado se as fontes foram carregadas para depois chamar a aplicacao (ActivityIndicator)
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent //essa funcao faz com que o aplicativo comece de fato do topo do dipositivo
      />
      {fontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  );
}
