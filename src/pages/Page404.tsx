import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from '@chakra-ui/alert';
import { CloseButton } from '@chakra-ui/close-button';
import { Box, Center, Spacer } from '@chakra-ui/layout';
import React, { memo, VFC } from 'react';
import { useHistory } from 'react-router';
import { Header } from '../components/Header';
import { PrimaryButton } from '../components/PrimaryButton';

export const Page404: VFC = memo(() => {
  const history = useHistory();
  return (
    <>
      <Header />
      <Box p={4}>
        <Alert status="error">
          <AlertIcon />
          <AlertTitle mr={2}>お探しのページは見つかりませんでした。</AlertTitle>
          <AlertDescription pr={4}>
            以下のログインページへアクセスしてください。
          </AlertDescription>
        </Alert>
      </Box>

      <Center>
        <PrimaryButton
          onClick={() => {
            history.push('/');
          }}>
          ログインページ
        </PrimaryButton>
      </Center>
    </>
  );
});

Page404.displayName = 'Page404';
