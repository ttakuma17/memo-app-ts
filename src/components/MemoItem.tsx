import React, { memo, VFC } from 'react';

import { Checkbox } from '@chakra-ui/checkbox';
import { Flex, Heading } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/react';
import { Textarea } from '@chakra-ui/textarea';
import { RiGhost2Line } from 'react-icons/ri';

import { PrimaryButton } from './PrimaryButton';

// メモのアイテムの要素
// 一覧画面のときはtextareaは編集ができないようにする : done
// メモのアイテムのデザインを整えること → 一旦mainブランチでデフォルトCSSを設定してから開発する:done
// checkboxは現状チェックにtrueを入れている → mark_divが1ならchecked 0ならuncheckedに: done
// MemoItemにAPIのデータを格納できるようにする:done

// 更新ボタン,削除ボタン,チェックボックス(グレーアウトするかしないか、disableにするかしないか):todo
// checkboxをクリックで制御可能に: todo

type Props = {
  // id: string;
  title: string;
  description: string;
  mark_div: number;
  // onClick: () => void;
};

export const MemoItem: VFC<Props> = memo((props) => {
  const { title, description, mark_div } = props;
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
      borderRadius="md">
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
        <PrimaryButton onClick={() => alert('更新ボタン')}>更新</PrimaryButton>
        <PrimaryButton onClick={() => alert('削除ボタン')}>削除</PrimaryButton>
        <Checkbox isChecked={checkedFlag}>表示</Checkbox>
      </Flex>
    </Box>
  );
});

MemoItem.displayName = 'MemoItem';
