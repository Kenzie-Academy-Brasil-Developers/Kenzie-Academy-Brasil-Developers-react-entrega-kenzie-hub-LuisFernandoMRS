import { createGlobalStyle } from "styled-components";

const StyleGlobal = createGlobalStyle`

    *{
        
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        list-style: none;
    }

    :root{
        /*---------------------- Colors ---------------------*/

        /* Primary Palette */

        --color-primary: #FF577F;

        --color-primary-Focus: #FF427F;

        --color-primary-Negative: #59323F;

        /* Grey Scale Palette */

        --grey-4: #121214;
       
        --grey-3: #212529;
       
        --grey-2: #343B41;
       
        --grey-1: #868E96;

        --grey-1-50:#868e9680;
       
        --grey-0: #F8F9FA;

        --modal-1: #12121c80;

        /* Feedback Palette */

        --sucess: #3FE864;

        --negative: #E83F5B;

    }

    body{
        width: 100vw;
        height: 100vh;
        font-family: 'Inter';
        font-style: normal;
        background-color: var(--grey-4);

       > div{
            height: 100%;
        }
    }
button{
    cursor: pointer;
}
`;
export default StyleGlobal;
