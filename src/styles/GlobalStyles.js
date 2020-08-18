import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Fira+Sans&family=Josefin+Slab&display=swap'); 

    body {
        margin: 0 auto;
        font-family: 'Fira Sans', sans-serif;
    }
    h1 {
        font-family: 'Josefin Slab', serif;
    }
`;

export default GlobalStyle;