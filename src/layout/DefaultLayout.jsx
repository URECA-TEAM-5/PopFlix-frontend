import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import AppPages from '../route/AppPages';

const DefaultLayout = () => {
  return (
    <div>
      <Header />
      <AppPages />
      <Footer />
    </div>
  );
};

export default DefaultLayout;
