/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useState } from 'react';
import { useHistory } from 'react-router';
import axios, { AxiosInstance } from 'axios';
import { useToast } from '@chakra-ui/toast';

type Memo = {
  id: string;
  title: string;
  category: string;
  description: string;
  date: string;
  mark_div: number;
};

// 正常にToastが表示されることを確認

export const useGetMemoData = () => {
  const [memos, setMemos] = useState<Array<Memo>>([]);
  const history = useHistory();
  // 成功時、失敗時などのToast処理の追加を実装
  const toast = useToast();
  // toast({
  //   title: "",
  //   status: status,
  //   isClosable: true,
  // });

  // トークンの情報を何回も記載するのが嫌やな
  // nullでなければという前提をつける必要がある

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
        toast({
          title: 'ログインに成功しました',
          status: 'success',
          isClosable: true,
        });
        //
        // 保存が終わったらhomeページへルーティングする(後ほど実装とする)
        history.push('/home');
      })
      .catch((error) => {
        // 情報が一致しない場合にcatchへ処理が遷移していることを確認
        console.log(error);
        toast({
          title: 'ログインに失敗しました',
          status: 'error',
          isClosable: true,
        });
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
        toast({
          title: 'メモデータの取得に失敗しました',
          status: 'error',
          isClosable: true,
        });
        history.push('/');
      });
  }, []);

  // メモの新規登録 POST
  // カテゴリーと日付に関しては活用方法を検討した後に利用 : 現状は固定値で対応
  const createNewMemo = useCallback((title, description, value): void => {
    const tokenInLocalStorage: any = localStorage.getItem('token');
    const token: any = JSON.parse(tokenInLocalStorage);
    axiosInstance
      .post(
        '/memo',
        {
          title: title,
          category: 'カテゴリ',
          description: description,
          date: '2021/08/01',
          mark_div: value,
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
        // 登録が完了したことを示すメッセージの表示
        toast({
          title: 'メモの登録が完了しました',
          status: 'success',
          isClosable: true,
        });
        // Homeコンポーネントへのルーティング
        history.push('/home');
      })
      .catch((error) => {
        // エラー時のロジックはほぼ共通化できるため、後ほど実装
        console.log(error);
        toast({
          title: 'メモの登録に失敗しました。もう一度入力してください',
          status: 'error',
          isClosable: true,
        });
        history.push('/new');
      });
  }, []);

  // ここまではOK

  // メモの更新 PUT
  // axios.put(url[, data[, config]])
  const updateMemo = useCallback((id, title, description): void => {
    const tokenInLocalStorage: any = localStorage.getItem('token');
    const token: any = JSON.parse(tokenInLocalStorage);
    // const id = '310';
    axiosInstance
      .put(
        `/memo/${id}`,
        {
          title: title,
          category: '更新授業メモ',
          description: description,
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
        toast({
          title: 'メモデータを更新しました',
          status: 'success',
          isClosable: true,
        });
      })
      .catch((error) => {
        // エラー時のロジックはほぼ共通化できるため、後ほど実装
        console.log(error);
        toast({
          title: 'メモデータの更新に失敗しました',
          status: 'error',
          isClosable: true,
        });
      });
  }, []);

  // メモの削除 DELETE 問題箇所がidの指定と共通しているので一旦保留 同様のBadRequestが発生 → 日付の指定がおかしいだけだった
  // id クリックされたIDを取得してそのIDに紐づくデータを削除させる
  // id をpropsで受け取る必要がある
  // この関数を使用しているのはDeleteButtonComponent
  // DeleteButtonComponentはMemoItemで使用されるもの
  // APIデータの取得に関しては、Home.tsxでのみ行われる
  // データの経路としては、Home.tsx → MemoItem → DeleteButton → delete関数の引数へという流れになる
  // propsのバケツリレーに近い。。。。グローバルステートとして管理するか？
  // グローバルステートとして管理するべき理由は？ 更新ボタンの際も同じpropsリレーがある,表示非表示に関しても同じ処理がある
  // 追加で最低2つは同じ処理が必要となる
  const deleteMemo = useCallback((id): void => {
    const tokenInLocalStorage: any = localStorage.getItem('token');
    const token: any = JSON.parse(tokenInLocalStorage);
    // const id = '332';
    axiosInstance
      .delete(`/memo/${id}`, {
        headers: {
          Authorization: `Bearer ${token.access_token}`,
        },
      })
      .then((response) => {
        // レスポンスとして期待するデータ
        console.log(response);
        toast({
          title: 'メモの削除が完了しました',
          status: 'success',
          isClosable: true,
        });
      })
      .catch((error) => {
        // エラー時のロジックはほぼ共通化できるため、後ほど実装
        console.log(error);
        toast({
          title: 'メモの削除に失敗しました',
          status: 'error',
          isClosable: true,
        });
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
