# 機能名
トースト通知

## ファイル名
ToastNotification.tsx

## 概要
一時的な通知メッセージを画面の隅に表示し、一定時間後に自動的に消えるコンポーネント

## 定数
| 定数名         | 用途                           |
| -------------- | ------------------------------ |
| DISPLAY_TIME   | 通知の表示継続時間（ミリ秒）        |

## 変数
| 変数名      | 用途                           |
| ----------- | ------------------------------ |
| message     | 表示する通知メッセージ            |

## 関数
| 関数名                 | 用途                                          | 引数                                              | 戻り値 |
| ---------------------- | --------------------------------------------- | ------------------------------------------------- | ------ |
| showToast              | 通知を表示して、タイマー開始する                 | message: string, duration?: number                  | void   |
| hideToast              | 通知を強制的に非表示にする                        | // なし                                            | void   |
| updateToastMessage     | 通知メッセージを更新する                        | newMessage: string                                | void   |
| dismissToast           | ユーザー操作でトーストを非表示にする               | // なし                                            | void   |
| queueToast             | 複数の通知をキュー処理して順次表示する             | messages: string[]                                | void   |
| clearQueue             | キュー内の通知をすべてクリアする                 | // なし                                            | void   |
| scheduleToast          | 複数通知のスケジューリングを行う                  | schedule: { message: string, delay: number }[]    | void   |
| updateToastPosition    | 通知の表示位置を動的に変更する                    | position: 'top' | 'bottom' | 'center'                | void   |
| scheduleToastDismiss   | 通知の自動非表示時間をスケジューリングする         | timeout: number                                   | void   |
| scheduleEnhancedToast  | 拡張通知のスケジューリングを実装する             | config: Record<string, any>                       | void   |

## 依存関係
React、Material-UI、アニメーション／タイマーライブラリ

## 事前条件
通知メッセージが正しく提供されていること

## 事後条件
通知が表示され、時間経過後に自動消去される

## エラーハンドリング
表示失敗時はエラーメッセージをコンソールに出力

## テストケース
- 正常：通知が一定時間後に消える
- 異常：表示トリガー失敗時の挙動確認

## 変更履歴
- v1.0 初回作成  
- v1.1 dismissToast関数を追加  
- v1.2 queueToast関数を追加  
- v1.3 clearQueue関数を追加  
- v1.4 scheduleToast関数を追加  
- v1.5 updateToastPosition関数を追加
