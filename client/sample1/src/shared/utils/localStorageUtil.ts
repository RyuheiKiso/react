import * as os from 'os';

export const STORAGE_KEY_CLIENT_IP = 'clientIp';
export const STORAGE_KEY_THEME = 'theme';

// ローカルストレージにアイテムを保存する関数
// key：保存するアイテムのキー
// value：保存するアイテムの値
export const setItem = (key: string, value: string): void => {
	// ローカルストレージに値を保存
	try {
		localStorage.setItem(key, value);
	} catch (err) {
		// エラーが発生した場合はログを出力し、例外をスロー
		console.error(`Failed to set item in localStorage. Key: ${key}, Error:`, err);
		throw new Error('ローカルストレージへの保存に失敗しました');
	}
};

// ローカルストレージからアイテムを取得する関数
// key：取得するアイテムのキー
// 戻り値：取得したアイテムの値（存在しない場合は null）
export const getItem = <T = string>(key: string): T | null => {
	// ローカルストレージから値を取得
	try {
		const item = localStorage.getItem(key);
		return item !== null
			? (item as unknown as T)  // JSON.parse は呼び出し側で必要に応じて行う
			: null;
	} catch (err) {
		// エラーが発生した場合はログを出力し、例外をスロー
		console.error(`Failed to get item from localStorage. Key: ${key}, Error:`, err);
		throw new Error('ローカルストレージからの取得に失敗しました');
	}
};

// ローカルストレージからアイテムを削除する関数
// key：削除するアイテムのキー
export const removeItem = (key: string): void => {
	// ローカルストレージから値を削除
	try {
		localStorage.removeItem(key);
	} catch (err) {
		// エラーが発生した場合はログを出力し、例外をスロー
		console.error(`Failed to remove item from localStorage. Key: ${key}, Error:`, err);
		throw new Error('ローカルストレージからの削除に失敗しました');
	}
};

// ローカルストレージを全てクリアする関数
export const clearStorage = (): void => {
	// ローカルストレージをクリア
	try {
		localStorage.clear();
	} catch (err) {
		// エラーが発生した場合はログを出力し、例外をスロー
		console.error('Failed to clear localStorage:', err);
		throw new Error('ローカルストレージのクリアに失敗しました');
	}
};

// サーバーのベースURLを指定（環境変数や設定ファイルで管理することを推奨）
const SERVER_BASE_URL = 'http://133.253.238.2:5001'; // 例: http://192.168.1.100:3000

// クライアントのIPv4アドレスを取得する非同期関数
// 戻り値：クライアントのIPv4アドレス
export async function getClientIp(): Promise<string> {
	try {
		// サーバーサイドのエンドポイントを呼び出してIPアドレスを取得
		const response = await fetch(`${SERVER_BASE_URL}/api/client-ip`);
		if (!response.ok) {
			throw new Error('Failed to fetch IP address from server');
		}
		const data = await response.json();
		return data.ip;
	} catch (err) {
		console.error('Failed to get client IP address from server:', err);
		throw new Error('クライアントのIPアドレスの取得に失敗しました');
	}
}
