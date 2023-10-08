/* eslint-disable import/no-cycle */
import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User } from '../api/contracts';
import { RootState } from './ReduxProvider';

export interface NewUser {
	email: string;
	permissions: string[];
}

interface ChangePermissions {
	permissions: string[];
	uuid: string;
}

interface UsersStore {
	users: User[];
}

const initialState: UsersStore = {
	users: [],
};

export const usersSlice = createSlice({
	name: `users`,
	initialState,
	reducers: {
		setUsers: (state, action: PayloadAction<User[]>) => {
			state.users = action.payload;
		},
		deleteUser: (state, action: PayloadAction<string>) => {
			state.users = state.users.filter(user => user.uuid !== action.payload);
		},
		addUser: (state, action: PayloadAction<NewUser>) => {
			const newUser: User = {
				uuid: crypto.randomUUID(),
				name: `Пользователь`,
				email: action.payload.email,
				isAuthorized: false,
				permissions: action.payload.permissions,
				image: `./profileMock.svg`,
			};
			state.users = [...state.users, newUser];
		},
		changePermissions: (state, action: PayloadAction<ChangePermissions>) => {
			const index = state.users.findIndex(user => user.uuid === action.payload.uuid);
			const changedUser: User = {
				...state.users[index],
				permissions: action.payload.permissions,
			};

			state.users = [...state.users.slice(0, index), changedUser, ...state.users.slice(index + 1)];
		},
	},
});

export const { actions: usersActions } = usersSlice;

export const usersSelector = createSelector(
	(state: RootState): UsersStore => state.users,
	users => users,
);
