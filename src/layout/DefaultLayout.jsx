import React from 'react';
import AppPages from '../route/AppPages';
import { BaseLayout, GlobalStyle, MainContainer, Thema } from '../global/globalStyle';
import Header from '../components/common/header/Header';
import Footer from '../components/common/footer/Footer';

const DefaultLayout = () => {
  return (
    <>
      <GlobalStyle />
      <Thema className="thema regular">
        <BaseLayout className="base-layout">
          <Header className="header" />
          <MainContainer className="mainContainer">
            <AppPages />
          </MainContainer>
          <Footer className="footer" />
        </BaseLayout>
      </Thema>
    </>
  );
};

export default DefaultLayout;
