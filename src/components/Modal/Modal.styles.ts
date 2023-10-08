import styled from 'styled-components';

import { sizes } from '../../utils/sizes';

export const ModalOverlayStyled = styled.div`
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

export const ModalStyled = styled.div`
	align-items: center;
	background-color: #f9fafb;
	border-radius: 25px;
	display: flex;
	flex-direction: column;
	max-width: 526px;
	padding: 60px;
	position: relative;
	text-align: center;

	@media (max-width: ${sizes.mobile}) {
		width: 90%;
		padding: 30px 40px;
		border-radius: 15px;
	}
`;

export const ModalCloseButtonStyled = styled.button`
	align-items: center;
	background-color: #ebebf0;
	border: none;
	border-radius: 15px;
	cursor: pointer;
	display: flex;
	height: 40px;
	justify-content: center;
	padding: 0;
	position: absolute;
	right: 20px;
	top: 26px;
	width: 40px;
`;
