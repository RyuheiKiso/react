# 機能名
カメラ

## ファイル名
Camera.tsx

## 概要
デバイスのカメラを起動し、静止画の撮影や動画ストリーミングを提供するコンポーネント

## 定数
| 定数名           | 用途                      |
| ---------------- | ------------------------- |
| CAMERA_RESOLUTION| 撮影解像度の指定           |
| CAMERA_FPS       | フレームレートの指定       |

## 変数
| 変数名   | 用途                         |
| -------- | ---------------------------- |
| isCameraOn | カメラの起動状態を管理       |
| stream    | カメラからのストリーミングデータ |

## 関数
| 関数名                  | 用途                                          | 引数                        | 戻り値 |
| startCamera            | カメラを起動し、ストリーミング開始する             | なし                         | void   |
| stopCamera             | カメラを停止し、ストリーミングを終了する           | なし                         | void   |
| capturePhoto           | スナップショットを撮影する                         | quality?: number             | JSX.Element |
| switchCamera           | 利用可能なカメラ間で切り替える                      | cameraId: string             | void   |
| captureVideo           | 動画撮影を開始し、プレビューを提供する              | duration?: number            | JSX.Element |
| rotateCamera           | カメラ映像の回転（角度変更）を実施する              | angle: number                | void   |
| zoomCamera             | カメラのズーム機能を実施する                        | zoomLevel: number            | void   |
| applyCameraFilter      | 撮影映像にフィルター効果を適用する                  | filterName: string           | void   |
| applyCameraEffects     | カメラ映像にエフェクトを適用する                    | effectOptions: any           | void   |
| adjustCameraSettings   | カメラ設定（解像度、FPS等）を調整する               | settings: { resolution?: string, fps?: number }                   | void        | isCameraOn, stream  |
| applyCameraStabilization| カメラ映像の手ブレ補正を実装する                    | level?: number               | void   |
| adjustCameraExposure   | カメラの露出を動的に調整する機能を実装する       | exposureLevel: number       | void   |
| trackInteraction      | ユーザーのインタラクション情報を共通トラッキングモジュール（CommonTracking.md参照）で集約管理する | event: Event, metadata?: any | void   |

## 依存関係
React、Material-UI、ブラウザのMediaDevices API

## 事前条件
デバイスにカメラが搭載され、有効なアクセス許可が取得されていること

## 事後条件
カメラ映像が正しく表示され、ユーザー操作により撮影や停止が可能となる

## エラーハンドリング
カメラ起動失敗時はエラーメッセージを表示し、既定の画像またはプレースホルダーを表示する

## テストケース
- 正常：カメラ起動、ストリーミング、撮影が正常に行われる
- 異常：デバイス非対応またはアクセス拒否時の挙動確認

## 変更履歴
- v1.0 初回作成  
- v1.1 captureVideo関数を追加  
- v1.2 rotateCamera関数を追加  
- v1.3 zoomCamera関数を追加  
- v1.4 applyCameraFilter関数を追加  
- v1.5 applyCameraEffects関数を追加
