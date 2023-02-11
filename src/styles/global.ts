import { createGlobalStyle } from "styled-components";


export const GlobalStyled = createGlobalStyle`
    body{
        font:400 1rem  Nunito, sans-serif;

        a{
            color: ${props => props.theme['blue']}
        }

        a:hover{
            color: ${props => props.theme['blue']};
            text-decoration: underline;
        }

        input:hover{
            color: ${props => props.theme['blue']}
        }

        color: ${props => props.theme['base-title']};
    }
`;