import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { AppRouter } from "~routes/AppRouter";
import { GlobalStyle } from "~styles/globalStyles";
import theme from "~styles/theme";

export const App = () => {
    return (
        <ThemeProvider theme={theme.darkTheme}>
            <GlobalStyle />
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
        </ThemeProvider>
    );
};
