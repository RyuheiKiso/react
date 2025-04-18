# 機能名
フッター

## ファイル名
Footer.tsx

## 概要
アプリケーション全体の下部に常駐し、著作権情報、リンク、お問い合わせ先などを表示するコンポーネント

## 定数
| 定数名           | 用途                       |
| ---------------- | -------------------------- |
| FOOTER_HEIGHT    | フッターの高さを指定       |

## 変数
| 変数名         | 用途                         |
| -------------- | ---------------------------- |
| links          | フッター内で表示するリンクリスト  |

## 関数
| 関数名                 | 用途                                              | 引数                                                 | 戻り値     | 使用定数/変数  |
| ---------------------- | ------------------------------------------------- | ---------------------------------------------------- | ---------- | ------------- |
| renderLinks            | フッター内のリンク一覧をレンダリングする            | links: LinkItem[]                                    | JSX.Element| links         |
| updateLinks            | フッター内のリンクリストを更新する                   | newLinks: LinkItem[]                                 | void       | links         |
| updateFooterLinks      | フッター内のリンクリストを再更新する                 | updatedLinks: LinkItem[]                             | void       | links         |
| contactUsLink          | お問い合わせリンクの表示内容を更新する              | contactInfo: { email: string, phone?: string }       | void       | links         |
| updateContactEmail     | お問い合わせ先メールアドレスを更新する              | email: string                                        | void       | links         |
| updateLegalNotice      | 法定文言や著作権情報を更新する                       | legalText: string                                    | void       | links         |
| displayFooterCredits   | フッターに追加のクレジットを表示する                 | credits: string                                      | JSX.Element| links         |
| rotateFooterLinks      | リンクの表示順を回転させる                           | rotation: number                                     | void       | links         |
| toggleFooterVisibility | フッターの表示/非表示を切り替える                    | なし                                                 | void       | links         |
| updateFooterCopyright  | フッターの著作権情報を自動更新する                    | なし                                                 | void       | links         |

## 依存関係
React、Material-UI、スタイルフレームワーク

## 事前条件
リンクのURL情報が正しいこと

## 事後条件
フッターが正しく描画され、各リンクが機能する

## エラーハンドリング
リンクの情報が無い場合、デフォルトメッセージを表示

## テストケース
- 正常ケース：全リンクがクリック可能で落ちない
- 異常ケース：リンクリストが空の場合の表示確認

## 変更履歴
- v1.0 初回作成  
- v1.1 contactUsLink関数を追加  
- v1.2 updateContactEmail関数を追加  
- v1.3 updateLegalNotice関数を追加  
- v1.4 displayFooterCredits関数を追加  
- v1.5 rotateFooterLinks関数を追加
