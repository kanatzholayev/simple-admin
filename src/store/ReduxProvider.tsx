/* eslint-disable import/no-cycle */

import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import {
	AnyAction,
	combineReducers,
	configureStore,
	EmptyObject,
	MiddlewareArray,
	PreloadedState,
	ThunkMiddleware,
} from '@reduxjs/toolkit';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';

import { usersSlice } from './usersSlice';

const rootReducer = combineReducers({
	[usersSlice.name]: usersSlice.reducer,
});

export const setupStore = (
	preloadedState?: PreloadedState<RootState>,
): ToolkitStore<EmptyObject, AnyAction, MiddlewareArray<[ThunkMiddleware<EmptyObject, AnyAction>]>> =>
	configureStore({
		reducer: rootReducer,
		middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }),
		preloadedState,
	});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type Dispatch = AppStore['dispatch'];

interface Props {
	children: ReactNode;
	preloadedState?: PreloadedState<RootState>;
	store?: AppStore;
}

export const ReduxProvider: FC<Props> = ({ children, preloadedState, store = setupStore(preloadedState) }) => (
	<Provider store={store}>{children}</Provider>
);
