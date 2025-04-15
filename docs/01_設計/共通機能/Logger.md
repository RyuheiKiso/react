# Logger

## 概要
ログ出力を管理するクラス。情報ログ、エラーログ、デバッグログの出力をサポートします。

## 依存関係
| モジュール | 説明 |
|-----------|------|
| なし      |      |

## 定数一覧
| 定数名 | 型 | 説明 |
|--------|----|------|
| DefaultLogLevel | string | デフォルトのログレベル |

## 変数一覧
| 変数名 | 型 | 説明 |
|--------|----|------|
| _logLevel | string | 現在のログレベル |

## クラス一覧
| クラス名      | 説明                     |
|---------------|--------------------------|
| Logger        | ログ出力管理クラス       |

## 関数一覧
| 関数名                     | 引数                                  | 戻り値   | 説明                                          |
|----------------------------|---------------------------------------|----------|-----------------------------------------------|
| LogInfo                    | message: string                       | void     | 情報ログを出力する                           |
| LogError                   | message: string                       | void     | エラーログを出力する                         |
| LogDebug                   | message: string                       | void     | デバッグログを出力する                       |
| SetLogLevel                | level: string                         | void     | ログレベルを設定する                         |
| SetOutputDestination       | destination: string, path: string      | void     | ログ出力先を切り替える                        |
| SetFilter                  | category: string, filter: string       | void     | 特定カテゴリのログフィルタを設定する           |
| LogJson                    | data: object                           | void     | JSON形式でログ出力する                        |
| EnableRealTimeConsoleLogging | なし                                | void     | リアルタイムにコンソールへログ出力する         |
| DisplayCurrentLogSettings  | なし                                  | void     | 現在のログ設定を開発者向けに表示する           |

## 機能一覧
- ログ出力先の動的切り替え、フィルタリング機能に加え、現在のログ設定を確認できる機能を提供。
- 特定のカテゴリやレベルのみ出力するフィルタリング機能を強化。
- JSON形式でのログ出力をサポート。
- デバッグモードにおいて、リアルタイムにログをコンソールへストリーム出力し、開発者が迅速に現状を把握できる設計となっている。
- ログの検索機能を提供。
- ログの圧縮とアーカイブ機能を提供。
- ログのリアルタイムアラートや可視化ダッシュボードを含む仕組みを備えている.
+ 開発者向けに、利用時の操作ガイドと具体的な利用例を提供し、検証およびデバッグが円滑に進むよう工夫されている.

## 使用例
```csharp
// ログ出力先の動的切り替え
Logger.SetOutputDestination("file", "logs/app.log");

// 特定カテゴリのログのみ出力
Logger.SetFilter("Category", "Authentication");

// JSON形式でログ出力
Logger.LogJson(new { Event = "Start", Status = "Success" });

// デバッグモードでリアルタイムログ出力
Logger.EnableRealTimeConsoleLogging();
```
