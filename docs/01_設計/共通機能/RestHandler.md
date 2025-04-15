# RestHandler

## 概要
REST APIのリクエストとレスポンスを処理するクラス。リクエストのバリデーションやレスポンスのフォーマットを統一的に管理します。

## 依存関係
| モジュール | 説明 |
|-----------|------|
| なし      |      |

## 定数一覧
| 定数名 | 型 | 説明 |
|--------|----|------|
| DefaultPageSize | int | デフォルトのページサイズ |

## 変数一覧
| 変数名 | 型 | 説明 |
|--------|----|------|
| _pageSize | int | ページサイズ |

## クラス一覧
| クラス名      | 説明                     |
|---------------|--------------------------|
| RestHandler   | REST API処理クラス       |

## 関数一覧
| 関数名              | 引数              | 戻り値      | 説明                                       |
|---------------------|-------------------|-------------|--------------------------------------------|
| HandleRequest       | request: HttpRequest | HttpResponse | リクエストを処理する                      |
| SetPageSize         | pageSize: int     | void        | ページサイズを設定する                      |
| ValidateRequest     | request: HttpRequest | boolean   | リクエストの内容を検証する                   |
| SetResponseFormat   | format: string    | void        | レスポンスのフォーマットを設定する         |
| DebugRequestResponse| request: HttpRequest | void      | リクエストとレスポンスの詳細をデバッグ表示する|
| TraceHttpDetails    | request: HttpRequest | void      | HTTP通信の詳細情報をトレースする             |

## 機能一覧
- RESTリクエストのバリデーション機能を提供。
- レスポンスのフォーマットをカスタマイズ可能。
- デバッグモードにおいてリクエストとレスポンスの詳細情報を表示し、開発者が検証しやすい設計となっている。
- ページサイズの動的変更をサポート。
- APIエンドポイントの自動ドキュメント生成およびリクエストのリプレイ機能を提供。
- リクエスト処理過程の詳細なログを自動記録し、開発者が検証しやすい設計となっている。
- HTTP通信における詳細な情報のトレースが可能となっており、デバッグ時の分析が容易になっている。
- 開発者向けに、リクエストおよびレスポンスの詳細トレーシング機能を装備し、通信プロセスの状況を可視化できるようになっている。

## 使用例
```csharp
// リクエストのバリデーション
bool isValid = RestHandler.ValidateRequest(request);
Console.WriteLine(isValid);

// レスポンスフォーマットのカスタマイズ
RestHandler.SetResponseFormat("application/json");

// デバッグモードで詳細表示
RestHandler.DebugRequestResponse(request);

// ページサイズの動的変更
RestHandler.SetPageSize(100);
```
