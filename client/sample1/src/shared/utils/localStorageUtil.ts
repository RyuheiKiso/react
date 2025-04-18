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

export const getClientIp = async (): Promise<string> => {
	try {
		const response = await fetch('https://api.ipify.org?format=json');
		if (!response.ok) {
			throw new Error('Failed to fetch client IP');
		}
		const data = await response.json();
		const clientIp = data.ip;
		setItem(STORAGE_KEY_CLIENT_IP, clientIp);
		return clientIp;
	} catch (err) {
		console.error('Failed to get client IP:', err);
		throw new Error('クライアントIPの取得に失敗しました');
	}
};
