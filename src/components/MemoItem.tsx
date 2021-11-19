import React, { memo, VFC } from 'react';

import { Checkbox } from '@chakra-ui/checkbox';
import { Flex, Heading } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/react';
import { Textarea } from '@chakra-ui/textarea';
import { RiGhost2Line } from 'react-icons/ri';

import { PrimaryButton } from './PrimaryButton';
import { DeleteButton } from './DeleteButton';
import { UpdateMemoModal } from './UpdateMemoModal';

// Todo
// チェックボックス(グレーアウトするかしないか、disableにするかしないか):todo
// checkboxをクリックで編集可能にすること: todo
// 更新ボタンで行う処理
// 現時点ではタイトルと内容の更新のみを行えるようにする
// checkboxについては通常画面からでもできるようにしたらOK
// 更新ボタンを押すと、Modalが開くようにする
// Modalを開いたときの初期値は、該当のメモのIDに紐づくTitleとDescriptionのデータを表示させる
// 更新ボタンを押すと、作成済みのカスタムフックのupdateMemoを実行するという流れにする
// 何はともあれ、クリックしたときにIDを取得できるような実装が必要

type Props = {
  id: string;
  title: string;
  description: string;
  mark_div: number;
  onClick: (id: string) => void;
};

export const MemoItem: VFC<Props> = memo((props) => {
  const { id, title, description, mark_div, onClick } = props;
  const checkedFlag = mark_div == 1 ? true : false;

  return (
    <Box
      pt={2}
      pl={4}
      pr={4}
      w="360px"
      h="300px"
      bg="white"
      shadow="md"
      borderRadius="md"
      _hover={{ cursor: 'pointer', opacity: 0.8 }}
      onClick={() => onClick(id)}>
      <Flex>
        <RiGhost2Line />
        <Heading size="md" pl={1} pb={4}>
          {title}
        </Heading>
      </Flex>
      <Textarea size="sm" resize="none" h="180px" isReadOnly={true}>
        {description}
      </Textarea>
      <Flex pt={2} alignItems="center">
        <PrimaryButton onClick={() => alert('更新')}>更新</PrimaryButton>
        <DeleteButton />
        <Checkbox isChecked={checkedFlag} ml={3}>
          表示
        </Checkbox>
      </Flex>
    </Box>
  );
});

MemoItem.displayName = 'MemoItem';
