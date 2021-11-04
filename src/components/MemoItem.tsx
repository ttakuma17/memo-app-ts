import React, { memo } from 'react';

import { Checkbox } from '@chakra-ui/checkbox';
import { Flex, Heading } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/react';
import { Textarea } from '@chakra-ui/textarea';

import { PrimaryButton } from './PrimaryButton';

// メモのアイテムの要素
// 更新ボタン,削除ボタン,チェックボックス(グレーアウトするかしないか、disableにするかしないか)
// 一覧画面のときはtextareaは編集ができないようにする
// メモのアイテムのデザインを整えること → 一旦mainブランチでデフォルトCSSを設定してから開発進める

export const MemoItem = memo(() => {
  return (
    <>
      <Flex borderRadius="md">
        <Box p={4} shadow="md" w="md">
          <Box>
            <Heading size="md">メモのタイトル(title)を格納</Heading>
          </Box>
          <Box pt={4}>
            <Textarea>メモの説明(description)を格納</Textarea>
            <PrimaryButton>編集ボタン</PrimaryButton>
            <PrimaryButton>削除ボタン</PrimaryButton>
            <Checkbox>非表示</Checkbox>
          </Box>
        </Box>
      </Flex>
    </>
  );
});

MemoItem.displayName = 'MemoItem';
