import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BasePage from '../layout/BasePage';
import PrivateRoute from './PrivateRoute';

// ページコンポーネントの遅延読み込み
const LoginPage = lazy(() => import('../../feature/Login/LoginPage'));
const HomePage = lazy(() => import('../../feature/Home/HomePage'));

const AppRoutes: React.FC = () => {
  return React.createElement(
    BrowserRouter,
    null,
    React.createElement(
      Suspense,
      { fallback: React.createElement('div', null, '読み込み中...') },
      React.createElement(
        Routes,
        null,
        React.createElement(Route, { path: '/login', element: React.createElement(LoginPage) }),
        React.createElement(
          Route,
          { element: React.createElement(PrivateRoute) },
          React.createElement(
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
