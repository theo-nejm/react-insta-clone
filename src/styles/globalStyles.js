import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  }

  body { 
    background: #FAFAFA;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`

export default GlobalStyle;

export const Container = styled.div`
  height: max-content;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`