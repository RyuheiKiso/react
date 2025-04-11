// 認証関連ロジック
export function authenticate(user: string, password: string) {
    return user === 'admin' && password === 'password';
}
