# ConfigurationValidator

## 概要
設定ファイルの整合性を検証するクラス。

## 依存関係
| モジュール | 説明 |
|-----------|------|
| Newtonsoft.Json | JSON操作用ライブラリ |

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
| ConfigurationValidator | 設定検証クラス           |

## 関数一覧
| 関数名       | 引数 | 戻り値 | 説明 |
|--------------|------|--------|------|
| Validate     | config: string | bool | 設定ファイルの整合性を検証 |

## 使用例
```csharp
bool isValid = ConfigurationValidator.Validate(configContent);
if (!isValid)
{
    Console.WriteLine("Invalid configuration.");
}
```
