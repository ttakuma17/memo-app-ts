import React, { memo, VFC } from 'react';
import { Header } from '../components/Header';
import { MemoItem } from '../components/MemoItem';

export const Home: VFC = memo(() => {
  return (
    <>
      <Header />
      <p>Homeページです</p>
      <MemoItem />
    </>
  );
});

Home.displayName = 'Home';
