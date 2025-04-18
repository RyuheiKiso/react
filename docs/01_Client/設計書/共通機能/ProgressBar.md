# 機能名
プログレスバー

## ファイル名
ProgressBar.tsx

## 概要
処理の進捗状況をユーザーに視覚的に知らせるコンポーネント

## 定数
| 定数名          | 用途                              |
| --------------- | --------------------------------- |
| MAX_PROGRESS    | プログレスの最大値を定義             |

## 変数
| 変数名       | 用途                             |
| ------------ | -------------------------------- |
| progress     | 現在の進捗状況（パーセント表示）      |

## 関数
| 関数名                  | 用途                                          | 引数                                  | 戻り値 | 使用定数/変数 |
| ----------------------- | --------------------------------------------- | ------------------------------------- | ------ | ------------- |
| updateProgress          | 進捗状況を更新し、再描画を行う                  | progress: number                      | void   | progress      |
| setProgressManually     | 進捗値を手動で設定する                         | progress: number                      | void   | progress      |
| resetProgress           | 進捗状況を初期値にリセットする                  | progress: number                      | void   | progress      |
| animateProgress         | 進捗バーにアニメーション効果を追加する           | animationDuration: number             | void   | progress      |
| updateProgressSmoothly  | 進捗バーを滑らかに更新する                       | targetProgress: number                | void   | progress      |
| setInfiniteProgress     | 終了条件のない無限進捗表示を設定する               | progress: number                      | void   | progress      |
| reverseProgress         | 逆方向の進捗更新を行う                          | progress: number                      | void   | progress      |
| setCustomProgressColor  | 進捗バーの色をカスタム設定する                   | color: string                         | void   | progress      |
| updateProgressWithAnimation | アニメーション付きで進捗を更新する           | progress: number, duration: number    | void   | progress      |
| customProgressLabel     | 進捗バーにカスタムラベルを追加する               | label: string                         | void   | progress, MAX_PROGRESS |

## 依存関係
React、Material-UI、アニメーションライブラリ

## 事前条件
進捗情報が外部から更新される仕組みがあること

## 事後条件
進捗バーが正確に進行状況を表示する

## エラーハンドリング
不正な進捗値は0または最大値に補正する

## テストケース
- 正常：進捗値に応じたバーの長さが変化する
- 異常：極端な値入力時の表示確認

## 変更履歴
- v1.0 初回作成  
- v1.1 animateProgress関数を追加  
- v1.2 updateProgressSmoothly関数を追加  
- v1.3 setInfiniteProgress関数を追加  
- v1.4 reverseProgress関数を追加  
- v1.5 setCustomProgressColor関数を追加
