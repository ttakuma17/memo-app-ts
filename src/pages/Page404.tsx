import React, { memo, VFC } from 'react';
import { Header } from '../components/Header';

export const Page404: VFC = memo(() => {
  return (
    <>
      <Header />
      <h2>404ページ</h2>
      <p>指定されたページは存在しません</p>
    </>
  );
});

Page404.displayName = 'Page404';
