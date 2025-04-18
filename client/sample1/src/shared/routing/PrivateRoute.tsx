import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getItem } from '../utils/localStorageUtil';
import { trackInteraction } from '../utils/CommonTracking';
import reportErrorToService from '../error/ErrorBoundary';

const AUTH_ROUTE = '/login';

const logUnauthorizedAccess = (attempt: { token: string | null }): void => {
	console.warn('Unauthorized access attempt:', attempt);
};

const checkAccess = (): boolean => {
  const token = getItem<string>('authToken');
  if (token && token.length > 0) {
    return true;
  } else {
    logUnauthorizedAccess({ token });
    trackInteraction(new Event('unauthorized-access'), { token });
    return false;
  }
};

const PrivateRoute: React.FC = () => {
  return checkAccess() ? <Outlet /> : <Navigate to={AUTH_ROUTE} replace />;
};

export default PrivateRoute;
