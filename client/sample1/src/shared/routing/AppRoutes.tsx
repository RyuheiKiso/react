import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BasePage from '../layout/BasePage';
import PrivateRoute from './PrivateRoute';

// ページコンポーネントの遅延読み込み
const LoginPage = lazy(() => import('../../feature/Login/LoginPage'));
const HomePage = lazy(() => import('../../feature/Home/HomePage'));

// アプリケーションのルートを定義するコンポーネント
const AppRoutes: React.FC = () => {
  return React.createElement(
    // ブラウザルーターを使用してルートを管理
    BrowserRouter,
    null,
    React.createElement(
      // 遅延読み込み中のフォールバックを設定
      Suspense,
      { fallback: React.createElement('div', null, '読み込み中...') },
      React.createElement(
        // ルートを定義
        Routes,
        null,
        React.createElement(Route, { path: '/login', element: React.createElement(LoginPage) }),
        React.createElement(
          // プライベートルートをラップ
          Route,
          { element: React.createElement(PrivateRoute) },
          React.createElement(
            // ベースページをラップ
            Route,
            { element: React.createElement(BasePage) },
            React.createElement(Route, { path: '/', element: React.createElement(HomePage) })
            // ...その他の保護されたルート
          )
        )
      )
    )
  );
};

export default AppRoutes;
