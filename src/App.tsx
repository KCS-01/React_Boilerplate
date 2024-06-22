import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "~styles/globalStyles";
import theme from "~styles/theme";

export const App = () => {
    return (
        <ThemeProvider theme={theme.darkTheme}>
            <GlobalStyle />
        </ThemeProvider>
    );
};
