import styled from 'styled-components';

import { sizes } from '../../utils/sizes';

export const SearchWrapperStyled = styled.div`
	flex-grow: 1;
	position: relative;
`;

export const SearchInputStyled = styled.input`
	background: transparent;
	border: 1px #c1c1cb solid;
	border-radius: 10px;
	color: #424f5e;
	font-family: 'Futura PT Book';
	font-size: 18px;
	height: 36px;
	line-height: 20px;
	padding: 0 13px;
	width: 100%;

	&:focus {
		outline: none;
	}

	@media (max-width: ${sizes.mobile}) {
		font-size: 16px;
	}
`;

export const SearchButtonStyled = styled.button`
	align-items: center;
	background: transparent;
	border: 0;
	cursor: pointer;
	display: flex;
	height: 36px;
	justify-content: center;
	margin: 0;
	padding: 0;
	position: absolute;
	right: 0;
	top: 0;
	width: 36px;
`;
