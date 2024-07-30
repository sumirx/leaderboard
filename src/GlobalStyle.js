import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Arial', sans-serif;
    background-color: #f0f2f5;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    font-size: 1rem;
  }
  
  .link {
    color: #fcba03;
    text-decoration: none;
  }

  .link:hover {
    color: #d8a702;
    text-decoration: underline;
  }
`;

export default GlobalStyle;
