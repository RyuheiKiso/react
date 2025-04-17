# 機能名
商品関連状態管理

## ファイル名
productSlice.ts

## 概要
商品情報の状態管理を行うReduxスライス

## 定数
| 定数名           | 用途                      |
| ---------------- | ------------------------- |
| INITIAL_PRODUCT  | 商品情報の初期状態設定            |

## 変数
| 変数名   | 用途                 |
| -------- | -------------------- |
| products | 商品リストの状態管理        |

## 関数
| 関数名                    | 用途                                          | 引数                                                        | 戻り値 |
| ------------------------- | --------------------------------------------- | ----------------------------------------------------------- | ------- |
| setProducts               | 商品情報を更新する                             | products: Product[]                                         | void    |
| addProduct                | 新しい商品を追加する                           | product: Product                                            | void    |
| removeProduct             | 商品をリストから削除する                       | productId: string                                           | void    |
| updateProductStock        | 商品の在庫情報を更新する                       | productId: string, stock: number                            | void    |
| searchProduct             | 指定条件で商品情報をフィルタリングする           | query: string                                               | void    |
| filterProductsByCategory  | カテゴリーに基づき商品を絞り込む                 | category: string                                            | void    |
| updateProductPrice        | 商品の価格情報を更新する                      | productId: string, price: number                            | void    |
| applyDiscountToProduct    | 商品に割引率を適用して価格を更新する            | productId: string, discountRate: number                     | void    |
| updateProductAvailability | 商品の在庫状態を更新する                       | productId: string, availability: boolean                    | void    |
| bulkUpdateProducts        | 複数商品の情報を一括で更新する                  | updates: Partial<Product>[]                                 | void    |
| bulkUpdateProductPrices   | 複数商品の価格をバッチで更新する                | updates: { productId: string, price: number }[]              | void    |

## 依存関係
Redux Toolkit

## 事前条件
初期の商品情報が定義されていること

## 事後条件
商品情報の更新と管理が正しく行われる

## エラーハンドリング
更新エラー時はログを出力し、リセット処理を実施する

## テストケース
- 正常：商品情報の追加・更新・削除が期待通りに動作する
- 異常：不正な入力時の動作確認

## 変更履歴
- v1.0 初回作成  
- v1.1 searchProduct関数を追加  
- v1.2 filterProductsByCategory関数を追加  
- v1.3 updateProductPrice関数を追加  
- v1.4 applyDiscountToProduct関数を追加  
- v1.5 updateProductAvailability関数を追加
