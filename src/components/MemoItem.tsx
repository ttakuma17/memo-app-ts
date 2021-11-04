import React, { memo } from 'react';

import { Checkbox } from '@chakra-ui/checkbox';
import { Flex, Heading } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/react';
import { Textarea } from '@chakra-ui/textarea';
import { RiGhost2Line } from 'react-icons/ri';

import { PrimaryButton } from './PrimaryButton';

// メモのアイテムの要素
// 更新ボタン,削除ボタン,チェックボックス(グレーアウトするかしないか、disableにするかしないか)
// 一覧画面のときはtextareaは編集ができないようにする
// メモのアイテムのデザインを整えること → 一旦mainブランチでデフォルトCSSを設定してから開発する

// checkboxは現状チェックにtrueを入れている → mark_divが1ならchecked 0ならuncheckedに

export const MemoItem = memo(() => {
  return (
    <Box
      pt={2}
      pl={4}
      pr={4}
      w="360px"
      h="300px"
      bg="white"
      shadow="md"
      borderRadius="md">
      <Flex>
        <RiGhost2Line />
        <Heading size="md" pl={1} pb={4}>
          メモのタイトル(title)
        </Heading>
      </Flex>
      <Textarea size="sm" resize="none" h="180px" isReadOnly={true}>
        メモの説明(description)
      </Textarea>
      <Flex pt={2} alignItems="center">
        <PrimaryButton>編集ボタン</PrimaryButton>
        <PrimaryButton>削除ボタン</PrimaryButton>
        <Checkbox isChecked={true}>表示</Checkbox>
      </Flex>
    </Box>
  );
});

MemoItem.displayName = 'MemoItem';
