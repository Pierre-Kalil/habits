import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}

:root {
    --roxo-primario: #8e97fd;
    --roxo-secundario: #3c096c;
    --background: #f6f2f0;
    --caixa-de-texto: #e0aaff;
    --sombra-box: rgba(0, 0, 0, 0.67);
}

body {
}

`;
