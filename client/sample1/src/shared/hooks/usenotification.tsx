// 通知用フック
import { useState } from 'react';

export function useNotification() {
    const [message, setMessage] = useState('');
    const notify = (msg: string) => setMessage(msg);
    return { message, notify };
}
