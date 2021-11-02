import React, { memo, useCallback, VFC } from 'react';
import { Flex, Heading, Spacer, Link, Box, Text } from '@chakra-ui/react';
import { FaReact } from 'react-icons/fa';
import { useHistory } from 'react-router';

// イベントの型定義が必要となる
export const Header: VFC = memo(() => {
  // react router dom の useHistoryを利用してルーティングする
  const history = useHistory();

  // Link メモ一覧を押したときの処理を記載する関数
  const onClickHome = useCallback(() => history.push('/home'), []);

  // Link ヘルプを押したときの処理を記載する関数
  const onClickHelp = useCallback(() => history.push('help'), []);

  // Link ログアウトを押したときの処理を記載する関数
  const onClickLogout = useCallback(() => history.push('/'), []);

  return (
    <>
      <Flex as="nav" bg="cyan.600" color="gray.50">
        <Heading as="h1" size="lg" p={4}>
          <Flex align="center">
            <FaReact />
            <Text pl={2}>何でもメモアプリ</Text>
          </Flex>
        </Heading>
        <Spacer />
        <Flex align="center">
          <Box pr={4}>
            <Link onClick={onClickHome}>メモ一覧</Link>
          </Box>
          <Box pr={4}>
            <Link onClick={onClickHelp}>ヘルプ</Link>
          </Box>
          <Box pr={4}>
            <Link onClick={onClickLogout}>ログアウト</Link>
          </Box>
        </Flex>
      </Flex>
    </>
  );
});

Header.displayName = 'Header';
