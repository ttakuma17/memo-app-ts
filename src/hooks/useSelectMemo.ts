import { useState, useCallback } from 'react';
import { Memo } from '../types/api/memo';

type Props = {
  id: string;
  memos: Array<Memo>;
  onOpen: () => void;
};

// targetMemoの型定義は検討する必要がある
// ここでやりたいことはクリックされたメモのデータの取得 IDが一致したメモを返して上げる

export const useSelectMemo = () => {
  const [selectedMemo, setSelectedMemo] = useState<Memo | null>(null);
  const onSelectMemo = useCallback((props: Props) => {
    const { id, memos } = props;
    if (memos === null) return false;
    const targetMemo = memos.find((memo) => memo.id === id);
    setSelectedMemo(targetMemo ?? null);
  }, []);
  return { onSelectMemo, selectedMemo };
};
