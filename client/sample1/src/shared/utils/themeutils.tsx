// テーマ切替ユーティリティ
export function toggleTheme(currentTheme: string) {
    return currentTheme === 'light' ? 'dark' : 'light';
}
