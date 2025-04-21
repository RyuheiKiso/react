// ユーザーのインタラクションをトラッキングする関数
// event：トラッキング対象のイベントオブジェクト
// metadata：追加のメタデータ（任意）
export const trackInteraction = (event: Event, metadata?: any): void => {
	// イベント情報をログに出力
	console.log('Tracking Event:', event.type, metadata);
	// トラッキングデータをサーバーに送信
	fetch('https://tracking.example.com', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ event: event.type, metadata }),
	})
		// 送信失敗時はエラーログを出力
		.catch(err => {
			console.error('Failed to send tracking data:', err);
		});
};
