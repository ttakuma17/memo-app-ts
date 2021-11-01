import React, { memo, VFC } from 'react';
import { Flex, Heading, Spacer, Link, Box, Text } from '@chakra-ui/react';
import { FaReact } from 'react-icons/fa';

export const Header: VFC = memo(() => {
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
            <Link>メモ一覧</Link>
          </Box>
          <Box pr={4}>
            <Link>ヘルプ</Link>
          </Box>
          <Box pr={4}>
            <Link>ログアウト</Link>
          </Box>
        </Flex>
      </Flex>
    </>
  );
});

Header.displayName = 'Header';
