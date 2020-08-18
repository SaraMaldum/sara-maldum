import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0 auto;
        font-family: 'Fira Sans', sans-serif;
    }
    h1, h2, h3 {
        font-family: 'Josefin Slab', serif;
    }
`;

export default GlobalStyle;