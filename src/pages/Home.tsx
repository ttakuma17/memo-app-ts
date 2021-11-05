import React, { memo, VFC } from 'react';
import { Wrap, WrapItem } from '@chakra-ui/react';

import { Header } from '../components/Header';
import { MemoItem } from '../components/MemoItem';
import { useGetMemoData } from '../hooks/useGetMemoData';

export const Home: VFC = memo(() => {
  // const { getToken } = useGetMemoData();
  const { getAllMemo } = useGetMemoData();
  return (
    <>
      <Header />
      <Wrap p={4}>
        <WrapItem mx="auto">
          <MemoItem />
        </WrapItem>
        <WrapItem mx="auto">
          <MemoItem />
        </WrapItem>
        <WrapItem mx="auto">
          <MemoItem />
        </WrapItem>
      </Wrap>
      {/* {getToken()} */}
      {getAllMemo()}
    </>
  );
});

Home.displayName = 'Home';
