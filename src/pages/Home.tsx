import React, { memo, VFC } from 'react';
import { Header } from '../components/Header';

export const Home: VFC = memo(() => {
  return (
    <>
      <Header />
      <p>Homeページです</p>
    </>
  );
});

Home.displayName = 'Home';
