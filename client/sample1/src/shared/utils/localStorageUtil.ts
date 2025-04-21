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

// クライアントのIPv4アドレスを取得する非同期関数
// 戻り値：クライアントのIPv4アドレス
export async function getClientIp(): Promise<string> {
	// ネットワークインターフェース情報を取得
	const networkInterfaces = os.networkInterfaces();
	for (const interfaceName of Object.keys(networkInterfaces)) {
		const interfaces = networkInterfaces[interfaceName];
		if (interfaces) {
			// 各インターフェースを確認
			for (const iface of interfaces) {
				// IPv4 かつ内部ネットワークでない場合にアドレスを返す
				if (iface.family === 'IPv4' && !iface.internal) {
					return iface.address;
				}
			}
		}
	}
	// IPv4アドレスが見つからない場合は例外をスロー
	throw new Error('IPv4アドレスが見つかりませんでした');
}
