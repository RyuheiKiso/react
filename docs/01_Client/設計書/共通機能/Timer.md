# 機能名
タイマー

## ファイル名
Timer.tsx

## 概要
指定した時間をカウントダウン、またはストップウォッチ機能を提供するコンポーネント

## 定数
| 定数名       | 用途                              |
| ------------ | --------------------------------- |
| INITIAL_TIME | タイマーの初期値（秒単位）            |

## 変数
| 変数名      | 用途                           |
| ----------- | ------------------------------ |
| time        | 残り時間または経過時間              |

## 関数
| 関数名                | 用途                                          | 引数                                      | 戻り値 |
| --------------------- | --------------------------------------------- | ----------------------------------------- | ------ |
| startTimer            | タイマーの起動                                 | initialTime?: number                        | void   |
| stopTimer             | タイマーの停止                                 | // なし                                  | void   |
| resetTimer            | タイマーを初期状態にリセットする                | // なし                                  | void   |
| pauseTimer            | タイマーを一時停止する                         | // なし                                  | void   |
| lapTimer              | 現在のラップタイムを記録する                    | // なし                                  | void   |
| suspendTimer          | タイマーを一時的に中断する                      | duration: number                           | void   |
| setCustomTimer        | タイマーに任意の初期値を設定する                | time: number                               | void   |
| adjustTimerInterval   | タイマーのインターバルを動的に調整する           | interval: number                           | void   |
| pauseAndResumeTimer   | タイマーを一時停止後、再開する                  | // なし                                  | void   |
| extendTimer           | タイマーの計測期間を延長する                    | extraTime: number                          | void   |
| extendTimerDuration   | タイマーの計測期間を動的に延長する               | extraTime: number                          | void   |

## 依存関係
React、Material-UI、タイマー用フック

## 事前条件
初期時間が設定済み

## 事後条件
時間が正しくカウントダウンまたは計測される

## エラーハンドリング
タイマーの不正操作時は、初期状態にリセットする

## テストケース
- 正常：タイマーが期待通りに動作する
- 異常：中断時のリセット動作確認

## 変更履歴
- v1.0 初回作成  
- v1.1 lapTimer関数を追加  
- v1.2 suspendTimer関数を追加  
- v1.3 setCustomTimer関数を追加  
- v1.4 adjustTimerInterval関数を追加  
- v1.5 pauseAndResumeTimer関数を追加
