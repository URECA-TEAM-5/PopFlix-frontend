import styled, { createGlobalStyle } from 'styled-components';

export const colors = {
  orange: '#f09605',
  white: '#ffffff',
  black: '#000000',
  navy_gray: '#25292e',
  cement_gray: '#84868d',
  space_gray: '#2e2f31',
  drak_gray: '#1c1e1f',
};

export const GlobalStyle = createGlobalStyle`
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

export const BaseLayout = styled.div`
  background-color: ${colors.black};
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
