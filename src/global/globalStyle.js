import styled, { createGlobalStyle } from 'styled-components';

export const colors = {
  orange: '#f09605',
  white: '#ffffff',
  black: '#000000',
  navy_gray: '#25292e',
  cement_gray: '#84868d',
  space_gray: '#2e2f31',
  drak_gray: '#1c1e1f',
  beige: '#ece1c3',
};

export const GlobalStyle = createGlobalStyle`
  #root, body {
    display: block;
    margin: 0;
    padding: 0;
    background-color: ${colors.black};
  }

  @font-face {
      font-family: 'Paperlogy-8ExtraBold';
      src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2408-3@1.0/Paperlogy-8ExtraBold.woff2') format('woff2');
      font-weight: 800;
      font-style: normal;
  }

  @font-face {
    font-family: 'SUIT-Regular';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'SUIT-Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Bold.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  h1, h2, h3, h4, h5, h6, p, button {
    font-family: 'SUIT-Bold', sans-serif;
    margin: 0;
    padding: 0;
  }

  div, p, span {
    margin: 0;
    padding: 0;
  }

  .extra-bold {
    font-family: 'Paperlogy-8ExtraBold', sans-serif; 
    color: ${colors.white};
  }

  .bold {
    font-family: 'SUIT-Bold', sans-serif; 
    color: ${colors.white};
  }

  .regular {
    font-family: 'SUIT-Regular', sans-serif; 
    color: ${colors.white};
  }
`;

export const Thema = styled.div`
  background-color: ${colors.black};
`;

export const BaseLayout = styled.div`
  position: relative;
  min-width: 100vw;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainContainer = styled.div`
  padding: 1.9rem 16.25rem;
`;
