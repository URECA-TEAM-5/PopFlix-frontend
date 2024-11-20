import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import AppPages from '../route/AppPages';
import { BaseLayout, GlobalStyle } from '../global/globalStyle';

const DefaultLayout = () => {
  return (
    <>
      <GlobalStyle />
      <BaseLayout className="bold">
        <Header />
        <AppPages />
        <Footer />
      </BaseLayout>
    </>
  );
};

export default DefaultLayout;
