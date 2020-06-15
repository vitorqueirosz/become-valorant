import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
     

    * {
        @import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@1,700&display=swap');

        padding: 0;
        margin: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body {
        background: #151D27;
        -webkit-font-smoothing: antialiased !important;
    }
    body, input, button {
        color: #222;
        font-size: 14px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
    }
    h1, h2, span {
        font-family: 'Ubuntu', sans-serif;
    }
    button {
        cursor: pointer;
    }
`;
