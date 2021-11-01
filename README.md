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
```

### メモアプリ開発方針

1. ライブラリインストール後通常通り稼働できることを確認：done
2. 開発方針の検討

   - 大まかなレイアウトとビューの作成を行う

     - まずは、Header の作成 : Done
     - カラーイメージの検討
     - Cyan 600 #086F83 をメニューなどで利用すること

       - [Web 配色ツール 2.0](https://www.color-fortuna.com/color_scheme_genelator2/)

     - 各ページの表示が正常になされるようにコンポーネント作成

   - ルーティング設定を行う : NextTask
     - ページ間のルーティング設定を行う
   - トークンの取得と保存
     - 取得したトークン情報をローカルストレージへの保存する
   - データの取り出し処理を実装
     - 任意のデータを取り出せるようロジックを組む
   - 細かいレイアウトの設定と機能実装
     - 意図したデータ取り出しが可能になった段階でコンポーネントごとの細かいビューを設定する
     - ドラッグアンドドロップの実装
