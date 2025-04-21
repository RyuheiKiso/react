import type { RouteObject } from 'react-router-dom';  // 追加

export const ROUTE_CONFIG: { dynamicRoutes: RouteObject[] } = {
  dynamicRoutes: [],  // 初期化
};

// ルート設定を取得する関数
// 戻り値：現在のルート設定オブジェクト
export function getRouteConfig() {
	// 現在のルート設定を返す
	return ROUTE_CONFIG;
}

// 動的ルートを追加する関数
// newRoute：追加する新しいルートオブジェクト
export function addDynamicRoute(newRoute: RouteObject): void {
	// 新しいルートを動的ルート配列に追加
	ROUTE_CONFIG.dynamicRoutes.push(newRoute);
}

// ルート設定をリセットする関数
// 戻り値：なし
export function resetRouteConfig(): void {
	// ルート設定を初期状態にリセット
	try {
		Object.assign(ROUTE_CONFIG, { dynamicRoutes: [] });
		console.log('Route configuration has been reset.');
	} catch (err) {
		// エラーが発生した場合はログを出力し、例外をスロー
		console.error('Failed to reset route configuration:', err);
		throw new Error('ルート設定のリセットに失敗しました');
	}
}