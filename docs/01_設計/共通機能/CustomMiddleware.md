# CustomMiddleware

## 概要
CustomMiddleware は、HTTP リクエストとレスポンスの処理をカスタマイズするためのミドルウェアです。リクエストの検証、ログ記録、エラーハンドリング、レスポンスの加工を行います。

## 依存関係
| 種類       | 名前                | 説明                                   |
|------------|---------------------|----------------------------------------|
| ライブラリ | Microsoft.AspNetCore.Http | HTTP コンテキスト操作用のライブラリ |
| ライブラリ | Microsoft.Extensions.Logging | ログ記録用のライブラリ             |

## 定数一覧
| 名前       | 型     | 説明                                   |
|------------|--------|----------------------------------------|
| LogCategory | string | ログのカテゴリ名                      |

## 変数一覧
| 名前       | 型     | 説明                                   |
|------------|--------|----------------------------------------|
| _logger    | ILogger | ログ記録用のインスタンス               |

## クラス一覧
| 名前             | 説明                                   |
|------------------|----------------------------------------|
| CustomMiddleware | HTTP リクエストとレスポンスを処理するクラス |

## 関数一覧
| 関数名                      | 引数                                                       | 戻り値   | 説明                                             |
|-----------------------------|------------------------------------------------------------|----------|--------------------------------------------------|
| InvokeAsync                 | context: HttpContext                                       | Task     | HTTPリクエストを非同期に処理する                   |
| LogRequest                  | context: HttpContext                                       | void     | リクエスト情報をログ出力する                      |
| HandleError                 | context: HttpContext, ex: Exception                         | Task     | エラーを処理し適切なレスポンスを返す               |
| AddCustomHeader             | context: HttpContext, key: string, value: string             | void     | レスポンスにカスタムヘッダーを追加する            |
| MeasurePerformance          | context: HttpContext                                       | void     | リクエスト処理のパフォーマンスを計測する            |
| AddConditionalProcessing    | endpoint: string, action: Action                           | void     | 特定エンドポイントに対する条件付き処理を追加する    |
| SetCustomErrorMessage       | statusCode: int, message: string                           | void     | エラー時のカスタムメッセージを設定する             |
| DebugRequestResponse        | context: HttpContext                                       | void     | リクエストとレスポンスの詳細をデバッグ表示する      |

## 機能一覧
- リクエストのパフォーマンス計測機能を提供し、処理時間をログに記録。
- 特定のエンドポイントに対する条件付き処理を簡単に設定可能。
- エラーハンドリング時にカスタムエラーメッセージを返却する機能を提供。
- デバッグモードにてリクエストとレスポンスの詳細情報を表示し、開発者が検証しやすい設計となっている。
- リクエストのシミュレーション機能およびミドルウェアの動的切り替えが可能。
- 開発者向けに、リクエスト処理中の詳細なトレースとエラー状況のリアルタイムログ出力機能を備えており、迅速な検証が可能となっている.
+ 開発者向けに、利用時のガイドおよび具体的な操作手順を提供し、デバッグや検証がより直感的に行えるよう工夫されている.

## 使用例
```csharp
// リクエストのパフォーマンス計測
CustomMiddleware.MeasurePerformance(context);

// 特定エンドポイントの条件付き処理
CustomMiddleware.AddConditionalProcessing("/api/special", (ctx) => {
    // 特別な処理を実行
});

// エラーハンドリング時のカスタムメッセージ
CustomMiddleware.SetCustomErrorMessage(404, "Resource not found");

// デバッグモードで詳細表示
CustomMiddleware.DebugRequestResponse(context);
```
