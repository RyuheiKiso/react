# CacheManager

## 概要
キャッシュを一元管理するクラス。

## 依存関係
| モジュール | 説明 |
|-----------|------|
| Microsoft.Extensions.Caching.Memory | メモリキャッシュ用ライブラリ |
| StackExchange.Redis | 分散キャッシュ用ライブラリ |

## 定数一覧
| 定数名 | 型 | 説明 |
|--------|----|------|
| DefaultCacheDuration | int | デフォルトのキャッシュ有効期限（秒） |

## 変数一覧
| 変数名 | 型 | 説明 |
|--------|----|------|
| _memoryCache | IMemoryCache | メモリキャッシュインスタンス |
| _distributedCache | IDistributedCache | 分散キャッシュインスタンス |

## クラス一覧
| クラス名      | 説明                     |
|---------------|--------------------------|
| CacheManager  | キャッシュ管理クラス     |

## 関数一覧
| 関数名       | 引数 | 戻り値 | 説明 |
|--------------|------|--------|------|
| Get          | key: string | object | キャッシュから値を取得 |
| Set          | key: string, value: object, duration: int | void | キャッシュに値を設定 |
| Remove       | key: string | void | キャッシュから値を削除 |

## 使用例
```csharp
CacheManager.Set("key", "value", 3600);
var value = CacheManager.Get("key");
CacheManager.Remove("key");
```
