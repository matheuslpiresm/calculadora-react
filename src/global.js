import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    *, body{
        background-color: ${props => (props.darkMode ? 'var(--cor_fundoEscuro)' : 'white')};
        margin: 0;
        padding: 0;
    }
    body{
        color: ${props => (props.darkMode ? 'green' : 'black')
    }
`