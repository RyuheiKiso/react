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
| 関数名            | 用途                                          | 引数                           | 戻り値      |
| renderHeader     | ヘッダーコンポーネントの呼び出し                | headerProps: HeaderProps       | JSX.Element |
| renderBody       | ボディコンポーネントの呼び出し                  | bodyProps: BodyProps           | JSX.Element |
| renderFooter     | フッターコンポーネントの呼び出し                | footerProps: FooterProps       | JSX.Element |
| refreshPage      | 各コンポーネントを再レンダリングする            | なし                           | void        |
| updateLayout     | ページレイアウトを更新する                       | なし                           | void        |
| refreshEntirePage | 全体レイアウトを再読み込みする                    | なし                           | void        |
| setPageTheme     | ページ全体のテーマ（カラー等）を設定する          | theme: Theme                   | void        |
| toggleLayoutMode | レイアウト表示モードを切り替える                  | なし                           | void        |
| setResponsiveLayout    | レスポンシブ対応のレイアウトを設定する            | breakpoints: Breakpoints       | void        |
| customizeGlobalLayout  | 全体レイアウトのカスタム設定を行う                | layoutOptions: LayoutOptions   | void        |
| adaptiveLayout         | レイアウトの自動適応調整を行う                    | なし                           | void        |
| applyGlobalSettings    | 全体の共通設定（例：フォント、カラー等）を適用する  | settings: Record<string, any>  | void        |
| enablePrintMode        | 印刷に最適化したレイアウトを適用する              | なし                           | void        |
| updateGlobalLayoutSettings | 全体レイアウトの設定を動的に更新する           | settings: Record<string, any>  | void        |
| trackInteraction | ユーザーのインタラクション情報を共通トラッキングモジュール（CommonTracking.md参照）で集約管理する | event: Event, metadata?: any   | void        |

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
- v1.6 applyGlobalSettings関数を追加