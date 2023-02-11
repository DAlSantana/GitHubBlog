import { ThemeProvider } from "styled-components";
import { Router } from "./routes/routes";
import { GlobalStyled } from "./styles/global";
import { DefaultTheme } from "./styles/themes/default";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyled />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
