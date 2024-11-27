import { createGlobalStyle } from 'styled-components';
import backgroundImage from '../background.jpg'; // Import the background image

export const GlobalStyles = createGlobalStyle`
   {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-color: #f7f9fc;
    color: #333;
    overflow-x: hidden;
    filter: brightness(1.05); /* Apply slight brightness to the body */
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  h1, h2, h3, h4 {
    font-weight: bold;
  }

  p {
    line-height: 1.6;
    color: #555;
  }

  /* Global styling for links */
  a {
    transition: color 0.3s ease;
  }

  a:hover {
    color: #025a94; /* Apply hover effect on links */
  }

  /* Add other global styles here */
`;
