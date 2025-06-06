# 機能名
データベースハンドラ

## ファイル名
DatabaseHandler.cs

## 概要
サーバー側のデータベース接続（SQL Server、PostgreSQL）およびクエリ実行、トランザクション管理を一元化するコンポーネント。

## 定数
| 定数名                   | 用途                                    |
| ------------------------ | ---------------------------------------  |
| DEFAULT_CONNECTION_STRING| デフォルトの接続文字列設定                  |
| MAX_POOL_SIZE            | コネクションプールの最大サイズ設定          |

## 変数
| 変数名           | 用途                                   |
| ---------------- | --------------------------------------  |
| connectionString | データベース接続文字列を保持する             |
| dbConnection     | 現在のデータベース接続インスタンスを管理する    |

## 関数
| 関数名                  | 用途                                          | 引数                                    | 戻り値       |
| ----------------------- | --------------------------------------------- | --------------------------------------- | ------------ |
| openConnection          | データベース接続を確立する                      | なし                                    | void         |
| closeConnection         | データベース接続を閉じる                        | なし                                    | void         |
| executeQuery            | SQLクエリを実行し結果を返す                     | query: string, parameters?: object      | DataSet      |
| beginTransaction        | トランザクションを開始する                      | なし                                    | Transaction  |
| commitTransaction       | 現在のトランザクションをコミットする             | なし                                    | void         |
| rollbackTransaction     | トランザクションをロールバックする              | なし                                    | void         |
| optimizeDatabaseQueries | SQLクエリのパフォーマンスを最適化する処理を実施する  | query: string                           | string       |
| backupDatabase          | データベースのバックアッププロセスを実行し、指定場所に保存する | backupDestination: string, options?: object | void         |

## 依存関係
ADO.NET、ORMライブラリ（例: Entity Framework Core）

## 事前条件
- 接続設定はConfigManagerを使用して取得され、接続文字列が正しく設定されていること

## 事後条件
クエリ実行およびトランザクション管理が正確に行われる

## エラーハンドリング
クエリ実行中のエラー発生時は例外をキャッチし、エラーログを記録するとともに必要に応じトランザクションをロールバックする

## テストケース
- 正常：クエリ実行およびトランザクション操作が期待通りに実施される
- 異常：接続障害やクエリエラー発生時の処理を検証する

## 変更履歴
- v1.0 初回作成
- v1.1 optimizeDatabaseQueries関数を追加
