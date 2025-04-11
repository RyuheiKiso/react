// テーマ（外観）状態管理
import { useState } from 'react';

export function useThemeState() {
    return useState('light');
}
