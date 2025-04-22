import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getItem } from '../utils/localStorageUtil';
import { trackInteraction } from '../utils/CommonTracking';
// import reportErrorToService from '../error/ErrorBoundary';

// 認証ルートのパス
const AUTH_ROUTE = '/login';

// 不正アクセスのログを記録する関数
// attempt：不正アクセスの試行情報を含むオブジェクト
const logUnauthorizedAccess = (attempt: { token: string | null }): void => {
	// 不正アクセスの試行を警告としてコンソールに出力
	console.warn('Unauthorized access attempt:', attempt);
};

// アクセス権を確認する関数
// 戻り値：アクセス権がある場合は true、ない場合は false
const checkAccess = (): boolean => {
  // 認証トークンを取得
  const token = getItem<string>('authToken');
  // トークンが存在し、長さが0より大きい場合はアクセス権あり
  if (token && token.length > 0) {
    return true;
  } else {
    // 不正アクセスのログを記録
    logUnauthorizedAccess({ token });
    // 不正アクセスのイベントを追跡
    trackInteraction(new Event('unauthorized-access'), { token });
    return false;
  }
};

// プライベートルートコンポーネント
// 認証済みの場合は子コンポーネントを表示し、未認証の場合はログインページにリダイレクト
const PrivateRoute: React.FC = () => {
  // アクセス権を確認し、適切なコンポーネントを返す
  return checkAccess() ? <Outlet /> : <Navigate to={AUTH_ROUTE} replace />;
};

export default PrivateRoute;
