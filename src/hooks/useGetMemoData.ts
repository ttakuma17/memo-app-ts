import axios from 'axios';

export const useGetMemoData = () => {
  // ベースのリクエスト時にURLは多用するため、インスタンスとして定義
  const axiosInstance = axios.create({
    baseURL: 'https://raisetech-memo-api.herokuapp.com/api',
    timeout: 3000,
    headers: { 'Content-Type': 'application/json' },
  });

  // トークンを発行する関数を定義 /login に対するAPIリクエスト[POST]
  const getToken = () => {
    axiosInstance
      .post('/login', {
        // inputボックスに入れた値を代入できるようにする必要がある
        email: 'ttakuma@example.com',
        password: '12345678',
      })
      .then((response) => {
        console.log(response);
        // 実装が必要な処理「取得したトークン情報をローカルストレージへ保存する」
        // console.log(response.data);
        // トークンを取り出せるように処理を記載する(data > access_tokenの中身)
        // 結果：{access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIsI…TIwfQ.qMI2z-zfvhvxc2FriCsYtQYDVhFLA3bOkxZyvGVPfuA'}
        // 取得した情報をJSON形式へ変換し、変数へ格納する
        // そのまま格納できそう→ オブジェクトで返ってきているので一旦文字列に変換する
        const token = JSON.stringify(response.data);
        localStorage.setItem('token', token);
        // 変数をlocalstorage.setItemを利用して保存する: 完了
        // 保存が終わったらhomeページへルーティングする(後ほど実装とする)
      })
      .catch((error) => {
        // 情報が一致しない場合にcatchへ処理が遷移していることを確認
        console.log(error);
        // 実装が必要な処理「取得したトークン情報をローカルストレージへ保存する」

        // ログインページへ再ルーティングを行う
        // わかりやすいエラーメッセージを表示させる(toast系の処理の作成後実装)
      });
  };
  // メモの一覧を取得する関数を定義
  const getAllMemo = () => {
    // ローカルストレージからトークン情報を取得、トークンを何らかの変数へ格納する
    // Bearer認証に利用するとしてリクエスト情報に含める → axiosでBearer認証をするときの方法を調査すること
    // レスポンスデータの取り扱いは呼び出し側で制御させるので、レスポンスデータを利用可能な状態にしておけば良い
    // よって実装ステップとしては以下
    // 1.ローカルストレージのトークン情報を取得
    // 2.取得したトークン情報をBearer認証に利用可能なように記述
    // 3.GETリクエストを送信
    // 4. レスポンスとして、メモのデータを取得できていればOK
    //
    const tokenInLocalStorage: any = localStorage.getItem('token');
    // 型推論 string | null
    console.log(tokenInLocalStorage); // 実行された
    console.log(typeof tokenInLocalStorage); // string型なのでJSONオブジェクトへ変換が必要
    const token: any = JSON.parse(tokenInLocalStorage);
    // 追加：nullの可能性がある変数をString型が必要な引数に割り当てることはできないというエラー
    console.log(token.access_token);
    console.log(typeof token);
    // const bearerAuth = JSON.parse(authkey);
    console.log(typeof token.access_token);
    // JSON化までは完了しているので、リクエストの方法に問題がありそう
    // トークンの文字列のみ送るよう指定してもだめだった→リクエスト先のURL自体を間違えていたmemosと指定スべきところがmemoでsが抜けていたことが要因
    axiosInstance
      .get('/memos', {
        headers: {
          Authorization: `Bearer ${token.access_token}`,
        },
      })
      .then((response) => {
        // レスポンスとして期待するデータ
        console.log(response);
      })
      .catch((error) => {
        // エラー時のロジックはほぼ共通化できるため、後ほど実装
        console.log(error);
      });
  };
  // 次のリクエスト→新規登録から作成、メモ一覧の取得に近いので
  return { getToken, getAllMemo };
};
// ２．ロジックの作成 → カスタムフックを定義して必要なリクエストをコンポーネント側で呼び出す方針とする hooksのuseGetMemoDataへ作業ログを移行
// inputに入力されたテキストをバックエンドに送信する
// レスポンスとして受け取ったトークン情報をローカルストレージに保存する
// リクエストの送信時

// axios インスタンスの作成 ( https://raisetech-memo-api.herokuapp.com/api)

// リクエストの指定方法の調査
// Bearer認証のリクエスト例
// https://qiita.com/hirohero/items/8199cda2fada7432887e
// https://github.com/axios/axios#request-config

// リクエストのエイリアス
// axios.post(url[, data[, config]])
// 1
// トークンの発行
// リクエスト：Headers Content-Type: application/json
// 必須情報 email / password
// レスポンス
// 200 "access_token": "{token}"
//  → 認証の成功としてHomeページへルーティング + ローカルストレージにtokenを保存 + 認証に成功しましたのメッセージ
// 401 "message": "unauthorized"
//  → 認証の失敗としてLoginページへ再ルーティングして、email passwordのinputを初期化 + 認証に失敗しましたのメッセージ
// 2
// メモの新規登録
// Headers Content-Type: application/json ・ Authorization: Bearer {token}

// axios.get(url[, config])
// 3
// メモ一覧の取得

// axios.put(url[, data[, config]])
// URI Parameterの指定が必要なため、少し時間がかかりそう
// 4
// メモの更新

// axios.delete(url[, config])
// 5
// メモの削除
