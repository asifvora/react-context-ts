import { ThemeProvider } from "styled-components";
import { Content } from "./components/Content";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Container } from "./components/styles/Container.styled";
import { GlobalStyles } from "./components/styles/Global.styled";
import { MyProvider } from "./context";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
  mobile: '768px'
};

const App: React.FC = () => {
  return (
    <MyProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <Container>
          <Content />
        </Container>
        <Footer />
      </ThemeProvider>
    </MyProvider>
  );
};

export default App;
