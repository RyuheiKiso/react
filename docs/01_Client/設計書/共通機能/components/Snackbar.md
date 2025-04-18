# 機能名
スナックバー

## ファイル名
Snackbar.tsx

## 概要
ユーザーへの一時的な通知やフィードバックを画面下部に表示するコンポーネント

## 定数
| 定数名          | 用途                           |
| --------------- | ------------------------------ |
| DISPLAY_DURATION| 通知表示時間（ミリ秒）            |

## 変数
| 変数名   | 用途                             |
| -------- | -------------------------------- |
| message  | 表示する通知メッセージ              |
| isVisible| 表示状態を管理するフラグ           |

## 関数
| 関数名                 | 用途                                          | 引数                                      | 戻り値 |
| showSnackbar           | スナックバーを表示する                           | message: string, duration?: number          | void   |
| hideSnackbar           | スナックバーを非表示にする                       | なし                                       | void   |
| updateSnackbarMessage  | 表示中のメッセージを更新する                      | newMessage: string                          | void   |
| toggleSnackbar        | スナックバーの表示/非表示を切り替える                | なし                                       | void   |
| updateSnackbarPosition | スナックバーの表示位置を動的に更新する         | position: 'top'|'bottom'|'center'         | void   |
| trackInteraction     | ユーザーのインタラクション情報を共通トラッキングモジュール（CommonTracking.md参照）で集約管理する | event: Event, metadata?: any | void   |

## 依存関係
React、Material-UI、アニメーション／タイマーライブラリ

## 事前条件
適切な初期設定およびスタイルが適用されていること

## 事後条件
ユーザーに対して一時的な通知が表示される

## エラーハンドリング
通知表示失敗時はコンソールログにエラー出力する

## テストケース
- 正常：指定時間後に自動非表示、手動操作での切替が正しく動作する
- 異常：空メッセージ時の表示確認

## 変更履歴
- v1.0 初回作成
