export const trackInteraction = (event: Event, metadata?: any): void => {
	// イベント情報をログに出力
	console.log('Tracking Event:', event.type, metadata);
	// 送信失敗時はログ出力のみ行い、UI影響を抑制
	fetch('https://tracking.example.com', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ event: event.type, metadata }),
	}).catch(err => {
		console.error('Failed to send tracking data:', err);
	});
};
