**# 何でもメモアプリの作成**

**## 利用ライブラリとインストールコマンド**

- [ESLint](https://github.com/eslint/eslint)
- [Prettier](https://github.com/prettier/prettier)
- [ChakraUI 公式](https://chakra-ui.com/)
  [ChakraUI-Github]https://github.com/chakra-ui/chakra-ui/

#### done

```
yarn add @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^4
or
npm i @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^4
```

- [React Icon 公式](https://react-icons.github.io/react-icons)
- [React Icon-Github](https://github.com/react-icons/react-icons)

#### done

```
yarn add react-icons
or
npm install react-icons --save
```

- [recoil](https://github.com/facebookexperimental/Recoil)

#### done

```
yarn add recoil
or
npm install recoil
```

- [axios](https://github.com/axios/axios)

#### done

```
yarn add axios
or
npm install axios
```

- [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd)

[install 手順](https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/about/installation.md)

```
yarn add react-beautiful-dnd
yarn add @types/react-beautiful-dnd --dev
or
npm i react-beautiful-dnd
npm i @types/react-beautiful-dnd --save-dev
```

- [react-router](https://github.com/remix-run/react-router)

#### done

```
yarn add react-router
yarn add @types/react-router --dev
or
npm i react-router
npm i @types/react-router --save-dev
```

- [react-router-dom](https://github.com/remix-run/react-router)

#### done

```
yarn add react-router-dom
yarn add @types/react-router-dom --dev
or
npm i react-router-dom
npm i @types/react-router-dom --save-dev
```

###　 ディレクトリ構成
画面描画に関連するすべての関連するソースコードは src 配下に保存する

```
- src
  - hooks：カスタムフックを保存
  - pages：ページとして表示するコンポーネントを保存する
  - components：ページを構成する共通のコンポーネントを保存
  - types：型定義情報を保存する
  - store：グローバルステートの情報を保存する
  - router: ルーター設定のファイルを保存
```

### ページ構成

初期画面

- Login : ユーザーのログインを行うときに利用するページ
  バックエンド側に登録されているユーザー情報と一致した場合にはログインができる
  トークンの取得と保存を行うページとなる
  ルーティング：`URL/`

ログイン後の画面

- Home : メモ一覧が表示されるページ
  ログインしたユーザーが作成したメモの一覧が表示されるページ
  ルーティング：`URL/home`
- Help : メモアプリの使い方を表示するページ
  アプリの使い方が記載されたページ
  ルーティング：`URL/help`
- Page404 : 無効な URL が指定された場合に表示されるページ
  Login ページへのリンクのみが記載されている状態にする
  (指定済みのパスに一致しなければすべてこのページへ誘導し
  Login ページヘ数秒後に自動的に遷移するみたいな処理にしたい)
  ルーティング：`上記以外`

### メモアプリ開発方針

1. ライブラリインストール後通常通り稼働できることを確認：done
2. 開発方針の検討

   - 大まかなレイアウトとビューの作成を行う

     - まずは、Header の作成 : Done
     - カラーイメージの検討
     - Cyan 600 #086F83 をメニューなどで利用すること

       - [Web 配色ツール 2.0](https://www.color-fortuna.com/color_scheme_genelator2/)

     - 各ページの表示が正常になされるようにコンポーネント作成

   - ルーティング設定を行う : Done
     - ページ間のルーティング設定を行う
   - Login コンポーネントを実装する：NextTask
   - トークンの取得と保存
     - 取得したトークン情報をローカルストレージへの保存する
   - データの取り出し処理を実装
     - 任意のデータを取り出せるようロジックを組む
   - 細かいレイアウトの設定と機能実装
     - 意図したデータ取り出しが可能になった段階でコンポーネントごとの細かいビューを設定する
     - ドラッグアンドドロップの実装

### 修正ポイント

ログインページ

- 値のバリデーション 入力値がない場合にはそれに応じたエラー
- 戻るを押したときにどこへ戻る

一覧ページ

- データの読込中のローディングの実装 高
- アイコンの大きさを変更　低
- checkbox に応じてグレーアウトさせる処理の実装　高
- checkbox を編集可能に変更　高
- Textarea を押したときのフォーカスを解除　中
- 更新ボタンに関して　高
  - 更新が完了しても再レンダリングされない
  - タイトルが空 → エラー、説明が空 → 成功
  - エラーになった場合にも、値が元に戻らない
- 削除ボタンに関して　高
  - 処理に成功しても再レンダリングされない
