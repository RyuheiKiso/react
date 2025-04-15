# ErrorHandlingMiddleware

## 概要
アプリケーション全体のエラーハンドリングを行うミドルウェア。

## 依存関係
| モジュール | 説明 |
|-----------|------|
| Microsoft.AspNetCore.Http | HTTPコンテキスト操作用ライブラリ |

## 定数一覧
| 定数名 | 型 | 説明 |
|--------|----|------|
| なし   |    |      |

## 変数一覧
| 変数名 | 型 | 説明 |
|--------|----|------|
| なし   |    |      |

## クラス一覧
| クラス名               | 説明                     |
|------------------------|--------------------------|
| ErrorHandlingMiddleware | エラーハンドリングミドルウェア |

## 関数一覧
| 関数名       | 引数 | 戻り値 | 説明 |
|--------------|------|--------|------|
| InvokeAsync  | HttpContext context | Task | エラーを処理しレスポンスを返す |

## 使用例
```csharp
// Startup.cs での登録例
public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
{
    app.UseMiddleware<ErrorHandlingMiddleware>();
}
```
