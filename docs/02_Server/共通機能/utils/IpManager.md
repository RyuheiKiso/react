# 機能名
IP情報管理

## ファイル名
IpManager.cs

## 概要
クライアント（フロントエンド）のIP情報を取得し、管理するための共通機能です。この機能は、セキュリティやアクセス制御のために使用されます。

## 定数
| 定数名              | 用途                                      |
| ------------------- | ----------------------------------------- |
| DEFAULT_IP          | デフォルトのIPアドレスを定義する          |

## 変数
| 変数名              | 用途                                      |
| ------------------- | ----------------------------------------- |
| ipList              | 管理対象のIPアドレスリストを保持する       |
| currentIp           | 現在のクライアント（フロントエンド）IPアドレスを保持する     |

## 関数
| 関数名              | 用途                                      | 引数          | 戻り値 |
| ------------------- | ----------------------------------------- | ------------- | ------ |
| getCurrentIp        | 現在のクライアント（フロントエンド）IPアドレスを取得する     | なし          | string |
| addIpToList         | IPアドレスをリストに追加する               | ip: string    | void   |
| removeIpFromList    | IPアドレスをリストから削除する             | ip: string    | void   |
| isIpAllowed         | 指定したIPアドレスが許可されているか確認する | ip: string    | bool   |

## 依存関係
- ConfigManager
- Logger

## 事前条件
- ConfigManagerを通じてIPリストが初期化されていること

## 事後条件
- IPリストが正しく更新され、アクセス制御に利用可能になる

## エラーハンドリング
- IPアドレスの追加や削除時にエラーが発生した場合、詳細なログを記録し、例外をスローする

## テストケース
- 正常：現在のIPアドレスが正しく取得できることを確認する
- 正常：IPアドレスがリストに正しく追加・削除されることを確認する
- 異常：無効なIPアドレスを追加しようとした場合、適切にエラーが処理されることを確認する

## 変更履歴
- v1.0 初回作成
