## React × TypeScript × ESLint × Prettier 　の環境構築

1. Create react app を利用して、React 　 × 　 TypeScript 環境を準備

以下のコマンドを実施
`npx create-react-app my-app --template typescript`
`or`
`yarn create react-app my-app --template typescript`

参照：
https://create-react-app.dev/docs/adding-typescript/

2. Prettier と ESLint の設定インストール
   `yarn add -D eslint prettier eslint-config-prettier`

- eslint-config-prettier のインストールを行う（これがないと compile Error が起きてしまうので注意）

`npm install --save-dev eslint-config-prettier`

参照：
https://github.com/prettier/eslint-config-prettier
https://stackoverflow.com/questions/61597932/eslint-couldnt-find-the-config-prettier-to-extend-from

3. TypeScript の設定インストール
   `$ yarn add -D typescript @typescript-eslint/{parser,eslint-plugin}`

4. React の設定インストール
   `yarn add react react-dom`
   `yarn add -D @types/{react,react-dom}`
   `yarn add -D eslint-plugin-{react,react-hooks}`

5. tsconfig.json の設定例

- create react-app でルートディレクトリに該当ファイルが作成されているはず。
  なければルートディレクトリで`touch tsconfig.json`を実行してファイル作成

{
"compilerOptions": {
"target": "ES2020",
"module": "ES2020",
"moduleResolution": "Node",
"esModuleInterop": true,
"lib": ["DOM", "ES2020"],
"jsx": "react",
"strict": true,
"sourceMap": true,
"resolveJsonModule": true,
"forceConsistentCasingInFileNames": true
},
"ts-node": {
"compilerOptions": {
"target": "ES2015",
"module": "CommonJS"
}
}
}

6. .eslintrc.json

- ルートディレクトリで`touch .eslintrc.json`を実行してファイル作成

{
"env": {
"es6": true,
"node": true,
"browser": true,
"commonjs": true
},
"parser": "@typescript-eslint/parser",
"parserOptions": {
"ecmaVersion": 2018,
"ecmaFeatures": {
"jsx": true
},
"sourceType": "module"
},
"settings": {
"react": {
"version": "detect"
}
},
"plugins": ["react-hooks", "react", "@typescript-eslint"],
"extends": [
"eslint:recommended",
"plugin:@typescript-eslint/eslint-recommended",
"plugin:@typescript-eslint/recommended",
"plugin:react/recommended",
"plugin:react-hooks/recommended",
"prettier"
],
"rules": {
"react/prop-types": "off"
}
}

> extends では prettier を配列の最後部に記述することが必要

7. .prettierrc.json の設定
   {
   "singleQuote": true,
   "jsxBracketSameLine": true
   }

8.VSCode への設定

- ESLint と Prettier の拡張をインストールする

- .vscode/settings.json のファイルを開いて以下の設定を行う

{
"editor.formatOnSave": true, // <-- prettier で整形
"editor.codeActionsOnSave": {
"source.fixAll.eslint": true // <-- eslint でリント
},
// デフォルトフォーマッタを prettier に
"editor.defaultFormatter": "esbenp.prettier-vscode"
}

設定手順の参照先
https://zenn.dev/sprout2000/articles/9f20902d394aa2
