import styled from 'styled-components';

import { sizes } from '../../../utils/sizes';

export const InviteHeaderStyled = styled.h3`
	color: #424f5e;
	font-family: 'Futura PT Demi';
	font-size: 34px;
	line-height: 44px;
	margin: 0 0 10px;
	text-align: center;

	@media (max-width: ${sizes.mobile}) {
		font-size: 28px;
		line-height: 34px;
	}
`;

export const InviteWrapperStyled = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
`;

export const InputStyled = styled.input`
	background: transparent;
	border: 1px solid #c1c1cb;
	border-radius: 15px;
	color: #424f5e;
	font-family: 'Futura PT Book';
	font-size: 20px;
	height: 61px;
	line-height: 20px;
	padding: 0 20px;

	&:focus {
		outline: none;
	}

	@media (max-width: ${sizes.mobile}) {
		font-size: 16px;
		border-radius: 10px;
		height: 36px;
		padding: 0 13px;
	}
`;

export const ErrorStyled = styled.span`
	color: red;
	font-family: 'Futura PT Book';
	font-size: 18px;
`;
