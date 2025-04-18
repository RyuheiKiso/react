# 機能名
ボタン

## ファイル名
Button.tsx

## 概要
ユーザーのクリック操作に基づき、指定アクションを実行するための再利用可能なコンポーネント

## 定数
| 定数名      | 用途                                 |
| ----------- | ------------------------------------ |
| BUTTON_TYPE | ボタンの種類（primary, secondaryなど）|

## 変数
| 変数名       | 用途                           |
| ------------ | ------------------------------ |
| label        | ボタン上に表示する文字列         |

## 関数
| 関数名                  | 用途                                          | 引数                                               | 戻り値 |
| handleClick            | クリックイベントハンドリング                    | event: React.MouseEvent<HTMLButtonElement>         | void   |
| setLoading             | ボタンのローディング状態を設定する               | isLoading: boolean                                 | void   |
| disableButton         | ボタンを無効化する                             | disabled: boolean                                     | void   |
| rippleEffect          | クリック時の波紋（リップル）効果を発動する         | event: React.MouseEvent<HTMLButtonElement>            | void   |
| toggleButtonState     | ボタンの状態をトグルする                         | // ...existing code...                                 | void   |
| setButtonIcon         | ボタンにアイコンを設定する                       | icon: JSX.Element                                     | void   |
| doubleClickAction     | ダブルクリック時のアクションを実行する           | event: React.MouseEvent<HTMLButtonElement>            | void   |
| setButtonTooltip      | ボタンにツールチップを追加する                   | tooltip: string                                       | void   |
| animateButtonClick    | クリック時にアニメーション効果を付与する          | // ...existing code...                                 | void   |
| toggleButtonAnimation | クリック時にアニメーションを追加する             | // ...existing code...                                 | void   |
| addRippleAnimation    | 追加のリップル（波紋）アニメーション効果を適用する | event: React.MouseEvent<HTMLButtonElement>            | void   |
| configureButtonAppearance | ボタンの外観を動的に設定する                   | appearanceOptions: Record<string, any>            | void   |
| trackInteraction       | ユーザーのインタラクション情報を共通トラッキングモジュール（CommonTracking.md参照）で集約管理する | event: Event, metadata?: any | void   |

## 依存関係
React、Material-UI、スタイルライブラリ

## 事前条件
各種スタイル、テーマ設定が適用済みであること

## 事後条件
クリック時に正しい処理が実行される

## エラーハンドリング
クリックハンドラ内での例外はログ出力して、ユーザーに通知

## テストケース
- 正常：クリック操作で指定関数が呼ばれる
- 異常：ハンドラ内例外発生時のフォールバック確認

## 変更履歴
- v1.0 初回作成  
- v1.1 rippleEffect関数を追加  
- v1.2 toggleButtonState関数を追加  
- v1.3 setButtonIcon関数を追加  
- v1.4 doubleClickAction関数を追加  
- v1.5 setButtonTooltip関数を追加
