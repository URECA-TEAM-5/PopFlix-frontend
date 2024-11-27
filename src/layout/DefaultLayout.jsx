import React from 'react';
import AppPages from '../route/AppPages';
import { BaseLayout, GlobalStyle } from '../global/globalStyle';
import Header from '../components/common/header/Header';
import Footer from '../components/common/footer/Footer';

const DefaultLayout = () => {
  return (
    <>
      <GlobalStyle />
      <BaseLayout className="base-layout regular">
        <Header className="header" />
        <AppPages />
        <Footer className="footer" />
      </BaseLayout>
    </>
  );
};

export default DefaultLayout;
