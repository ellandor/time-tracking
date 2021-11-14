import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`
    :root {

        // PRIMARY

        --blue:         hsl(246, 80%, 60%);
        --light-orange: hsl(15, 100%, 70%);     // work
        --soft-blue:    hsl(195, 74%, 62%);     // play
        --light-red:    hsl(348, 100%, 68%);    // study
        --lime-green:   hsl(145, 58%, 55%);     // exercise
        --violet:       hsl(264, 64%, 52%);     // social
        --yellow:       hsl(43, 84%, 65%);      // self care


        // NEUTRAL

        --very-dark-blue:   hsl(226, 43%, 10%);
        --dark-blue:        hsl(235, 46%, 20%);
        --desaturated-blue: hsl(235, 45%, 61%);
        --pale-blue:        hsl(236, 100%, 87%);
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) { font-size: 93.75%; }
        @media (max-width: 768px)  { font-size: 85%;    }
        @media (max-width: 480px)  { font-size: 75%;    }
        @media (max-width: 320px)  { font-size: 65%;    }
    }

    html, body, #__next {
        width: 100%;
        height: 100%;
    }

    body {
        font-family: 'Rubik', sans-serif;
    }

    #__next {
        background: var(--very-dark-blue);

        display: flex;
        justify-content: center;
        align-items: center;
    }

    a  { text-decoration: none; }
    ul { list-style: none;      }
`
