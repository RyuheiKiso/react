# 機能名
テキストフィールド

## ファイル名
TextField.tsx

## 概要
ユーザーからの文字入力を受け付け、適切に値を管理するコンポーネント

## 定数
| 定数名         | 用途                           |
| -------------- | ------------------------------ |
| INPUT_TYPE     | 入力タイプ（text, passwordなど）|

## 変数
| 変数名        | 用途                           |
| ------------- | ------------------------------ |
| value         | 入力された文字列                |

## 関数
| 関数名              | 用途                                         | 引数                                              | 戻り値     |
| ------------------- | -------------------------------------------- | ------------------------------------------------- | ---------- |
| handleChange        | 入力変更時のイベントを処理                    | event: React.ChangeEvent<HTMLInputElement>        | void       |
| clearField          | 入力フィールドの内容をクリアする               | // なし                                          | void       |
| validateField       | フィールドの入力値を検証する                   | value: string, rules: ValidationRules             | boolean    |
| autocompleteField   | 入力補完機能を提供する                      | input: string, options: string[]                    | JSX.Element|
| formatText          | 入力テキストを自動フォーマットする              | text: string                                      | string     |
| maskText            | 入力テキストをマスクする                      | text: string, maskPattern: string                   | string     |
| suggestCorrections  | 入力内容に対して修正候補を提示する               | text: string, dictionary: string[]                  | JSX.Element|
| suggestAutoFill     | 自動入力候補を提示する                         | partialText: string, suggestions: string[]          | JSX.Element|
| validateAndFormat   | 入力値のバリデーションと自動フォーマットを同時に行う | text: string, rules: ValidationRules             | string     |
| autoCorrectInput    | 入力内容の自動修正を行う                        | text: string, corrections: Record<string, string>   | string     |

## 依存関係
React、Material-UI、本体のバリデーションライブラリ

## 事前条件
初期値、バリデーションルールが設定済み

## 事後条件
入力内容が状態として反映される

## エラーハンドリング
入力エラー時はエラーメッセージを表示

## テストケース
- 正常：入力値が状態に正しく反映される
- 異常：不正な入力時のエラー表示確認

## 変更履歴
- v1.0 初回作成  
- v1.1 autocompleteField関数を追加  
- v1.2 formatText関数を追加  
- v1.3 maskText関数を追加  
- v1.4 suggestCorrections関数を追加  
- v1.5 suggestAutoFill関数を追加
