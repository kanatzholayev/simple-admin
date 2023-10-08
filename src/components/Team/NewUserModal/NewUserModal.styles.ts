import styled from 'styled-components';

import { colors } from '../../../utils/tokens/colors';
import { sizes } from '../../../utils/tokens/sizes';

export const InviteHeaderStyled = styled.h3`
	color: ${colors[`text-primary`]};
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
	border: 1px solid ${colors.border};
	border-radius: 15px;
	color: ${colors[`text-primary`]};
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
	color: ${colors[`text-danger`]};
	font-family: 'Futura PT Book';
	font-size: 18px;
`;
