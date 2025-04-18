import { setItem, getItem } from '../utils/localStorageUtil';

export async function sendRequest(requestConfig: any): Promise<any> {
  // 通信処理の共通処理実装
  return fetch(requestConfig.url, requestConfig);
}

export async function getClientIp(): Promise<string> {
	let clientIp = getItem('clientIp'); // 修正: 型引数を削除
	if (clientIp) return clientIp;
	try {
		const response = await fetch('https://api.ipify.org?format=json');
		if (!response.ok) {
			throw new Error('IP取得中にエラーが発生しました');
		}
		const data = await response.json();
		clientIp = data.ip;
		if (clientIp) { // 修正: 明示的に null チェック
			setItem('clientIp', clientIp);
			return clientIp;
		}
		throw new Error('IPデータが無効です');
	} catch (err) {
		throw new Error('IP取得に失敗しました');
	}
}

export async function monitorLatency(apiEndpoint: string, threshold: number): Promise<void> {
  const startTime = performance.now();
  try {
    await fetch(apiEndpoint);
    const latency = performance.now() - startTime;
    if (latency > threshold) {
      console.warn(`API latency exceeded threshold: ${latency}ms`);
    }
  } catch (err) {
    console.error('Latency monitoring failed:', err);
  }
}

const activeRequests: Record<string, AbortController> = {};

export function cancelRequest(requestId: string): void {
	const controller = activeRequests[requestId];
	if (controller) {
		controller.abort();
		delete activeRequests[requestId];
	}
}

export async function cancelAndRetryRequest(requestId: string, requestConfig: any): Promise<any> {
	cancelRequest(requestId);
	try {
		return await sendRequest(requestConfig);
	} catch (err) {
		console.error('Failed to retry request:', err);
		throw new Error('リクエストの再試行に失敗しました');
	}
}
