# 機能名
ベースページ

## ファイル名
BasePage.tsx

## 概要
ヘッダー、ボディ、フッターを統合した基本レイアウト。各個別ページで再利用するための枠組みを提供する。

## 定数
| 定数名           | 用途                                  |
| ---------------- | ------------------------------------- |
| BASEPAGE_MARGIN  | ページ全体のマージン設定              |

## 変数
| 変数名            | 用途                              |
| ----------------- | --------------------------------- |
| headerProps       | ヘッダーに渡す設定値               |
| bodyProps         | ボディに渡す設定値                 |
| footerProps       | フッターに渡す設定値               |

## 関数
| 関数名                 | 用途                                            | 引数                                                        | 戻り値      | 使用定数/変数                    |
| ---------------------- | ----------------------------------------------- | ----------------------------------------------------------- | ----------- | --------------------------------- |
| renderHeader           | ヘッダーコンポーネントの呼び出し                  | headerProps: HeaderProps                                    | JSX.Element | headerProps                     |
| renderBody             | ボディコンポーネントの呼び出し                    | bodyProps: BodyProps                                        | JSX.Element | bodyProps                       |
| renderFooter           | フッターコンポーネントの呼び出し                  | footerProps: FooterProps                                    | JSX.Element | footerProps                     |
| refreshPage            | 各コンポーネントを再レンダリングする              | なし                                                        | void        | headerProps, bodyProps, footerProps |
| updateLayout           | ページレイアウトを更新する                       | なし                                                        | void        | headerProps, bodyProps, footerProps |
| refreshEntirePage      | 全体レイアウトを再読み込みする                    | なし                                                        | void        | headerProps, bodyProps, footerProps |
| setPageTheme           | ページ全体のテーマ（カラー等）を設定する          | theme: Theme                                                | void        | headerProps, bodyProps, footerProps |
| toggleLayoutMode       | レイアウト表示モードを切り替える                  | なし                                                        | void        | headerProps, bodyProps, footerProps |
| setResponsiveLayout    | レスポンシブ対応のレイアウトを設定する            | breakpoints: Breakpoints                                    | void        | headerProps, bodyProps, footerProps |
| customizeGlobalLayout  | 全体レイアウトのカスタム設定を行う                | layoutOptions: LayoutOptions                                | void        | headerProps, bodyProps, footerProps |
| adaptiveLayout         | レイアウトの自動適応調整を行う                    | なし                                                        | void        | headerProps, bodyProps, footerProps |

## 依存関係
Header、Body、Footer各コンポーネント、React、Material-UI

## 事前条件
各子コンポーネントの設定が適切に渡されること

## 事後条件
ページ全体が統一されたレイアウトで正しく表示される

## エラーハンドリング
各子コンポーネントでのエラーをキャッチし、全体としてエラーメッセージを表示する

## テストケース
- 正常ケース：各部分が正しくレンダリングされる
- 異常ケース：一部コンポーネントが失敗した場合のフォールバック動作確認

## 変更履歴
- v1.0 初回作成  
- v1.1 refreshEntirePage関数を追加  
- v1.2 optimizeLayout関数を追加  
- v1.3 setPageTheme関数を追加  
- v1.4 toggleLayoutMode関数を追加  
- v1.5 setResponsiveLayout関数を追加
