import { Button } from '@chakra-ui/button';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
} from '@chakra-ui/modal';
import React, { memo } from 'react';
import { useGetMemoData } from '../hooks/useGetMemoData';

// 型の不一致を解消しないといけない : 解消done
//    leastDestructiveRef={cancelRef} 36 付近
// MutableRefObject<undefined>を型RefObject<FocusableElement>に割り当てることはできません
// プロパティ current の方に互換性はありません
// 型undefinedを型'FocusableElement|null'に割り当てることはできません

//  <Button ref={cancelRef} onClick={onClose}> 49付近
// MutableRefObject<undefined>を型RefObject<FocusableElement>に割り当てることはできません
// プロパティ current の方に互換性はありません
// 型undefinedを型'HTMLButtonElement|null'に割り当てることはできません

// delete関数に対してidのデータを紐付ける処理を実装すれば完成となる → どういう管理方法にすべきかが定まっていないので保留とする

export const DeleteButton = memo(() => {
  // ブローバルステートに格納したidを呼び出す
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef<HTMLButtonElement>(null);
  const { deleteMemo } = useGetMemoData();

  return (
    <>
      <Button colorScheme="red" onClick={() => setIsOpen(true)}>
        削除
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              メモデータの削除
            </AlertDialogHeader>

            <AlertDialogBody>
              本当にデータを削除しても良いですか?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                いいえ
              </Button>
              <Button
                colorScheme="red"
                onClick={(id) => {
                  deleteMemo(id);
                  onClose();
                }}
                ml={3}>
                はい
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
});

DeleteButton.displayName = 'DeleteButton';

// https://chakra-ui.com/docs/overlay/alert-dialog
