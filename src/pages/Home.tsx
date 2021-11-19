import React, { memo, useEffect, VFC } from 'react';
import { Wrap, WrapItem } from '@chakra-ui/react';

import { Header } from '../components/Header';
import { MemoItem } from '../components/MemoItem';

import { useGetMemoData } from '../hooks/useGetMemoData';

// Todo
// checboxの値によってデフォルトでcheckedか否か切り替えて表示させる:done
// checkboxのクリックで切り替えが可能にする:will do

// onClickを押したときにidとmemosのデータを取得して開く処理を担当する関数が必要
// そのときに登場するのがonSelectMemoの処理となる

export const Home: VFC = memo(() => {
  const { getAllMemos, memos } = useGetMemoData();

  useEffect(() => getAllMemos(), []);
  console.log(memos);

  return (
    <>
      <Header />
      <Wrap p={4}>
        {memos.map((memo) => (
          <WrapItem key={memo.id} mx="auto">
            <MemoItem
              id="id"
              title={memo.title}
              description={memo.description}
              mark_div={memo.mark_div}
              onClick={() => console.log('test')}
            />
          </WrapItem>
        ))}
      </Wrap>
    </>
  );
});

Home.displayName = 'Home';
