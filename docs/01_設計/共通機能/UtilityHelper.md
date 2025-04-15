# UtilityHelper

## 概要
共通ユーティリティ関数を提供するクラス。

## 依存関係
| モジュール | 説明 |
|-----------|------|
| なし      |      |

## 定数一覧
| 定数名 | 型 | 説明 |
|--------|----|------|
| なし   |    |      |

## 変数一覧
| 変数名 | 型 | 説明 |
|--------|----|------|
| なし   |    |      |

## クラス一覧
| クラス名       | 説明                     |
|----------------|--------------------------|
| UtilityHelper  | ユーティリティ関数群を提供 |

## 関数一覧
| 関数名         | 引数                                | 戻り値    | 説明                                      |
|----------------|-------------------------------------|-----------|-------------------------------------------|
| ExampleFunc    | arg1: string                        | boolean   | サンプル関数                              |
| JsonToXml      | json: string                        | string    | JSON文字列をXMLに変換する                  |
| ExecuteWithRetry | action: Action, retryCount: int     | void      | タスクのリトライ処理を実行する             |
| DebugExecution | func: Func<string>                   | void      | 実行結果をデバッグモードで表示する         |
| FormatDate     | date: DateTime, format: string       | string    | 日付のフォーマット変換を行う              |

## 機能一覧
- 汎用的なデータ変換機能（例: JSON ↔ XML）を提供。
- タスクのリトライ処理を簡単に実装可能。
- デバッグモードにより各関数の実行結果を詳細に表示し、開発者が動作検証しやすい設計となっている。
- 日付や時刻のフォーマット変換をサポート。
- 関数実行時の詳細なログ情報を自動的に記録し、開発者のデバッグを支援する。
- 開発者向けに、実行結果や変換処理の詳細がリアルタイムに把握できるトレース機能を備えている.
+ 開発者向けに、利用時のガイドと詳細な操作手順を提供し、利便性向上に寄与する仕組みを含んでいる.

## 使用例
```typescript
const result = UtilityHelper.ExampleFunc("test");
console.log(result);
```
```csharp
// JSON ↔ XML 変換
string xml = UtilityHelper.JsonToXml("{ \"key\": \"value\" }");
Console.WriteLine(xml);

// タスクのリトライ処理
UtilityHelper.ExecuteWithRetry(() => {
    // 実行する処理
    Console.WriteLine("Retrying...");
}, 3);

// デバッグモードで実行結果を表示
UtilityHelper.DebugExecution(() => {
    return "Sample Result";
});

// 日付フォーマット変換
string formattedDate = UtilityHelper.FormatDate(DateTime.Now, "yyyy-MM-dd");
Console.WriteLine(formattedDate);
```
