import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
	// UserState の定義
	userId: string | null;
	username: string;
	isAuthenticated: boolean;
	status?: string;
	role?: string;
	email?: string;
	lastLogin?: Date;
	lastActiveTimestamp?: Date;
	avatarUrl?: string;
}

const initialState: UserState = {
	userId: null,
	username: '',
	isAuthenticated: false,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		login(state, action: PayloadAction<{ userId: string; username: string }>) {
			state.userId = action.payload.userId;
			state.username = action.payload.username;
			state.isAuthenticated = true;
		},
		logout(state) {
			state.userId = null;
			state.username = '';
			state.isAuthenticated = false;
		},
		updateUserProfile(state, action: PayloadAction<Partial<UserState>>) {
			Object.assign(state, action.payload);
		},
		updateUserStatus(state, action: PayloadAction<string>) {
			state.status = action.payload;
		},
		updateUserRole(state, action: PayloadAction<string>) {
			state.role = action.payload;
		},
		updateUserEmail(state, action: PayloadAction<string>) {
			state.email = action.payload;
		},
		updateLastLogin(state, action: PayloadAction<Date>) {
			state.lastLogin = action.payload;
		},
		updateUserLastActiveTimestamp(state, action: PayloadAction<Date>) {
			state.lastActiveTimestamp = action.payload;
		},
		updateUserAvatar(state, action: PayloadAction<string>) {
			state.avatarUrl = action.payload;
		},
	},
});

// ユーティリティ関数として移動
export const exportUserData = (state: UserState): string => {
	return JSON.stringify(state);
};

export const validateUserSession = (token: string): boolean => {
	// トークンの有効性を検証する仮実装
	return token === 'valid-token';
};

export const {
	login,
	logout,
	updateUserProfile,
	updateUserStatus,
	updateUserRole,
	updateUserEmail,
	updateLastLogin,
	updateUserLastActiveTimestamp,
	updateUserAvatar,
} = userSlice.actions;
export default userSlice.reducer;
