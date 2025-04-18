import type { RouteObject } from 'react-router-dom';  // 追加

export const ROUTE_CONFIG: { dynamicRoutes: RouteObject[] } = {
  dynamicRoutes: [],  // 初期化
};

export function getRouteConfig() {
  return ROUTE_CONFIG;
}

export function addDynamicRoute(newRoute: RouteObject): void {
  ROUTE_CONFIG.dynamicRoutes.push(newRoute);
}

export function resetRouteConfig(): void {
	try {
		Object.assign(ROUTE_CONFIG, { dynamicRoutes: [] });
		console.log('Route configuration has been reset.');
	} catch (err) {
		console.error('Failed to reset route configuration:', err);
		throw new Error('ルート設定のリセットに失敗しました');
	}
}