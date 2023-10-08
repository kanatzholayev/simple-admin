import { FC } from 'react';

import { User } from '../../../api/contracts';
import {
	UserEmailStyled,
	UserInfoContainerStyled,
	UserInfoWrapperStyled,
	UserNameStyled,
	UserPermissionStyled,
	UserPermissionWrapperStyled,
	UserUnauthorizedStyled,
} from './UserInfo.styles';

interface UserInfoProps {
	user: User;
}

export const UserInfo: FC<UserInfoProps> = ({ user }) => (
	<UserInfoContainerStyled>
		<UserInfoWrapperStyled>
			<UserNameStyled>{user.name}</UserNameStyled>
			{!user.isAuthorized && <UserUnauthorizedStyled>Не авторизирован</UserUnauthorizedStyled>}
			<UserEmailStyled>{user.email}</UserEmailStyled>
		</UserInfoWrapperStyled>
		<UserPermissionWrapperStyled>
			{user.permissions.map(permission => (
				<UserPermissionStyled key={permission} $isAdmin={permission === `Администратор`}>
					{permission}
				</UserPermissionStyled>
			))}
		</UserPermissionWrapperStyled>
	</UserInfoContainerStyled>
);
