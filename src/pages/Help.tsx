import React, { memo, VFC } from 'react';
import { Header } from '../components/Header';

export const Help: VFC = memo(() => {
  return (
    <>
      <Header />
      <p>Helpページ</p>
    </>
  );
});

Help.displayName = 'Help';
