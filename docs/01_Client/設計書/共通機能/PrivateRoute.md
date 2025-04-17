# 機能名
認証が必要なルート

## ファイル名
PrivateRoute.tsx

## 概要
認証済みユーザーのみアクセス可能なルートを管理するコンポーネント

## 定数
| 定数名        | 用途                   |
| ------------- | ---------------------- |
| AUTH_ROUTE    | 認証が必要なルート指定         |

## 変数
| 変数名   | 用途                    |
| -------- | ----------------------- |
| userAuth | ユーザーの認証状態を管理         |

## 関数
| 関数名                     | 用途                                          | 引数                                                        | 戻り値  |
| -------------------------- | --------------------------------------------- | ----------------------------------------------------------- | ------- |
| checkAccess                | ルートへのアクセス権を検証する                  | user: User                                                  | boolean |
| redirectUnauthorized       | 未認証ユーザーをログインページにリダイレクトする    | redirectUrl: string                                           | void    |
| logUnauthorizedAccess      | 未認証アクセス時の情報をログに記録する             | accessAttempt: AccessAttempt                                | void    |
| cacheUnauthorizedAttempts  | 不正アクセス試行をキャッシュする                | attempt: AccessAttempt                                        | void    |
| validateToken              | JWTトークンの有効性を検証する                   | token: string                                               | boolean |
| logAccessAttempt           | アクセス試行情報を詳細に記録する                  | attempt: AccessAttempt                                        | void    |
| refreshAuthToken           | 認証トークンを更新する                          | token: string                                               | void    |
| logAndRedirectUnauthorized | 未認証アクセスをログ記録しリダイレクトする         | user: User, redirectUrl: string                               | void    |
| enforceRouteSecurity       | ルートアクセスのセキュリティを強化する           | route: string                                               | boolean |

## 依存関係
React Router、Redux、認証ライブラリ

## 事前条件
認証情報が正しく管理されていること

## 事後条件
アクセス権がある場合のみ対象コンポーネントが表示される

## エラーハンドリング
認証エラー時はログイン画面にリダイレクトする

## テストケース
- 正常：認証済みの場合にルートにアクセスできる
- 異常：未認証の場合のリダイレクト確認

## 変更履歴
- v1.0 初回作成  
- v1.1 logUnauthorizedAccess関数を追加  
- v1.2 cacheUnauthorizedAttempts関数を追加  
- v1.3 validateToken関数を追加  
- v1.4 logAccessAttempt関数を追加  
- v1.5 refreshAuthToken関数を追加
