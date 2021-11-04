import { Button } from '@chakra-ui/button';
import React, { memo, ReactNode, VFC } from 'react';

type Props = {
  children: ReactNode;
  // onClick: () => void;
};

// ボタンに実装する処理
// ボタンのロード中は機能をdisabledにする
// ボタンの色をどうするか?使う場所によって色を変えたいので、一旦はここで指定はしないことにします

//  Buttonに指定した、onClick={onClick} を一時的に削除

export const PrimaryButton: VFC<Props> = memo((props) => {
  const { children } = props;
  return (
    <Button m={2} _hover={{ opacity: 0.8 }}>
      {children}
    </Button>
  );
});

PrimaryButton.displayName = 'PrimaryButton';
