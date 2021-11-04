import React, { memo, VFC } from 'react';
import { Wrap, WrapItem } from '@chakra-ui/react';

import { Header } from '../components/Header';
import { MemoItem } from '../components/MemoItem';

export const Home: VFC = memo(() => {
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
    </>
  );
});

Home.displayName = 'Home';
