import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
}
html { height: 100%; }
body {
    min-height:100%; 
    position:relative; 
    padding-bottom: 85px; 

  
}
button {
    cursor: pointer;
}

ul {
    list-style: none;
}
`;
