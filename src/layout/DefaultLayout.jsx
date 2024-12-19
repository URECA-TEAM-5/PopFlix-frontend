import React from 'react';
import AppPages from '../route/AppPages';
import { BaseLayout, GlobalStyle } from '../global/globalStyle';
import Header from '../components/common/header/Header';
import Footer from '../components/common/footer/Footer';
import ScrollToTop from './ScrollToTop';
import { useLanding } from '../stores/landing/LandingStore';

const DefaultLayout = () => {
  const { streaming } = useLanding();

  return (
    <>
      <GlobalStyle />
      <BaseLayout className="base-layout regular">
        {!streaming && <Header className="header" />}
        <ScrollToTop />
        <div className="app-pages__section">
          <AppPages />
        </div>
        {!streaming && <Footer className="footer" />}
      </BaseLayout>
    </>
  );
};

export default DefaultLayout;
