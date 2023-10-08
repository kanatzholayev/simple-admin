import styled from 'styled-components';

import { colors } from '../../../utils/tokens/colors';
import { sizes } from '../../../utils/tokens/sizes';

export const TeamHeaderContainerStyled = styled.div`
	align-items: center;
	display: flex;
	padding: 15px 29px;

	@media (max-width: ${sizes.mobile}) {
		flex-direction: column;
		justify-content: start;
		align-items: start;
		padding: 29px 15px;
	}
`;

export const TitleStyled = styled.h1`
	color: ${colors[`text-primary`]};
	font-family: 'Futura PT Demi';
	font-size: 26px;
	line-height: 44px;
	margin: 0;
`;

export const TeamControlsWrapperStyled = styled.div`
	display: flex;
	flex: 1;
	gap: 10px;

	@media (max-width: ${sizes.mobile}) {
		flex-direction: column;
		width: 100%;
	}
`;

export const BurgerWrapperStyled = styled.button`
	background: transparent;
	border: 0;
	cursor: pointer;
	display: none;
	padding: 0;

	@media (max-width: ${sizes.mobile}) {
		display: block;
	}
`;

export const TeamHeaderStyled = styled.div`
	display: flex;
	flex-basis: 200px;
	gap: 13px;

	@media (max-width: ${sizes.mobile}) {
		flex-basis: auto;
	}
`;
