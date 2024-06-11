import { createGlobalStyle } from 'styled-components'

export const Globalstyle = createGlobalStyle`
   
   *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        scroll-behavior: smooth;

    }
   
    body{
        background-color:${(props) => props.theme.pink};
        font-size: 1.25rem;
    }
    
    p{
        font-family: "Inter", sans-serif;

    }

    h1{
        font-family: 'Leelawadee UI', sans-serif;
        font-size: 3rem;
    }

    a{
        text-decoration: none;
        color: ${(props) => props.theme.white};
    }
    
    button{
        display: flex;
        align-items: center;
        justify-content: center;

        box-sizing: none;
        border: none;

        font-family: "Inter", sans-serif;

        cursor: pointer;
    }
`
