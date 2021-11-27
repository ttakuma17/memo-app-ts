import React, { memo, useCallback, useEffect, VFC } from 'react';
import { Wrap, WrapItem, useDisclosure } from '@chakra-ui/react';

import { Header } from '../components/Header';
import { MemoItem } from '../components/MemoItem';

import { useGetMemoData } from '../hooks/useGetMemoData';
import { useSelectMemo } from '../hooks/useSelectMemo';
import { UpdateMemoModal } from '../components/UpdateMemoModal';

// Todo
// checboxの値によってデフォルトでcheckedか否か切り替えて表示させる:done
// checkboxのクリックで切り替えが可能にする:will do

// onClickを押したときにidとmemosのデータを取得して開く処理を担当する関数が必要
// そのときに登場するのがonSelectMemoの処理となる

// Modalの出し分けをしたい

export const Home: VFC = memo(() => {
  const { getAllMemos, memos } = useGetMemoData();
  const { selectedMemo, onSelectMemo } = useSelectMemo();
  // メモ情報が保存されているHooksがほしい
  // 引数としてmemo情報を渡して上げるときに必要となる
  // Modal用のChakraUI - hooks
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => getAllMemos(), [memos]);
  // console.log(memos);
  // 再レンダリングの仕組みについては復習が必要
  // 依存配列にmemosを追加していなかったので、読み込みされなかった模様

  // idの取得はできたが処理として、複雑になりそうなのでカスタムフックへ
  const onClickMemo = useCallback(
    (id: string) => {
      console.log(id);
      onSelectMemo({ id, memos, onOpen });
      onOpen();
    },
    [memos, onOpen, onSelectMemo]
  );

  // console.log(selectedMemo); // メモ情報は取れていることを確認
  // memosが更新されているかどうか memos をuseEffectの依存配列に追加して更新できているか
  // memosが更新されていなさそうなので一覧が更新されないと判断できる

  return (
    <>
      <Header />
      <Wrap p={4} justify="center">
        {memos.map((memo) => (
          <WrapItem key={memo.id} mx="auto">
            <MemoItem
              id={memo.id}
              title={memo.title}
              description={memo.description}
              mark_div={memo.mark_div}
              onClick={onClickMemo}
            />
          </WrapItem>
        ))}
      </Wrap>
      <UpdateMemoModal isOpen={isOpen} onClose={onClose} memos={selectedMemo} />
    </>
  );
});

Home.displayName = 'Home';
