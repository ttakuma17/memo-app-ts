import React, { memo, VFC } from 'react';

// １．画面の作成
// メールアドレス のinput
// パスワード のinput
// ログインボタン PrimaryButtonコンポーネントを流用

// ２．ロジックの作成 → カスタムフックを定義して必要なリクエストをコンポーネント側で呼び出す方針とする hooksのuseGetMemoDataへ作業ログを移行

export const Login: VFC = memo(() => {
  return (
    <>
      <h2>ログインページとして設定します</h2>
      <h2>ボックスを設置する</h2>
    </>
  );
});

Login.displayName = 'Login';
