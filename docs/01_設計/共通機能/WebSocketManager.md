# WebSocketManager

## 概要
複数の WebSocket 接続を管理し、接続の追加・削除やブロードキャストを行うクラス。

## 依存関係
| 種別 | 名前 | 説明 |
|------|------|------|
| クラス | WebSocketHandler | 個々の WebSocket 接続を管理 |

## 定数一覧
| 名前 | 型 | 説明 |
|------|----|------|
| MaxConnections | int | 最大接続数 |

## 変数一覧
| 名前 | 型 | 説明 |
|------|----|------|
| _connections | List<WebSocketHandler> | 接続リスト |

## クラス一覧
| 名前 | 説明 |
|------|------|
| WebSocketManager | 複数の WebSocket 接続を管理するクラス |

## 関数一覧
| 関数名                | 引数            | 戻り値 | 説明                                      |
|-----------------------|-----------------|--------|-------------------------------------------|
| MonitorConnections    | なし            | void   | 接続状態をリアルタイムで監視する            |
| BroadcastMessage      | message: string | Task   | 全接続へメッセージを送信する              |
| DebugConnectionList   | なし            | void   | 接続リストの詳細情報を表示する             |
| SetMaxConnections     | max: int        | void   | 接続可能な最大数を設定する                |
| ObtainConnectionReport| なし           | string | 接続の詳細レポートを生成する              |
| TraceConnectionFlow   | なし            | void   | 接続の詳細情報を分析し表示する            |

## 機能一覧
- 接続状態をリアルタイムで監視し、異常を検知可能。
- 全接続に対するブロードキャストメッセージ送信をサポート。
- デバッグモードにおいて接続リストの詳細情報を提供し、開発者が状況を確認できる設計となっている。
- 接続の最大数を動的に変更可能。
- 開発者向けに接続リスト状態の詳細レポートを取得でき、通信状態の監視が容易になっている。
- 開発者向けに、各接続の詳細な状態診断およびトレーシング機能を提供し、リアルタイム分析が可能となっている。

## 使用例
```csharp
// 接続状態のリアルタイム監視
WebSocketManager.MonitorConnections();

// ブロードキャストメッセージ送信
await WebSocketManager.BroadcastMessage("System update in progress");

// デバッグモードで接続リストを表示
WebSocketManager.DebugConnectionList();

// 接続の最大数を動的に変更
WebSocketManager.SetMaxConnections(100);
```
