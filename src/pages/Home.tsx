import React, { memo, VFC } from 'react';
import { Header } from '../components/Header';

export const Home: VFC = memo(() => {
  return (
    <>
      <Header />
    </>
  );
});

Home.displayName = 'Home';
