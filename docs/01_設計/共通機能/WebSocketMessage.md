# WebSocketMessage

## 概要
WebSocket 通信で使用されるメッセージを表現するクラス。

## 依存関係
| 種別 | 名前 | 説明 |
|------|------|------|
| なし | なし | なし |

## 定数一覧
| 名前 | 型 | 説明 |
|------|----|------|
| MessageType | string | メッセージの種類 |

## 変数一覧
| 名前 | 型 | 説明 |
|------|----|------|
| Content | string | メッセージの内容 |
| Timestamp | DateTime | メッセージのタイムスタンプ |

## クラス一覧
| 名前 | 説明 |
|------|------|
| WebSocketMessage | WebSocket メッセージを表現するクラス |

## 関数一覧
| 関数名               | 引数                             | 戻り値 | 説明                                     |
|----------------------|----------------------------------|--------|------------------------------------------|
| ToString             | なし                             | string | メッセージ内容を文字列化                  |
| ValidateMessage      | message: WebSocketMessage        | boolean| メッセージの内容と種類の検証を行う          |
| DebugMessageDetails  | message: WebSocketMessage        | void   | 開発者向けに詳細情報を表示する            |
| SetTimestampFormat   | format: string                   | void   | タイムスタンプのフォーマットを設定する    |
| MonitorLatency       | なし                             | number | 通信時の遅延を計測して返す                |
| TraceMessageFlow     | message: WebSocketMessage        | void   | 通信の流れを逐次検証する                  |

## 機能一覧
- メッセージ内容を文字列化する機能を提供。
- メッセージの種類や内容を簡単に検証可能。
- デバッグモードでメッセージの詳細情報を表示し、開発者が迅速に状況を把握できる設計となっている。
- タイムスタンプのフォーマットをカスタマイズ可能。
- 開発者向けにメッセージ生成時の詳細ログ情報を提供している.
- 通信時の遅延情報を即時取得でき、開発者が性能分析を行いやすい設計となっている。
- 開発者向けに、通信のトレーシングと詳細診断が可能な仕組みを装備し、リアルタイムで状況確認できるようになっている。

## 使用例
```csharp
// メッセージ内容の文字列化
var message = new WebSocketMessage("Hello", "Text");
Console.WriteLine(message.ToString());

// メッセージの検証
bool isValid = WebSocketMessage.ValidateMessage(message);
Console.WriteLine(isValid);

// デバッグモードで詳細表示
WebSocketMessage.DebugMessageDetails(message);

// タイムスタンプフォーマットのカスタマイズ
WebSocketMessage.SetTimestampFormat("yyyy-MM-dd HH:mm:ss");
```
