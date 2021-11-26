import React, { ChangeEvent, memo, useEffect, useState, VFC } from 'react';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Stack } from '@chakra-ui/layout';
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/modal';
import { Textarea } from '@chakra-ui/textarea';
import { Memo } from '../types/api/memo';
import { PrimaryButton } from './PrimaryButton';
import { useGetMemoData } from '../hooks/useGetMemoData';

// Modalに表示させる情報はtitleとdescriptionのみでよい
type Props = {
  memos: Memo | null;
  onClose: () => void;
  isOpen: boolean;
};

export const UpdateMemoModal: VFC<Props> = memo((props) => {
  // propsにmemosを渡している → updateの処理が完了すると値が変わっているはずなので再レンダリングされてほしい
  const { memos, isOpen, onClose } = props;
  const { updateMemo } = useGetMemoData();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    setTitle(memos?.title ?? '');
    setDescription(memos?.description ?? '');
  }, [memos]);

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onChangeDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  // コンポーネントの中身を記載
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      autoFocus={false}
      motionPreset="slideInBottom">
      <ModalOverlay />
      <ModalContent pb={2}>
        <ModalHeader>メモ更新</ModalHeader>
        <ModalCloseButton />
        <ModalBody mx={4}>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>タイトル</FormLabel>
              <Input value={title} onChange={onChangeTitle} />
            </FormControl>
            <FormControl>
              <FormLabel>説明</FormLabel>
              <Textarea
                size="sm"
                resize="none"
                h="180px"
                value={description}
                onChange={onChangeDescription}
              />
            </FormControl>
          </Stack>
        </ModalBody>
        <ModalFooter>
          <PrimaryButton
            onClick={() => {
              // メッセージが表示される前に、モーダルが閉じてしまうところは制御したい
              updateMemo(memos?.id, title, description);
              // コンポーネントの再レンダリングが走らず、更新したのに読み込みをかけなければ画面の更新がされていない
              onClose();
            }}>
            更新
          </PrimaryButton>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
});

UpdateMemoModal.displayName = 'MemoDetailModal';
