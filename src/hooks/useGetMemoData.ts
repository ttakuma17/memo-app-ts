import { useCallback, useState } from 'react';
import { useHistory } from 'react-router';
import axios, { AxiosInstance } from 'axios';

type Memo = {
  id: string;
  title: string;
  category?: string;
  description: string;
  date?: string;
  mark_div: number;
};

export const useGetMemoData = () => {
  const [memos, setMemos] = useState<Array<Memo>>([]);
  const history = useHistory();

  // ベースのリクエスト時にURLは多用するため、インスタンスとして定義
  const axiosInstance: AxiosInstance = axios.create({
    baseURL: 'https://raisetech-memo-api.herokuapp.com/api',
    timeout: 3000,
    headers: { 'Content-Type': 'application/json' },
  });

  // 固定値で意図したリクエストとレスポンスを得られるように実装する
  // 制御ができるようになったらコンポーネント側の入力値を利用してリクエストするよう変更

  // トークンを発行する関数を定義 /login に対するAPIリクエスト[POST]
  const getToken = useCallback((email, password): void => {
    axiosInstance
      .post('/login', {
        // inputボックスに入れた値を代入できるようにする必要がある
        // email: 'ttakuma@example.com',
        // password: '12345678',
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response);
        // 実装が必要な処理「取得したトークン情報をローカルストレージへ保存する」
        // 取得した情報をJSON形式へ変換し、変数へ格納する
        const token = JSON.stringify(response.data);
        localStorage.setItem('token', token);
        // 保存が終わったらhomeページへルーティングする(後ほど実装とする)
        history.push('/home');
      })
      .catch((error) => {
        // 情報が一致しない場合にcatchへ処理が遷移していることを確認
        console.log(error);
        // 実装が必要な処理「取得したトークン情報をローカルストレージへ保存する」
        // ログインページへルーティング
        // わかりやすいエラーメッセージを表示させる(toast系の処理の作成後実装)
      });
  }, []);

  // メモの一覧を取得 GET
  const getAllMemos = useCallback((): void => {
    const tokenInLocalStorage: any = localStorage.getItem('token');
    const token: any = JSON.parse(tokenInLocalStorage);

    // nullだった場合の処理とストレージの値を取得できた場合の処理を切り分けて記載すること
    // const token = (tokenInLocalStorage: string | null) => {
    //   if (!tokenInLocalStorage) {
    //     console.error('トークンを取得してください');
    //     return;
    //   }
    //   return JSON.parse(tokenInLocalStorage);
    // }

    axiosInstance
      .get<Array<Memo>>('/memos', {
        headers: {
          Authorization: `Bearer ${token.access_token}`,
        },
      })
      .then((response) => {
        // レスポンスとして期待するデータ
        console.log(response);
        setMemos(response.data);
      })
      .catch((error) => {
        // エラー時のロジックはほぼ共通化できるため、後ほど実装
        console.log(error);
      });
  }, []);

  // メモの新規登録 POST
  const createNewMemo = useCallback((): void => {
    const tokenInLocalStorage: any = localStorage.getItem('token');
    const token: any = JSON.parse(tokenInLocalStorage);
    axiosInstance
      .post(
        '/memo',
        {
          title: '今日の講義について',
          category: '授業メモ',
          description: '第９回の授業メモです\\nこんなことしました。',
          date: '2021/08/01',
          mark_div: 1,
        },
        {
          headers: {
            Authorization: `Bearer ${token.access_token}`,
          },
        }
      )
      .then((response) => {
        // レスポンスとして期待するデータ
        console.log(response);
      })
      .catch((error) => {
        // エラー時のロジックはほぼ共通化できるため、後ほど実装
        console.log(error);
      });
  }, []);

  // ここまではOK

  // メモの更新 PUT
  // axios.put(url[, data[, config]])
  const updateMemo = useCallback((): void => {
    const tokenInLocalStorage: any = localStorage.getItem('token');
    const token: any = JSON.parse(tokenInLocalStorage);
    const id = '310';
    axiosInstance
      .put(
        // 400 bad request
        `/memo/${id}`,
        {
          title: '更新今日の講義について',
          category: '更新授業メモ',
          description: '更新第９回の授業メモです\\nこんなことしました。',
          date: '2021/08/01',
          mark_div: 0,
        },
        {
          headers: {
            Authorization: `Bearer ${token.access_token}`,
          },
        }
      )
      .then((response) => {
        // レスポンスとして期待するデータ
        console.log(response);
      })
      .catch((error) => {
        // エラー時のロジックはほぼ共通化できるため、後ほど実装
        console.log(error);
      });
  }, []);

  // メモの削除 DELETE 問題箇所がidの指定と共通しているので一旦保留 同様のBadRequestが発生 → 日付の指定がおかしいだけだった
  const deleteMemo = useCallback((): void => {
    const tokenInLocalStorage: any = localStorage.getItem('token');
    const token: any = JSON.parse(tokenInLocalStorage);
    const id = '328';
    axiosInstance.delete(`/memo/${id}`, {
      headers: {
        Authorization: `Bearer ${token.access_token}`,
      },
    });
  }, []);

  return {
    getToken,
    getAllMemos,
    memos,
    createNewMemo,
    updateMemo,
    deleteMemo,
  };
};
