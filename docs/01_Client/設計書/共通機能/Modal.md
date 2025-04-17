# 機能名
モーダル

## ファイル名
Modal.tsx

## 概要
画面上にオーバーレイでコンテンツを表示し、ユーザーの注意を引くためのモーダルウィンドウ

## 定数
| 定数名        | 用途                         |
| ------------- | ---------------------------- |
| MODAL_WIDTH   | モーダルの幅の指定            |

## 変数
| 変数名      | 用途                         |
| ----------- | ---------------------------- |
| isOpen      | モーダルの開閉状態を管理       |

## 関数
| 関数名             | 用途                                          | 引数                                                        | 戻り値 |
| ------------------ | --------------------------------------------- | ----------------------------------------------------------- | ------ |
| openModal          | モーダルを開く                                | initialContent?: JSX.Element                                | void   |
| closeModal         | モーダルを閉じる                              | なし                                                        | void   |
| toggleModal        | モーダルの開閉を切り替える                       | なし                                                        | void   |
| updateModalContent | モーダル内のコンテンツを更新する                | newContent: JSX.Element                                     | void   |
| maximizeModal      | モーダルを最大化表示に切り替える                | なし                                                        | void   |
| minimizeModal      | モーダルを最小化表示に切り替える                | なし                                                        | void   |
| repositionModal    | モーダルの位置を動的に再計算する                  | なし                                                        | void   |
| dynamicModalSize   | 動的にモーダルサイズを調整する                  | sizeOptions: { width?: number, height?: number }             | void   |

## 依存関係
React、Material-UI、ポータル機能

## 事前条件
オーバーレイ用スタイルが適用済み

## 事後条件
モーダルが正しく表示、非表示となる

## エラーハンドリング
開閉操作中のエラーはログに記録

## テストケース
- 正常：開閉操作が期待通りに動作する
- 異常：不正な状態遷移時の動作確認

## 変更履歴
- v1.0 初回作成  
- v1.1 maximizeModal関数を追加  
- v1.2 setModalTransparency関数を追加  
- v1.3 resizeModal関数を追加  
- v1.4 dragModal関数を追加  
- v1.5 minimizeModal関数を追加
