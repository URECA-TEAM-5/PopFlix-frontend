import React from 'react';
import AppPages from '../route/AppPages';
import { BaseLayout, GlobalStyle, MainContainer } from '../global/globalStyle';
import Header from '../components/common/Header/Header';
import Footer from '../components/common/Footer/Footer';

const DefaultLayout = () => {
  return (
    <>
      <GlobalStyle />
      <BaseLayout className="bold">
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
