import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export const StyledGlobal = createGlobalStyle`
    ${normalize}


    @font-face {
        font-family: 'Manrope';
        src: 
            url('/fonts/manrope/manrope-Regular.eot?#iefix') format('embedded-opentype'),  
            url('/fonts/manrope/manrope-Regular.otf')  format('opentype'),
            url('/fonts/manrope/manrope-Regular.woff') format('woff'), 
            url('/fonts/manrope/manrope-Regular.ttf')  format('truetype'), 
            url('/fonts/manrope/manrope-Regular.svg#manrope-Regular') format('svg');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'Manrope';
        src: 
            url('/fonts/manrope/manrope-Semibold.eot?#iefix') format('embedded-opentype'),  
            url('/fonts/manrope/manrope-Semibold.otf')  format('opentype'),
            url('/fonts/manrope/manrope-Semibold.woff') format('woff'), 
            url('/fonts/manrope/manrope-Semibold.ttf')  format('truetype'), 
            url('/fonts/manrope/manrope-Semibold.svg#manrope-Semibold') format('svg');
        font-weight: 600;
        font-style: normal;
    }

    @font-face {
        font-family: 'Manrope';
        src: 
            url('/fonts/manrope/manrope-Bold.eot?#iefix') format('embedded-opentype'),  
            url('/fonts/manrope/manrope-Bold.otf')  format('opentype'),
            url('/fonts/manrope/manrope-Bold.woff') format('woff'), 
            url('/fonts/manrope/manrope-Bold.ttf')  format('truetype'), 
            url('/fonts/manrope/manrope-Bold.svg#manrope-Bold') format('svg');
        font-weight: 700;
        font-style: normal;
    }


    html, body, #root {
        min-height: 100vh;
    }

    body {
        font: normal normal 100%/1.3 "Manrope", sans-serif;
        background: ${(props) => props.theme.background.secundary};
        color: ${(props) => props.theme.color.primary};
    }

    ::selection {
        background: ${(props) => props.theme.color.primary};
        color: #fff;
    }
`
