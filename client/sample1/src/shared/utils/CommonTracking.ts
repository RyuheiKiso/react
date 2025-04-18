export const trackInteraction = (event: Event, metadata?: any): void => {
	try {
		console.log('Tracking Event:', event.type, metadata);
		fetch('https://tracking.example.com', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ event: event.type, metadata }),
		}).catch((err) => {
			console.error('Failed to send tracking data:', err);
			throw new Error('トラッキングデータの送信に失敗しました');
		});
	} catch (err) {
		console.error('Failed to track interaction:', err);
		throw new Error('トラッキング処理に失敗しました');
	}
};
