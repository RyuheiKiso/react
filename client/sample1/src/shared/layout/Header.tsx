import React from 'react';
import { getClientIp } from '../network/APIHandler';

export const initClientIp = async (): Promise<void> => {
	try {
		const ip = await getClientIp();
		console.log('Client IP initialized:', ip);
	} catch (err) {
		console.error('Failed to initialize client IP:', err);
	}
};

export const renderClientIp = (): React.ReactElement => {
	const clientIp = localStorage.getItem('clientIp');
	return <div>Client IP: {clientIp || '取得中...'}</div>;
};
