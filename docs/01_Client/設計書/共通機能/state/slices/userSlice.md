# 機能名
ユーザー関連状態管理

## ファイル名
userSlice.ts

## 概要
ユーザー情報の状態管理を行うReduxスライス

## 定数
| 定数名          | 用途                           |
| --------------- | ------------------------------ |
| INITIAL_USER  | ユーザー情報の初期状態設定            |

## 変数
| 変数名  | 用途                |
| ------- | ------------------- |
| user    | ユーザー情報の状態         |

## 関数
| 関数名            | 用途                                   | 引数                | 戻り値 |
| ----------------- | -------------------------------------- | ------------------- | ------ |
| setUser           | ユーザー情報を更新する                | newUser: User       | void   |
| clearUser         | ユーザー情報を初期状態にリセットする    | なし                | void   |
| updateUserProfile | ユーザーのプロフィール情報を部分更新する | profile: Partial<User>                    | void   |
| updateUserStatus  | ユーザーのステータスを更新する          | status: string                            | void   |
| updateUserRole    | ユーザーの役割を更新する                | role: string                              | void   |
| updateUserEmail   | ユーザーのメールアドレスを更新する       | email: string                             | void   |
| exportUserData    | ユーザー情報をエクスポートする           | なし                                      | string |
| fetchUserDetails  | サーバーからユーザー詳細を取得する        | userId: string                            | void   |
| updateLastLogin   | 最終ログイン日時を更新する              | loginTime: Date                           | void   |
| fetchUserActivityLog | ユーザーの活動ログを取得する         | userId: string                            | string |
| refreshUserState  | ユーザーステートの最新情報を取得し更新する  | なし                                      | void   |
| updateUserLastActiveTimestamp | 最終アクティビティ時刻を更新する   | timestamp: Date                           | void   |
| validateUserSession | ユーザーセッションの有効性を検証する | token: string | boolean |
| updateUserAvatar  | ユーザーのアバター画像を更新する         | avatarUrl: string   | void   |
| trackInteraction           | ユーザーのインタラクション情報を共通トラッキングモジュール（CommonTracking.md参照）で集約管理する | event: Event, metadata?: any | void   |

## 依存関係
Redux Toolkit

## プログラム間連携
ユーザー状態はReduxストアとの連動に加え、認証およびAPI通信モジュールと連携し、リアルタイム更新とセッション管理を実現する。

## 事前条件
初期状態が定義されていること

## 事後条件
ユーザー情報が正しく管理され更新される

## エラーハンドリング
不正な更新時は初期状態にリセットする

## テストケース
- 正常：ユーザー情報の更新・取得が期待通りに動作する
- 異常：不正入力時のリセット確認

## 変更履歴
- v1.0 初回作成  
- v1.1 updateUserRole関数を追加  
- v1.2 exportUserData関数を追加  
- v1.3 updateUserEmail関数を追加  
- v1.4 fetchUserDetails関数を追加  
- v1.5 updateLastLogin関数を追加  
- v1.6 updateUserLastActiveTimestamp関数を追加
- v1.7 validateUserSession関数を追加
