# 機能名
Reduxストア設定

## ファイル名
store.ts

## 概要
Reduxストアの設定を行い、グローバル状態管理を実現する

## 定数
| 定数名        | 用途                      |
| ------------- | ------------------------- |
| INITIAL_STATE | 各スライスの初期状態設定           |

## 変数
| 変数名 | 用途                    |
| ------ | ----------------------- |
| store  | Reduxストアのインスタンス         |

## 関数
| 関数名                   | 用途                                          | 引数                                                      | 戻り値   |
| ------------------------ | --------------------------------------------- | --------------------------------------------------------- | -------- |
| configureStore           | Reduxストアを構築し設定する                    | slices: any, middleware?: any[]                           | Store    |
| injectMiddleware         | ミドルウェアを動的に注入する                   | middleware: any                                           | void     |
| resetStore               | ストアの全状態を初期状態にリセットする           | // なし                                      | void     |
| persistState             | 現在の状態を永続化する                         | storageKey?: string                                        | void     |
| reloadStore              | ストアを最新状態に再読み込みする               | // なし                                      | void     |
| hydrateStore             | 永続化された状態からストアに再設定する           | persistedState: any                                        | void     |
| resetPersistence         | 永続化状態をリセットする                        | // なし                                      | void     |
| initializeStoreState     | ストアの初期状態を保証する                     | initialState: any                                          | Store    |
| syncPersistentStore      | 永続化状態とストアを同期する                   | currentState: any, persistentState: any                    | void     |

## 依存関係
Redux、Redux Toolkit、React-Redux

## 事前条件
各スライスの設定が済んでいること

## 事後条件
アプリ全体で状態が一元管理される

## エラーハンドリング
状態更新エラー時はログ出力とリカバリを行う

## テストケース
- 正常：正常にストアが初期化される
- 異常：不正な状態更新時の挙動確認

## 変更履歴
- v1.0 初回作成  
- v1.1 resetStore関数を追加  
- v1.2 persistState関数を追加  
- v1.3 reloadStore関数を追加  
- v1.4 hydrateStore関数を追加  
- v1.5 resetPersistence関数を追加
