# 機能名
カルーセル／スライダー

## ファイル名
Carousel.tsx

## 概要
複数のアイテムを横方向にスライドさせ、連続して表示するコンポーネント

## 定数
| 定数名         | 用途                           |
| -------------- | ------------------------------ |
| SLIDE_INTERVAL | 自動スライド切替の間隔（ミリ秒）     |

## 変数
| 変数名        | 用途                           |
| ------------- | ------------------------------ |
| items         | 表示するアイテムの配列              |

## 関数
| 関数名                 | 用途                                          | 引数                                | 戻り値      |
| nextSlide              | 次のアイテムへスライドする                          | currentIndex: number                | void        |
| prevSlide              | 前のアイテムへスライドする                          | currentIndex: number                | void        |
| ...existing code...    | ...existing code...                             | ...existing code...                 | ...existing code... |
| trackInteraction      | ユーザーのインタラクション情報を共通トラッキングモジュール（CommonTracking.md参照）で集約管理する | event: Event, metadata?: any | void   |

## 依存関係
React、Material-UI、アニメーション／スライダー用ライブラリ

## 事前条件
表示するアイテムが存在すること

## 事後条件
アイテムが連続して正しく表示される

## エラーハンドリング
アイテムが空の場合はプレースホルダーを表示

## テストケース
- 正常：自動および手動スライドが動作する
- 異常：アイテムが無い場合の挙動確認

## 変更履歴
- v1.0 初回作成  
- v1.1 autoSlide関数を追加  
- v1.2 stopAutoSlide関数を追加  
- v1.3 pauseOnHover関数を追加  
- v1.4 swipeCarousel関数を追加  
- v1.5 shuffleSlides関数を追加
