**# 何でもメモアプリの作成**

・useMemoData の中から中からログイン関連の処理を別のカスタムフックへ移動
・useMemoData の any 型の削除

・Login ページのログイン時になぜか 1〜2 回くらいログイン処理が失敗している
・Login ページの処理中のローディング処理
・Login ページに値を入れていないときのボタンの disabled

・Home ページの読み込み中のローディング処理
・チェックボックスを可変にして、非表示になったら、グレーアウトさせる
・ドラッグアンドドロップの処理を実装して移動できるようにする

・404 ページのカウンターコンポーネントの作成
・遷移されてから 5 秒立つと自動でログインページへルーティングされる仕様に変更

・ほかは Help ページに書いてある内容を修正して完了してから Next.js かを進めることにする

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

- 必要な情報を入力していない限りボタンを disabled にする → 初期値を disable にする → 1

一覧ページ

- データの読込中のローディングの実装 高 → 2
- アイコンの大きさを変更　低
-
- checkbox に応じてグレーアウトさせる処理の実装　高
- checkbox を編集可能に変更　高 → 3
- Textarea を押したときのフォーカスを解除　中
- 更新ボタンに関して　高
  - タイトルが空 → エラー、説明が空 → 成功
    ログインに成功しましたの表示時間が長い →5 秒くらい表示される

ヘルプページ 使い方を記載するページ

Headless UI の Disclosure を使って

1. ログイン方法について（事前に登録する必要があることを伝える）
2. メモページに登録する項目
3. 追加で実装予定の機能の一覧をリスト形式で記載する

404 ページ
存在しない URL にアクセスしていることが明確にわかるページにする
ChakraUI の Alert の要素を使ってみる
https://chakra-ui.com/docs/feedback/alert

5 秒後に自動的にログインページへ遷移するみたいな処理を組み込みたい will

404 ページへのリンクが上手く機能していないので修正
ルートからのアクセス時は存在しないリンクへの遷移は完了

new/home/help に続けて記載すると 404 へ遷移しない → 修正完了
