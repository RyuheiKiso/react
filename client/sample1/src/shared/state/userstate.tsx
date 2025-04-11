// ユーザー情報状態管理
import { useState } from 'react';

export function useUserState() {
    return useState({ name: '', loggedIn: false });
}
