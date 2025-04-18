import { setItem, getItem } from '../utils/localStorageUtil';

const TIMEOUT_MS = 10000;
const activeControllers: Record<string, AbortController> = {};

// HTTPリクエスト送信
export async function sendRequest(requestConfig: RequestInit & { url: string }): Promise<Response> {
  const controller = new AbortController();
  const id = Math.random().toString(36).substr(2);
  activeControllers[id] = controller;

  const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(requestConfig.url, { ...requestConfig, signal: controller.signal });
    clearTimeout(timeout);
    return res;
  } catch (err) {
    clearTimeout(timeout);
    throw err;
  } finally {
    delete activeControllers[id];
  }
}

// 失敗時に再試行
export async function retryRequest(config: RequestInit & { url: string }, retries = 3): Promise<Response> {
  for (let i = 0; i <= retries; i++) {
    try {
      return await sendRequest(config);
    } catch (err) {
      if (i === retries) throw err;
    }
  }
  throw new Error('リトライに失敗しました');
}

// すべての保留中リクエストをキャンセル
export function cancelAllRequests(): void {
  Object.values(activeControllers).forEach(ctrl => ctrl.abort());
}

// 単一リクエストのキャンセル
export function cancelRequest(requestId: string): void {
  activeControllers[requestId]?.abort();
}

// ログ出力（メトリクス）
export function logRequestMetrics(endpoint: string, duration: number): void {
  console.info(`Request to ${endpoint} took ${duration}ms`);
}

// クライアントIP取得（localStorageUtil を利用）
export async function getClientIp(): Promise<string> {
  const cached = getItem<string>('clientIp');
  if (cached) return cached;
  const res = await fetch('https://api.ipify.org?format=json');
  const json = await res.json();
  const ip = json.ip;
  setItem('clientIp', ip);
  return ip;
}
