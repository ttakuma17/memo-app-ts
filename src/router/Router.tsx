import React, { VFC, memo } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Help } from '../pages/Help';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Page404 } from '../pages/Page404';

// ルートパスは意図した挙動になっている
// ルートパス配下にhomeまたはhelpを指定したときには404ページへと遷移されている
// 意図したルーティングに実装ができたら、ルーティング管理用のファイルを分けて拡張性を高くすること
// 意図したルーティングになっていなかった原因 → Routeのpathの指定が誤っていた '/'が抜けてしまっていた
export const Router: VFC = memo(() => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/help">
          <Help />
        </Route>
        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
    </>
  );
});

Router.displayName = 'Router';
