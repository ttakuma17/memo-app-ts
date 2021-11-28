import React, { memo, useCallback, useEffect, VFC } from 'react';
import { Wrap, WrapItem, useDisclosure } from '@chakra-ui/react';

import { Header } from '../components/Header';
import { MemoItem } from '../components/MemoItem';

import { useMemoData } from '../hooks/useMemoData';
import { useSelectMemo } from '../hooks/useSelectMemo';
import { UpdateMemoModal } from '../components/UpdateMemoModal';

// Todo
// checboxの値によってデフォルトでcheckedか否か切り替えて表示させる:done
// checkboxのクリックで切り替えが可能にする:will do

// onClickを押したときにidとmemosのデータを取得して開く処理を担当する関数が必要
// そのときに登場するのがonSelectMemoの処理となる

export const Home: VFC = memo(() => {
  const { getAllMemos, memos } = useMemoData();
  const { selectedMemo, onSelectMemo } = useSelectMemo();
  // メモ情報が保存されているHooksがほしい
  // 引数としてmemo情報を渡して上げるときに必要となる
  // Modal用のChakraUI - hooks
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => getAllMemos(), [memos]);
  // 依存配列にgetAllMemosのみを追加してもDeleteの再レンダリングはされなかった
  // updateボタンによる処理で再レンダリングがされていないのがなぜか
  // console.log(memos);
  // 再レンダリングの仕組みについては復習が必要
  // 依存配列にmemosを追加していなかったので、読み込みされなかった模様
  // 削除のときは再レンダリングされるが、更新のときは再レンダリングされない

  // idの取得はできたが処理として、複雑になりそうなのでカスタムフックへ
  const onClickMemo = useCallback(
    (id: string) => {
      // console.log(id);
      onSelectMemo({ id, memos, onOpen });
      onOpen();
    },
    [memos, onOpen, onSelectMemo]
  );

  // console.log(selectedMemo); // メモ情報は取れていることを確認
  // memosが更新されているかどうか memos をuseEffectの依存配列に追加して更新できているか
  // memosが更新されていなさそうなので一覧が更新されないと判断できる

  // Homeページで実装する
  // APIデータの取得中は取得中はローディング処理を実装したい
  // データ取得が完了したら、それぞれのメモアイテムの取得を行う

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
