import React from 'react';
import AppPages from '../route/AppPages';
import { BaseLayout, GlobalStyle, MainContainer, Thema } from '../global/globalStyle';
import Header from '../components/common/header/Header';
import Footer from '../components/common/footer/Footer';

const DefaultLayout = () => {
  return (
    <>
      <GlobalStyle />
      <Thema className="regular">
        <BaseLayout>
          <Header />
          <MainContainer>
            <AppPages />
          </MainContainer>
        </BaseLayout>
        <Footer />
      </Thema>
    </>
  );
};

export default DefaultLayout;
