import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import productReducer from './slices/productSlice';
import type { UserState } from './slices/userSlice'; // UserState 型をインポート
import type { ProductState } from './slices/productSlice'; // ProductState 型をインポート

export interface RootState {
	user: UserState;
	product: ProductState;
}

const PERSISTED_STATE_KEY = 'reduxState';

const loadState = () => {
	try {
		const serializedState = localStorage.getItem(PERSISTED_STATE_KEY);
		return serializedState ? JSON.parse(serializedState) : undefined;
	} catch (err) {
		console.error('Failed to load state:', err);
		return undefined;
	}
};

const saveState = (state: any) => {
	try {
		const serializedState = JSON.stringify(state);
		localStorage.setItem(PERSISTED_STATE_KEY, serializedState);
	} catch (err) {
		console.error('Failed to save state:', err);
	}
};

const rootReducer = combineReducers({
	user: userReducer,
	product: productReducer,
});

export const store = configureStore({
	reducer: rootReducer, // combineReducers を使用
	preloadedState: loadState(),
});

store.subscribe(() => {
	saveState(store.getState());
});

export type AppDispatch = typeof store.dispatch;

export const persistState = (storageKey: string = PERSISTED_STATE_KEY): void => {
	try {
		const state = store.getState();
		localStorage.setItem(storageKey, JSON.stringify(state));
	} catch (err) {
		console.error('Failed to persist state:', err);
	}
};

export const reloadStore = (): void => {
	try {
		const persistedState = loadState();
		if (persistedState) {
			store.dispatch({ type: 'RELOAD_STATE', payload: persistedState });
		}
	} catch (err) {
		console.error('Failed to reload store:', err);
	}
};

export const resetStore = (): void => {
	try {
		store.dispatch({ type: 'RESET_STATE' });
		localStorage.removeItem(PERSISTED_STATE_KEY);
		console.log('Store has been reset to initial state.');
	} catch (err) {
		console.error('Failed to reset store:', err);
		throw new Error('ストアのリセットに失敗しました');
	}
};

export const syncPersistentStore = (currentState: any, persistentState: any): void => {
	try {
		Object.assign(currentState, persistentState);
		console.log('Persistent store synchronized successfully.');
	} catch (err) {
		console.error('Failed to synchronize persistent store:', err);
		throw new Error('永続ストアの同期に失敗しました');
	}
};
