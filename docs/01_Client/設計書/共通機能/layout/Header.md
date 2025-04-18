# 機能名
ヘッダー

## ファイル名
Header.tsx

## 概要
アプリケーション全体で共通して使用するヘッダー。ロゴ、ナビゲーション、ユーザー情報などを表示する。

## 定数
| 定数名         | 用途                   |
| -------------- | ---------------------- |
| HEADER_HEIGHT  | ヘッダーの高さを指定   |

## 変数
| 変数名            | 用途                         |
| ----------------- | ---------------------------- |
| navigationItems   | ナビゲーション項目のリスト   |
| clientIp          | クライアントのIPアドレス（ローカルストレージと連携） |

## 関数
| 関数名                   | 用途                                          | 引数                        | 戻り値       |
| ------------------------ | --------------------------------------------- | --------------------------- | ------------ |
| renderLogo               | ロゴ部分の描画                                | なし                        | JSX.Element  |
| renderMenu               | ナビゲーションメニューの描画                  | なし                        | JSX.Element  |
| toggleNavigation         | ナビゲーションの表示/非表示を切り替える        | なし                        | void         |
| updateLogo               | ロゴ画像を更新する                            | newLogoUrl: string          | void         |
| displayNotifications     | ユーザー通知を表示する                         | なし                        | JSX.Element  |
| refreshNotifications     | 通知の最新情報を再取得して表示する              | なし                        | void         |
| toggleUserMenu           | ユーザープロフィールのドロップダウンメニューを切替する | なし                     | void         |
| toggleSearchBar          | ヘッダー内の検索バーの表示/非表示を切り替える     | なし                        | void         |
| toggleHeaderSticky       | ヘッダーの固定表示／非固定を切り替える           | なし                        | void         |
| updateNavigationLogo     | ナビゲーションのロゴ更新とリンクの再設定を行う    | newLogoData: { url: string, link: string } | void  |
| dynamicHeaderMenu        | ヘッダーのメニューを動的に更新する              | menuConfig: MenuConfig      | JSX.Element  |
| toggleTheme              | ヘッダーのテーマ（ダーク/ライト）を切り替える     | なし                        | void         |
| searchNavigationItems    | ナビゲーション項目を検索する機能を提供する       | query: string               | JSX.Element  |
| customizeHeaderTheme     | ヘッダーのテーマをカスタム化する                | themeOptions: any           | void         |
| toggleNotificationsPanel | 通知パネルの表示/非表示を切り替える             | なし                        | void         |
| updateHeaderTheme        | ヘッダーのテーマを動的に更新する               | newTheme: Theme             | void         |
| trackInteraction           | ユーザーのインタラクション情報を共通トラッキングモジュール（CommonTracking.md参照）で集約管理する | event: Event, metadata?: any | void   |
| **initClientIp**         | 外部APIからクライアントIPを取得し、ローカルストレージに格納する（※localStorageUtilを利用） | なし | void  |
| **renderClientIp**       | ローカルストレージからIPを取得し、表示する（※localStorageUtilを利用） | なし                        | JSX.Element  |

## 依存関係
React、React Router、Material-UI

## 事前条件
必須のスタイルシート、ロゴ画像が存在すること

## 事後条件
正しくレンダリングされ、ナビゲーションが機能する

## エラーハンドリング
レンダリングエラー時は代替ロゴまたはエラーメッセージを表示

## テストケース
- 正常ケース：ナビゲーションが正しく描画される
- 異常ケース：ロゴ画像が読み込めない場合の表示確認

## 変更履歴
- v1.0 初回作成  
- v1.1 displayNotifications関数を追加  
- v1.2 refreshNotifications関数を追加  
- v1.3 toggleUserMenu関数を追加  
- v1.4 toggleSearchBar関数を追加  
- v1.5 toggleHeaderSticky関数を追加  
- v1.6 toggleTheme関数を追加  
- v1.7 searchNavigationItems関数を追加  
- v1.8 toggleNotificationsPanel関数を追加
