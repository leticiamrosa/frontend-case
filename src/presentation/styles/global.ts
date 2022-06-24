import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

 @font-face {
  font-family: 'Source Sans Pro', sans-serif;
  src: url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,400;0,700;1,400&display=swap');
 }

  body, input, button {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 14px;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    box-sizing: border-box;
  }
  *:focus {
    outline: 0;
  }

  html,body, #root {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px 'Lato', -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
    font-size: 16px;
  }

  ul {
    list-style: none;
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }
`
