import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0 auto;
        font-family: 'Fira Sans', sans-serif;
        font-size: 14px;
    }
    h1, h2, h3 {
        font-family: 'Josefin Slab', serif;
        font-weight: bold;
        text-transform: uppercase;
    }
`;

export default GlobalStyle;