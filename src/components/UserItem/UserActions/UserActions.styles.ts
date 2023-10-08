import styled from 'styled-components';

import { sizes } from '../../../utils/sizes';

export const UserActionsButtonStyled = styled.button`
	background: transparent;
	border: none;
	cursor: pointer;
	height: 20px;
	padding: 0;
	width: 20px;
`;

export const UserActionsWrapperStyled = styled.div`
	position: absolute;
	right: 29px;
	top: 14px;

	@media (max-width: ${sizes.mobile}) {
		top: 6px;
		right: 15px;
	}
`;

export const UserActionsListStyled = styled.ul`
	align-items: start;
	background-color: #f9fafb;
	border-radius: 15px;
	box-shadow: -30px 30px 50px rgba(28, 28, 30, 0.1);
	display: flex;
	flex-direction: column;
	left: 0;
	list-style: none;
	margin: 0;
	padding: 22px 26px;
	position: absolute;
	top: 0;
	transform: translateX(calc(-100% + 20px));
	width: 240px;
	z-index: 2;

	& li:not(:last-child) {
		margin: 0 0 17px;
	}

	& li {
		text-align: left;
		width: 100%;
	}

	@media (max-width: ${sizes.mobile}) {
		padding: 20px;
		width: 210px;
	}
`;

export const UserActionStyled = styled.button`
	background: transparent;
	border: 0;
	color: #424f5e;
	cursor: pointer;
	font-family: 'Futura PT Book';
	font-size: 18px;
	line-height: 20px;
	padding: 0;
	text-align: left;
	transition: all 0.2s ease-in-out;
	width: 100%;

	&:hover {
		color: #9494a0;
	}

	@media (max-width: ${sizes.mobile}) {
		font-size: 16px;
	}
`;
