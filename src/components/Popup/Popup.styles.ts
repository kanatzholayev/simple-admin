import styled from 'styled-components';

import { sizes } from '../../utils/sizes';

export const PopupOverlayStyled = styled.div`
	align-items: center;
	background-color: rgba(0, 0, 0, 0.1);
	display: flex;
	height: 100vh;
	justify-content: center;
	left: 0;
	position: fixed;
	top: 0;
	width: 100vw;
	z-index: 999;
`;

export const PopupStyled = styled.div`
	align-items: center;
	background-color: #f9fafb;
	border-radius: 25px;
	display: flex;
	flex-direction: column;
	max-width: 526px;
	padding: 40px 60px;
	text-align: center;

	@media (max-width: ${sizes.mobile}) {
		width: 90%;
		padding: 30px 40px;
		border-radius: 15px;
	}

	& * {
		width: 100%;
	}
`;

export const PopupTextStyled = styled.h3`
	color: #424f5e;
	font-family: 'Futura PT Demi';
	font-size: 22px;
	line-height: 120%;
	margin: 0 0 17px;

	@media (max-width: ${sizes.mobile}) {
		font-size: 18px;
	}
`;
