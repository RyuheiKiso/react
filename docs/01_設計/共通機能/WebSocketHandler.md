# WebSocketHandler

## 概要
WebSocket 接続を管理し、メッセージの送受信を行うためのクラス。

## 依存関係
| 種別 | 名前 | 説明 |
|------|------|------|
| ライブラリ | System.Net.WebSockets | WebSocket 通信のための標準ライブラリ |

## 定数一覧
| 名前 | 型 | 説明 |
|------|----|------|
| BufferSize | int | メッセージバッファのサイズ |

## 変数一覧
| 名前 | 型 | 説明 |
|------|----|------|
| _webSocket | WebSocket | WebSocket 接続オブジェクト |

## クラス一覧
| 名前 | 説明 |
|------|------|
| WebSocketHandler | WebSocket 接続を管理するクラス |

## 関数一覧
| 関数名                  | 引数                           | 戻り値       | 説明                                            |
|-------------------------|--------------------------------|--------------|-------------------------------------------------|
| WebSocketHandler        | webSocket: WebSocket           | -            | コンストラクタ                                  |
| SendMessage             | message: string                | Task         | メッセージを送信                                |
| ReceiveMessage          | なし                           | Task<string> | メッセージを受信                                |
| CheckHealth             | なし                           | boolean      | 接続のヘルスチェックを行う                      |
| EnableMessageHistory    | なし                           | void         | メッセージの送受信履歴を記録する                |
| DebugRealTimeMessages   | なし                           | void         | リアルタイムに送受信状況を表示する              |
| SetAutoRetryPolicy      | retryCount: int, interval: TimeSpan | void    | 自動再試行の設定を変更する                      |
| MonitorTraffic          | なし                           | string       | 通信トラフィックの状況をリアルタイムで監視し報告する |

## 機能一覧
- 接続のヘルスチェック機能を提供。
- メッセージの送受信履歴を記録し、デバッグ時に確認可能。
- デバッグモードでリアルタイムのメッセージ送受信が表示され、開発者が動作確認しやすい設計となっている。
- 自動再試行の設定を柔軟に変更可能。
- 開発者向けに、リアルタイムの通信トラフィック情報を取得でき、解析が容易になっている。
- 開発者向けに、リアルタイムトレースと詳細ログ出力機能を通して、メッセージの送受信状況が即時に確認できるよう設計されている.
+ 開発者向けに、利用時のガイドと詳細な操作手順を提供し、デバッグおよび検証がより直感的に行える仕組みを備えている.

## 使用例
```csharp
// 接続のヘルスチェック
bool isHealthy = WebSocketHandler.CheckHealth();
Console.WriteLine(isHealthy);

// メッセージ送受信履歴の記録
WebSocketHandler.EnableMessageHistory();

// デバッグモードでリアルタイム表示
WebSocketHandler.DebugRealTimeMessages();

// 自動再試行の設定変更
WebSocketHandler.SetAutoRetryPolicy(3, TimeSpan.FromSeconds(5));
```
