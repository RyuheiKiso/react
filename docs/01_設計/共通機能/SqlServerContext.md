# SqlServerContext

## 概要
SQL Server データベースとの接続および操作を管理するためのコンテキストクラス。接続文字列の設定やトランザクション管理をサポートします。

## 依存関係
| 種別 | 名前 | 説明 |
|------|------|------|
| ライブラリ | EntityFrameworkCore | データベース操作のための ORM |

## 定数一覧
| 名前 | 型 | 説明 |
|------|----|------|
| ConnectionString | string | データベース接続文字列 |

## 変数一覧
| 名前 | 型 | 説明 |
|------|----|------|
| _dbContextOptions | DbContextOptions | データベースコンテキストの設定 |

## クラス一覧
| 名前 | 説明 |
|------|------|
| SqlServerContext | SQL Server データベースとの接続を管理するクラス |

## 関数一覧
| 関数名                     | 引数                                | 戻り値   | 説明                                          |
|----------------------------|-------------------------------------|----------|-----------------------------------------------|
| SqlServerContext           | options: DbContextOptions           | -        | コンストラクタ                                |
| SaveChanges                | なし                                | int      | データベースへの変更を保存する                |
| BeginTransaction           | なし                                | IDbContextTransaction | トランザクションを開始         |
| CommitTransaction          | なし                                | void     | トランザクションをコミットする               |
| RollbackTransaction        | なし                                | void     | トランザクションをロールバックする           |
| MeasureQueryExecutionTime  | action: Action                      | void     | クエリ実行時間を計測しログに記録する           |
| MonitorConnectionPool      | なし                                | void     | 接続プールの状態をモニタリングする            |
| DebugConnectionState       | なし                                | void     | 接続状態をデバッグ表示する                    |
| ExecuteWithRetry           | action: Action                      | void     | トランザクションの自動リトライを実行する       |

## 機能一覧
- クエリの実行時間を計測し、ログに記録する機能を提供。
- 接続プールの状態をリアルタイムでモニタリング可能。
- デバッグモードにより現在の接続状態及びトランザクション情報を詳細表示し、開発者が状況把握しやすい設計となっている。
- トランザクションの自動リトライ機能を提供。
- 開発者向けに、クエリ実行時の詳細なトレースと接続状態のリアルタイムログ出力機能を備えている.
+ 開発者向けに、利用時の操作ガイドと具体例を併記し、デバッグおよび検証がより直感的に行える仕組みを含んでいる.

## 使用例
```csharp
// クエリの実行時間を計測
SqlServerContext.MeasureQueryExecutionTime(() => {
    context.SaveChanges();
});

// 接続プールの状態をモニタリング
SqlServerContext.MonitorConnectionPool();

// デバッグモードで接続状態を表示
SqlServerContext.DebugConnectionState();

// トランザクションの自動リトライ
SqlServerContext.ExecuteWithRetry(() => {
    using (var transaction = context.BeginTransaction())
    {
        context.SaveChanges();
        transaction.Commit();
    }
});
```
