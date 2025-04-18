# 機能名
エラーハンドリング

## ファイル名
ErrorBoundary.tsx

## 概要
コンポーネントツリー内で発生するエラーをキャッチし、ユーザーに適切なフィードバックを返す仕組みを提供する。全体のクラッシュを防止する。

## 定数
| 定数名           | 用途                                   |
| ---------------- | -------------------------------------- |
| DEFAULT_ERROR_MESSAGE | デフォルトのエラーメッセージ          |

## 変数
| 変数名         | 用途                                   |
| -------------- | -------------------------------------- |
| hasError      | エラー発生フラグ                         |
| errorMessage  | キャッチしたエラーメッセージ               |

## 関数
| 関数名                 | 用途                                          | 引数            | 戻り値 |
| ---------------------- | --------------------------------------------- | --------------- | ------ |
| componentDidCatch      | エラー発生時にエラーログを保存し、状態を更新する       | error, info     | void   |
| renderFallback         | エラー発生時に代替のUIをレンダリングする              | なし            | JSX.Element |
| resetError             | エラー状態をリセットする                           | なし            | void   |
| logError               | 発生したエラーをログに記録する                      | なし            | void   |
| notifyError            | 管理者へエラー通知を送る                            | なし            | void   |
| reportErrorToService   | エラー内容を外部サービスに送信する                   | なし            | void   |
| sendFeedback           | ユーザーからのエラー報告を送信する                  | feedback: string                                            | void   |
| captureErrorContext    | エラー発生時の追加情報をキャプチャする               | context: any                                                | void   |
| retryRender            | エラー後の再レンダリングを試みる                    | なし            | void   |
| notifyUserOnError      | エラー発生時にユーザーへ通知する                    | なし            | void   |
| escalateCriticalError  | 致命的エラー発生時にシステム管理に通知する            | なし            | void   |
| fallbackErrorHandler   | カスタムフォールバック処理を実施する                | error: Error                                                | void   |
| sendErrorReport         | エラー情報を詳細に報告する                         | error: Error, additionalInfo?: any                            | void   |
| notifyAdminOnCriticalError | 致命的エラー時に管理者へ通知する                | error: Error    | void   |

## 依存関係
React、Material-UI、エラーログ用ユーティリティ（例: Sentry）

## 事前条件
エラーハンドリングラッパーが正しく各コンポーネントを包んでいること

## 事後条件
エラー発生時にユーザーに適切なエラーメッセージが表示される

## エラーハンドリング
内部で発生した例外はログに記録し、ユーザーにはシンプルなエラーメッセージを表示

## テストケース
- 正常ケース：エラーが発生しない状態で子コンポーネントがレンダリングされる
- 異常ケース：子コンポーネントでエラー発生時、フォールバックUIが表示される

## 変更履歴
- v1.0 初回作成  
- v1.1 reportErrorToService関数を追加  
- v1.2 captureErrorContext関数を追加  
- v1.3 sendFeedback関数を追加  
- v1.4 retryRender関数を追加  
- v1.5 notifyUserOnError関数を追加  
- v1.6 sendErrorReport関数を追加
