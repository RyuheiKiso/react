# 機能名
テーブル

## ファイル名
Table.tsx

## 概要
データを行・列形式で表示し、並び替えやフィルタを提供するコンポーネント

## 定数
| 定数名         | 用途                           |
| -------------- | ------------------------------ |
| DEFAULT_SORT | デフォルトの並び替えキー            |

## 変数
| 変数名      | 用途                           |
| ----------- | ------------------------------ |
| data        | 表示するデータの配列              |

## 関数
| 関数名                 | 用途                                          | 引数                                                        | 戻り値      |
| ---------------------- | --------------------------------------------- | ----------------------------------------------------------- | ----------- |
| renderRows             | 各行をレンダリングする                         | data: any[]                                                 | JSX.Element |
| filterRows             | テーブルデータをフィルタリングする              | criteria: Record<string, any>                               | void        |
| sortRows               | テーブルデータを指定キーでソートする            | key: string, order: 'asc'|'desc'                              | void        |
| exportTableData        | テーブルデータをCSVなどにエクスポートする       | format: 'csv'|'json'                                          | void        |
| downloadTableData      | 表データをExcel形式でダウンロードする          | filename?: string                                             | void        |
| customizeRowStyle      | 各行にカスタムスタイルを適用する                | styleConfig: Record<string, any>                              | void        |
| customizeHeaderStyle   | ヘッダー部分にカスタムスタイルを適用する         | styleConfig: Record<string, any>                              | void        |
| paginateTableData      | テーブルデータのページネーションを行う         | page: number, pageSize: number                                 | void        |
| refreshTableData       | テーブルデータを自動更新する                     | // なし                                          | void        |
| customTableStyling     | テーブルにカスタムスタイルを適用する             | styleConfig: Record<string, any>                              | void        |

## 依存関係
React、Material-UI、テーブル管理ライブラリ

## 事前条件
データの形式が統一されていること

## 事後条件
テーブルが正しく表示、並び替え、フィルタリングされる

## エラーハンドリング
無効なデータの場合、エラーメッセージを表示する

## テストケース
- 正常：データ表示、ソートが正しく機能する
- 異常：空データ時の表示確認

## 変更履歴
- v1.0 初回作成  
- v1.1 exportTableData関数を追加  
- v1.2 downloadTableData関数を追加  
- v1.3 customizeRowStyle関数を追加  
- v1.4 customizeHeaderStyle関数を追加  
- v1.5 paginateTableData関数を追加
