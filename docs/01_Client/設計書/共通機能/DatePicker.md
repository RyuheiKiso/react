# 機能名
日付選択

## ファイル名
DatePicker.tsx

## 概要
カレンダー表示を用いてユーザーが日付を直感的に選択できるコンポーネント

## 定数
| 定数名          | 用途                           |
| --------------- | ------------------------------ |
| DATE_FORMAT     | 表示する日付のフォーマット           |

## 変数
| 変数名         | 用途                           |
| -------------- | ------------------------------ |
| selectedDate   | 選択された日付                     |

## 関数
| 関数名                | 用途                                            | 引数                                                        | 戻り値     | 使用定数/変数  |
| --------------------- | ------------------------------------------------ | ----------------------------------------------------------- | ---------- | -------------  |
| handleDateChange      | 日付選択時の状態更新                             | newDate: Date                                               | void       | selectedDate   |
| disableDates          | 選択不可の日付範囲を設定する                      | dateRange: { start: Date, end: Date }                         | void       | selectedDate   |
| clearDate             | 選択された日付をクリアし初期状態にリセットする       | // ...existing code...                                       | void       | selectedDate   |
| selectToday           | 今日の日付を設定する                             | // ...existing code...                                       | void       | selectedDate   |
| selectDateRange       | 開始日と終了日の範囲を選択する機能を提供する          | startDate: Date, endDate: Date                                | void       | selectedDate   |
| selectWeek            | 週単位で日付選択を可能にする                       | weekNumber: number                                            | void       | selectedDate   |
| quickSelectDate       | よく使う日付（例：明日・来週）を即座に選択する       | preset: 'tomorrow' | 'nextWeek'                                 | void       | selectedDate   |
| highlightWeekend      | 週末の日付を視覚的に強調表示する                  | // ...existing code...                                       | void       | selectedDate   |
| setMinMaxDate         | 選択可能な最小・最大日付を設定する                 | minDate: Date, maxDate: Date                                  | void       | selectedDate   |
| selectMultipleDates   | 複数日付選択機能を提供する                        | dates: Date[]                                               | JSX.Element| selectedDate   |
| applyCustomDateStyle  | 日付のカスタムスタイルを適用する                  | styleOptions: DateStyleOptions                                | void       | selectedDate   |
| advancedDateValidation| 複雑な日付バリデーションを実装する                | date: Date, rules: DateValidationRules                        | boolean    | selectedDate   |

## 依存関係
React、Material-UI、日付フォーマットライブラリ

## 事前条件
初期日付及びフォーマット設定が適用済み

## 事後条件
ユーザーが正しい日付を選択できる

## エラーハンドリング
不正な日付入力時はデフォルト値にリセット

## テストケース
- 正常：日付が正しく選択・表示される
- 異常：フォーマット不正時の挙動確認

## 変更履歴
- v1.0 初回作成  
- v1.1 selectWeek関数を追加  
- v1.2 quickSelectDate関数を追加  
- v1.3 highlightWeekend関数を追加  
- v1.4 setMinMaxDate関数を追加  
- v1.5 selectMultipleDates関数を追加
