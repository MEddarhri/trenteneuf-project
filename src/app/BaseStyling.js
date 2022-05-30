import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`

    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Inter', sans-serif;
    }
    a{
        cursor: pointer;
        text-decoration: none;
    }
    button{
        background-color: transparent;
        cursor: pointer;
        border: none;
        &:focus,&:active{
            outline: none;
        }
    }
    input{
        border: none;
        &:focus{
            outline: none;
        }
    }
    
`;
