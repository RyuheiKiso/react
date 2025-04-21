import os from 'os';
import { setItem, getItem, getClientIp } from '../utils/localStorageUtil';

const TIMEOUT_MS = 10000;
const activeControllers: Record<string, AbortController> = {};

// HTTPリクエスト送信
// requestConfig：リクエストの設定オブジェクト
// 戻り値：レスポンスオブジェクト
export async function sendRequest(requestConfig: RequestInit & { url: string }): Promise<Response> {
  const controller = new AbortController();
  const id = Math.random().toString(36).substr(2);
  activeControllers[id] = controller;

  // タイムアウトを設定
  const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    // リクエストを送信
    const res = await fetch(requestConfig.url, { ...requestConfig, signal: controller.signal });
    clearTimeout(timeout);
    return res;
  } catch (err) {
    // エラー発生時にタイムアウトをクリア
    clearTimeout(timeout);
    throw err;
  } finally {
    // コントローラーを削除
    delete activeControllers[id];
  }
}

// 失敗時に再試行
// config：リクエストの設定オブジェクト
// retries：再試行回数（デフォルトは3回）
// 戻り値：レスポンスオブジェクト
export async function retryRequest(config: RequestInit & { url: string }, retries = 3): Promise<Response> {
  for (let i = 0; i <= retries; i++) {
    try {
      // リクエストを送信
      return await sendRequest(config);
    } catch (err) {
      // 再試行回数を超えた場合はエラーをスロー
      if (i === retries) throw err;
    }
  }
  throw new Error('リトライに失敗しました');
}

// すべての保留中リクエストをキャンセル
export function cancelAllRequests(): void {
  // 各コントローラーを中止
  Object.values(activeControllers).forEach(ctrl => ctrl.abort());
}

// 単一リクエストのキャンセル
// requestId：キャンセルするリクエストのID
export function cancelRequest(requestId: string): void {
  // 指定されたIDのコントローラーを中止
  activeControllers[requestId]?.abort();
}

// ログ出力（メトリクス）
// endpoint：リクエスト先のエンドポイント
// duration：リクエストにかかった時間（ミリ秒）
export function logRequestMetrics(endpoint: string, duration: number): void {
  // リクエストのメトリクスをコンソールに出力
  console.info(`Request to ${endpoint} took ${duration}ms`);
}
