import React from 'react';
import AppPages from '../route/AppPages';
import { BaseLayout, GlobalStyle, MainContainer } from '../global/globalStyle';
import Header from '../components/common/header/Header';
import Footer from '../components/common/footer/Footer';

const DefaultLayout = () => {
  return (
    <>
      <GlobalStyle />
      <BaseLayout className="regular">
        <Header />
        <MainContainer>
          <AppPages />
        </MainContainer>
        <Footer />
      </BaseLayout>
    </>
  );
};

export default DefaultLayout;
