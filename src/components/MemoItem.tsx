import React, { memo, VFC } from 'react';

import { Checkbox } from '@chakra-ui/checkbox';
import { Flex, Heading } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/react';
import { Textarea } from '@chakra-ui/textarea';
import { RiGhost2Line } from 'react-icons/ri';

import { PrimaryButton } from './PrimaryButton';
import { DeleteFunction } from './DeleteFunction';

// Todo
// チェックボックス(グレーアウトするかしないか、disableにするかしないか):todo
// checkboxをクリックで編集可能にすること: todo

type Props = {
  id: string;
  title: string;
  description: string;
  mark_div: number;
  onClick: (id: string) => void;
};

// MemoItemに格納されたid情報をHomeコンポーネントへ返す処理が必要になる
// どのメモがおされたのかを判定したいのでmemoitem側でonClick関数が必要になる

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
      _hover={{ cursor: 'pointer', opacity: 0.8 }}>
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
        <PrimaryButton onClick={() => onClick(id)}>更新</PrimaryButton>
        <DeleteFunction onClick={() => onClick(id)} />
        <Checkbox isChecked={checkedFlag} ml={3}>
          表示
        </Checkbox>
      </Flex>
    </Box>
  );
});

MemoItem.displayName = 'MemoItem';
