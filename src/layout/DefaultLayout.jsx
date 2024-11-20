import React from 'react';
import AppPages from '../route/AppPages';
import { BaseLayout, GlobalStyle } from '../global/globalStyle';
<<<<<<< HEAD
=======
import Header from '../components/common/Header/Header';
import Footer from '../components/common/Footer/Footer';
>>>>>>> dev

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
