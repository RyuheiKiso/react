# 機能名
トグルスイッチ

## ファイル名
ToggleSwitch.tsx

## 概要
スイッチ状のUIでON/OFFの状態を切り替えるコンポーネント

## 定数
| 定数名         | 用途                           |
| -------------- | ------------------------------ |
| SWITCH_ON      | ON状態を示す定数                  |
| SWITCH_OFF     | OFF状態を示す定数                 |

## 変数
| 変数名      | 用途                           |
| ----------- | ------------------------------ |
| isActive    | 現在のスイッチ状態を管理              |

## 関数
| 関数名                | 用途                                          | 引数                     | 戻り値 |
| toggleState          | 状態を反転し、再レンダリングを行う              | // なし                   | void   |
| setSwitchOn          | スイッチ状態をONに強制設定する                   | // なし                   | void   |
| setSwitchOff         | スイッチ状態をOFFに強制設定する                  | // なし                   | void   |
| resetSwitch          | スイッチ状態を初期状態にリセットする              | // なし                   | void   |
| toggleAdvanced         | 高度な条件に基づいた状態切替を行う                | conditions: any                               | void   |
| simulateRapidToggle    | 短時間に連続トグルをシミュレートする             | count: number                                 | void   |
| updateToggleColor      | スイッチの色を更新する                          | color: string                                 | void   |
| animateToggle          | トグル切替時にアニメーション効果を追加する         | duration: number                              | void   |
| simulateLongPressToggle| 長押しで状態を切替える                          | // なし                                      | void   |
| updateSwitchLabel      | スイッチに表示するラベルの更新を行う              | label: string                                 | void   |
| advancedToggleFunction | 高度な条件に基づいたトグル動作を実装する          | options: Record<string, any>         | void   |
| trackInteraction     | ユーザーのインタラクション情報を共通トラッキングモジュール（CommonTracking.md参照）で集約管理する | event: Event, metadata?: any | void  |

## 依存関係
React、Material-UI、シンプルなスタイル管理ライブラリ

## 事前条件
初期状態が適切に設定されていること

## 事後条件
スイッチがユーザー操作に応じて正しく切り替わる

## エラーハンドリング
不正な状態更新時は初期状態に戻す

## テストケース
- 正常：クリックで状態がON/OFFに切替わる
- 異常：更新失敗時のリカバリ確認

## 変更履歴
- v1.0 初回作成  
- v1.1 toggleAdvanced関数を追加  
- v1.2 simulateRapidToggle関数を追加  
- v1.3 updateToggleColor関数を追加  
- v1.4 animateToggle関数を追加  
- v1.5 simulateLongPressToggle関数を追加
