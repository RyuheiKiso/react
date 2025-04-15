# SqlQueries

## 概要
SQLクエリを一元管理するクラス。クエリの取得や動的パラメータのサポートを提供します。

## 依存関係
| モジュール | 説明 |
|-----------|------|
| なし      |      |

## 定数一覧
| 定数名 | 型 | 説明 |
|--------|----|------|
| QueryFilePath | string | クエリ定義ファイルのパス |

## 変数一覧
| 変数名 | 型 | 説明 |
|--------|----|------|
| _queries | Dictionary<string, string> | クエリを格納する内部辞書 |

## クラス一覧
| クラス名      | 説明                     |
|---------------|--------------------------|
| SqlQueries    | SQLクエリ管理クラス      |

## 関数一覧
| 関数名            | 引数                                     | 戻り値   | 説明                                          |
|-------------------|------------------------------------------|----------|-----------------------------------------------|
| GetQuery          | key: string                              | string   | 指定キーのクエリを取得する                    |
| AddQuery          | key: string, query: string               | void     | クエリを追加する                              |
| LoadFromFile      | filePath: string                         | void     | クエリ定義をファイルから読み込む              |
| ValidateParameters| key: string, parameters: object          | boolean  | クエリのパラメータを検証する                  |
| EnableResultCaching | なし                                 | void     | クエリ結果のキャッシュ機能を有効化する         |
| DebugExecutionPlan | key: string                             | void     | クエリの実行計画をデバッグ表示する            |
| SetQuerySource    | sourceType: string, source: string        | void     | クエリ読み込み元を動的に切り替える             |

## 機能一覧
- クエリの動的パラメータバリデーション機能を提供。
- クエリの実行結果をキャッシュし、パフォーマンスを向上。
- デバッグモードにおいてクエリの実行計画を詳細表示し、開発者が問題箇所を把握しやすい設計となっている。
- クエリ読み込み元の動的切り替えや依存関係の可視化が可能。
- 変更履歴の追跡とロールバックが可能。
- クエリ実行前の詳細なパラメータチェックログを出力し、問題解決を支援する。
- クエリパラメータの詳細検証と実行ログの即時出力により、問題箇所を迅速に特定できるよう設計されている.
+ 開発者向けに、利用時のガイドおよび具体的な操作例を提供し、検証作業を効率的にサポートする仕組みを取り入れている.

## 使用例
```csharp
// クエリの動的パラメータバリデーション
bool isValid = SqlQueries.ValidateParameters("SelectUser", new { UserId = 123 });
Console.WriteLine(isValid);

// クエリ結果のキャッシュ
SqlQueries.EnableResultCaching();

// デバッグモードで実行計画を表示
SqlQueries.DebugExecutionPlan("SelectUser");

// クエリ読み込み元の動的切り替え
SqlQueries.SetQuerySource("remote", "https://example.com/queries.json");
```
