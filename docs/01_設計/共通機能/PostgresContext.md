# PostgresContext

## 概要
PostgreSQL データベースとの接続および操作を管理するためのコンテキストクラス。接続文字列の設定やトランザクション管理をサポートします。

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
| PostgresContext | PostgreSQL データベースとの接続を管理するクラス |

## 関数一覧
| 関数名                     | 引数                             | 戻り値   | 説明                                            |
|----------------------------|----------------------------------|----------|-------------------------------------------------|
| PostgresContext            | options: DbContextOptions        | -        | コンストラクタ                                  |
| SaveChanges                | なし                             | int      | データベースへの変更を保存する                  |
| BeginTransaction           | なし                             | IDbContextTransaction | トランザクションを開始         |
| CommitTransaction          | なし                             | void     | トランザクションをコミットする                 |
| RollbackTransaction        | なし                             | void     | トランザクションをロールバックする             |
| MeasureQueryExecutionTime  | action: Action                   | void     | クエリ実行時間を計測・ログ出力する              |
| MonitorConnectionPool      | なし                             | void     | 接続プールの状態をモニタリングする              |
| DebugConnectionState       | なし                             | void     | 接続状態をデバッグ表示する                      |
| ExecuteWithRetry           | action: Action                   | void     | 自動リトライ処理を実行する                       |

## 機能一覧
- クエリの実行時間を計測し、ログに記録する機能を提供。
- 接続プールの状態をリアルタイムでモニタリング可能。
- デバッグモードにより現在の接続状態とトランザクション情報を詳細表示し、開発者が迅速に状況確認できる設計となっている。
- トランザクションの自動リトライ機能を提供。
- 接続の自動再接続機能を提供。
- SQLクエリのプレビュー機能を提供。
- 複数データベース間の負荷分散を実現。
- 開発者向けに、接続状況やクエリ実行の詳細ログをリアルタイムでトレースできる仕組みを提供している.
+ 開発者向けに、利用時のガイドと具体的な検証例を併記し、デバッグ作業が容易になる工夫を取り入れている.

## 使用例
```csharp
// クエリの実行時間を計測
PostgresContext.MeasureQueryExecutionTime(() => {
    context.SaveChanges();
});

// 接続プールの状態をモニタリング
PostgresContext.MonitorConnectionPool();

// デバッグモードで接続状態を表示
PostgresContext.DebugConnectionState();

// トランザクションの自動リトライ
PostgresContext.ExecuteWithRetry(() => {
    using (var transaction = context.BeginTransaction())
    {
        context.SaveChanges();
        transaction.Commit();
    }
});
```
