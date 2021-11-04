import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }

    body {
        background: linear-gradient(180deg, #385B94 0%, #273767 100%);
        background-size: cover;
        
        font-family: 'Poppins', sans-serif;

        .component{
            width: 1200px;
            height: 600px;

            margin: 0 auto;

            z-index: 0;
            position: absolute;
        }
    }
   
`