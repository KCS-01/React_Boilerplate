import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'NotoSansKR';
        background: ${({ theme }: { theme: any }) => theme.bgColor};
        color: ${({ theme }: { theme: any }) => theme.textColor};
        transition: all 0.25s linear;
    }

    button {
        /* cursor: pointer; */
        /* border: none; */
        /* outline: none; */
        color: ${({ theme }: { theme: any }) => theme.bgColor};
        background-color: ${({ theme }: { theme: any }) => theme.textColor};
    }
`;
