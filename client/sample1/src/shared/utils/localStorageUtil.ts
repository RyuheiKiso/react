import * as os from 'os';

export const STORAGE_KEY_CLIENT_IP = 'clientIp';
export const STORAGE_KEY_THEME = 'theme';

export const setItem = (key: string, value: string): void => {
	try {
		localStorage.setItem(key, value);
	} catch (err) {
		console.error(`Failed to set item in localStorage. Key: ${key}, Error:`, err);
		throw new Error('ローカルストレージへの保存に失敗しました');
	}
};

export const getItem = <T = string>(key: string): T | null => {
	try {
		const item = localStorage.getItem(key);
		return item !== null
			? (item as unknown as T)  // JSON.parse は呼び出し側で必要に応じて行う
			: null;
	} catch (err) {
		console.error(`Failed to get item from localStorage. Key: ${key}, Error:`, err);
		throw new Error('ローカルストレージからの取得に失敗しました');
	}
};

export const removeItem = (key: string): void => {
	try {
		localStorage.removeItem(key);
	} catch (err) {
		console.error(`Failed to remove item from localStorage. Key: ${key}, Error:`, err);
		throw new Error('ローカルストレージからの削除に失敗しました');
	}
};

export const clearStorage = (): void => {
	try {
		localStorage.clear();
	} catch (err) {
		console.error('Failed to clear localStorage:', err);
		throw new Error('ローカルストレージのクリアに失敗しました');
	}
};

// クライアントIP取得（外部サイトを使用せずにローカルIPを取得）
export async function getClientIp(): Promise<string> {
  const networkInterfaces = os.networkInterfaces();
  for (const interfaceName of Object.keys(networkInterfaces)) {
    const interfaces = networkInterfaces[interfaceName];
    if (interfaces) {
      for (const iface of interfaces) {
        if (iface.family === 'IPv4' && !iface.internal) {
          return iface.address;
        }
      }
    }
  }
  throw new Error('IPv4アドレスが見つかりませんでした');
}
