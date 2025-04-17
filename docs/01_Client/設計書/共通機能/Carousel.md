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
| 関数名                      | 用途                                            | 引数                                                        | 戻り値      | 使用定数/変数 |
| --------------------------- | ----------------------------------------------- | ----------------------------------------------------------- | ----------- | ------------- |
| nextSlide                   | 次のアイテムへスライドする                         | currentIndex: number                                        | void        | items         |
| prevSlide                   | 前のアイテムへスライドする                         | currentIndex: number                                        | void        | items         |
| pauseSlide                  | 自動スライドを一時停止する                         | // ...existing code...                                      | void        | items         |
| goToSlide                   | 指定スライドにジャンプする                         | slideIndex: number                                          | void        | items         |
| autoSlide                   | 一定間隔で自動的にスライドを切り替える              | interval?: number                                            | void        | items         |
| stopAutoSlide               | 自動スライドを停止する                            | // ...existing code...                                      | void        | items         |
| pauseOnHover                | ホバー時に自動スライドを一時停止する                | // ...existing code...                                      | void        | items         |
| swipeCarousel               | スワイプ操作でスライドを切り替える                | direction: 'left' | 'right'                                   | void        | items         |
| shuffleSlides               | スライド順序をランダムに並び替える                | // ...existing code...                                      | void        | items         |
| pauseAndResumeAutoSlide     | 自動スライドの一時停止と再開を行う                 | // ...existing code...                                      | void        | items         |
| responsiveCarousel          | 画面サイズに応じたカルーセル調整を行う             | containerWidth: number                                      | JSX.Element | items         |

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
