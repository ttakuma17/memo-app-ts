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

// idの連携について

export const UpdateMemoModal: VFC<Props> = memo((props) => {
  const { memos, isOpen, onClose } = props;
  const { updateMemo } = useGetMemoData();
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    setId(memos?.id ?? '');
    setTitle(memos?.title ?? '');
    setDescription(memos?.description ?? '');
  }, [memos]);

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onChangeDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(e.target.value);
  };

  // コンポーネントの中身を記載
  return (
    // ChakraUIのModal機能を利用して判断する
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
              updateMemo(id);
            }}>
            更新
          </PrimaryButton>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
});

UpdateMemoModal.displayName = 'MemoDetailModal';
