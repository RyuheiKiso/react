# StringExtensions

## 概要
文字列操作のための拡張メソッドを提供するクラス。キャメルケース変換やスネークケース変換など、文字列フォーマットの統一を支援します。

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
| クラス名          | 説明                     |
|-------------------|--------------------------|
| StringExtensions  | 文字列操作の拡張メソッド |

## 関数一覧
| 関数名           | 引数                              | 戻り値   | 説明                                      |
|------------------|-----------------------------------|----------|-------------------------------------------|
| ToCamelCase      | str: string                       | string   | キャメルケースに変換する                  |
| ToSnakeCase      | str: string                       | string   | スネークケースに変換する                  |
| DebugTransformation | original: string, transform: (string) => string | void | 変換前後をデバッグ表示する            |
| RegexMatch       | input: string, pattern: string      | boolean  | 正規表現による一致検索を実行する            |

## 機能一覧
- キャメルケース、スネークケース、パスカルケースへの変換をサポート。
- 文字列のトリムや正規化機能を提供。
- デバッグモードにて変換前後の文字列を比較表示し、開発者が処理結果を容易に確認できる設計となっている。
- 文字列の部分一致や正規表現検索を簡単に実行可能。
- 文字列の類似度計算と、暗号化/復号化機能を提供。
- 変換処理の各ステップを追跡可能なログを提供し、デバッグを容易にしている.
+ 開発者向けに、利用手順のガイドと共に直感的な操作支援を実現する仕組みを併置している.


## 使用例
```csharp
// キャメルケース変換
string camelCase = StringExtensions.ToCamelCase("TestString");
Console.WriteLine(camelCase);

// スネークケース変換
string snakeCase = StringExtensions.ToSnakeCase("TestString");
Console.WriteLine(snakeCase);

// デバッグモードで変換前後を比較
StringExtensions.DebugTransformation("TestString", StringExtensions.ToSnakeCase);

// 正規表現検索
bool isMatch = StringExtensions.RegexMatch("TestString", "^Test");
Console.WriteLine(isMatch);
```
