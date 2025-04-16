# 通信処理

## ファイル名
APIHandler.ts

## 概要
REST API、gRPC、QUIC、WebSocketを使用した通信処理を統一的に管理するモジュールです。

## 定数
| 定数名 | 用途 |
|--------|------|
| `API_BASE_URL` | REST APIのベースURL |
| `GRPC_ENDPOINT` | gRPCのエンドポイント |

## 変数
| 変数名 | 用途 |
|--------|------|
| `socket` | WebSocket接続を管理する変数 |

## 関数
| 関数名 | 用途 | 戻り値 | 使用する定数 | 使用する変数 |
|--------|------|--------|--------------|--------------|
| `fetchData` | REST APIからデータを取得する | Promise<any> | `API_BASE_URL` | なし |
| `sendMessage` | WebSocketでメッセージを送信する | void | なし | `socket` |

## 依存関係
- Axios: REST API通信
- WebSocket API: WebSocket通信
- gRPCライブラリ: gRPC通信
- QUICライブラリ: QUIC通信
