import React, { memo, useEffect, VFC } from 'react';
import { Wrap, WrapItem } from '@chakra-ui/react';

import { Header } from '../components/Header';
import { MemoItem } from '../components/MemoItem';

import { useGetMemoData } from '../hooks/useGetMemoData';

// key={memo.id}
// title={memo.title}
// description={memo.description}
// mark_div={memo.mark_div}
// 上記データの取得ができることについては確認
// 取得データのコンポーネントが表示されていない
// map関数内の指定がおかしそう
// その後のデータ取得は正常に行われている
// WrapItemの間に仕込んだconsole.logで順番にidを取得する処理は行われている
// MemoItemだけが表示されない理由が????? 要素が大きすぎて入らいないということとか？ → 関係ない

// 対応が必要な内容
// idの値によって、checboxの値を切り替え
// map関数内のMemoItemコンポーネントが表示されない事象を解消 → map関数の表示の際に
// map((memo) => (中身) と指定すべきところが map((memo) => {}記述していたことから表示されていなかった

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
              title={memo.title}
              description={memo.description}
              mark_div={memo.mark_div}
            />
          </WrapItem>
        ))}
      </Wrap>
    </>
  );
});

Home.displayName = 'Home';
