import styled from 'styled-components';

import { sizes } from '../../../utils/sizes';

export const UserInfoContainerStyled = styled.div`
	display: flex;
	flex-direction: column;
	padding-top: 5px;

	@media (max-width: ${sizes.mobile}) {
		padding-top: 0;
	}
`;

export const UserInfoWrapperStyled = styled.div`
	align-items: end;
	display: flex;
	margin-bottom: 9px;

	@media (max-width: ${sizes.mobile}) {
		flex-direction: column;
		align-items: start;
		margin-bottom: 4px;
	}
`;

export const UserNameStyled = styled.h3`
	color: #424f5e;
	font-family: 'Futura PT Demi';
	font-size: 18px;
	line-height: 20px;
	margin: 0 11px 0 0;

	@media (max-width: ${sizes.mobile}) {
		font-size: 14px;
	}
`;

export const UserUnauthorizedStyled = styled.span`
	color: #9494a0;
	font-family: 'Futura PT Demi';
	font-size: 18px;
	line-height: 20px;
	margin: 0 11px 0 0;

	@media (max-width: ${sizes.mobile}) {
		font-size: 14px;
	}
`;

export const UserEmailStyled = styled.p`
	color: #9494a0;
	font-family: 'Futura PT Book';
	font-size: 18px;
	line-height: 20px;
	margin: 0;

	@media (max-width: ${sizes.mobile}) {
		font-size: 14px;
	}
`;

export const UserPermissionWrapperStyled = styled.ul`
	display: flex;
	flex-wrap: wrap;
	gap: 5px;
	list-style: none;
	margin: 0;
	padding: 0;

	@media (max-width: ${sizes.mobile}) {
		gap: 3px;
	}
`;

interface UserPermissionStyledProps {
	$isAdmin: boolean;
}

export const UserPermissionStyled = styled.li<UserPermissionStyledProps>`
	align-items: center;
	border: 1px solid ${p => (p.$isAdmin ? `#5A57FF` : `#c1c1cb`)};
	border-radius: 10px;
	color: ${p => (p.$isAdmin ? `#5A57FF` : `#9494a0`)};
	display: flex;
	font-family: 'Futura PT Book';
	font-size: 16px;
	height: 30px;
	justify-content: center;
	line-height: 20px;
	padding: 0 10px;

	@media (max-width: ${sizes.mobile}) {
		font-size: 12px;
		line-height: 12px;
		padding: 0 6px;
		height: 22px;
		border-radius: 5px;
	}
`;
