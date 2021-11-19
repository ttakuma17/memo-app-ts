import { useState, useCallback } from 'react';

type Memo = {
  id: string;
  title: string;
  category: string;
  description: string;
  date: string;
  mark_div: number;
};

type Props = {
  id: string;
  memos: Array<Memo>;
  onOpen: () => void;
};

// targetMemoの型定義は検討する必要がある

export const useSelectMemo = () => {
  const [selectedMemo, setSelectedMemo] = useState<Memo | null>(null);
  const onSelectMemo = useCallback((props: Props) => {
    const { id, memos, onOpen } = props;
    if (memos === null) return false;
    const targetMemo = memos.find((memo) => memo.id === id);
    setSelectedMemo(targetMemo!);
    onOpen();
  }, []);
  return { onSelectMemo, selectedMemo };
};
