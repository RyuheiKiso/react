// アプリ全体の状態管理
import { useState } from 'react';

export function useGlobalState() {
    return useState(null);
}
