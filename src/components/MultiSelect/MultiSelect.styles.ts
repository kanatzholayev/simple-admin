import styled from 'styled-components';

import { colors } from '../../utils/tokens/colors';
import { sizes } from '../../utils/tokens/sizes';

export const MultiSelectWrapperStyled = styled.div`
	position: relative;
`;

export const SelectSpanStyled = styled.span`
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 1;
	display: -webkit-box;
	overflow: hidden;
	text-overflow: ellipsis;
`;

export const SelectStyled = styled.button`
	background: transparent;
	border: 1px solid ${colors.border};
	border-radius: 15px;
	color: ${colors[`text-secondary`]};
	font-family: 'Futura PT Book';
	font-size: 20px;
	height: 61px;
	line-height: 20px;
	padding: 0 60px 0 20px;
	position: relative;
	text-align: left;
	width: 100%;

	&:focus {
		outline: none;
	}

	& svg {
		position: absolute;
		right: 27px;
		top: 50%;
		transform: translateY(-50%);
	}

	@media (max-width: ${sizes.mobile}) {
		font-size: 16px;
		border-radius: 10px;
		height: 36px;
		padding: 0 13px;

		& svg {
			right: 13px;
		}
	}
`;

export const SelectOptionsListStyled = styled.ul`
	background: ${colors[`bg-modal`]};
	border-radius: 15px;
	bottom: 0;
	box-shadow: -30px 30px 50px rgba(28, 28, 30, 0.1);
	display: flex;
	flex-direction: column;
	gap: 20px;
	left: 0;
	list-style: none;
	margin: 0;
	padding: 22px;
	position: absolute;
	transform: translateY(100%);
	width: 100%;
`;

export const SelectOptionStyled = styled.li`
	align-items: center;
	display: flex;
	height: 12px;
	margin: 0;
	padding: 0;
`;

export const CheckmarkStyled = styled.span`
	border: 1px solid ${colors.border};
	border-radius: 5px;
	height: 16px;
	left: 0;
	position: absolute;
	top: 2px;
	transition: all 0.2s ease-in-out;
	width: 16px;

	&::after {
		border: solid white;
		border-width: 0 2px 2px 0;
		content: '';
		height: 7px;
		left: 37%;
		opacity: 0;
		position: absolute;

		top: 17%;
		transform: rotate(45deg);
		transition: all 0.2s ease-in-out;
		width: 3px;
	}
`;

export const CheckboxStyled = styled.input`
	cursor: pointer;
	height: 0;
	opacity: 0;
	position: absolute;
	width: 0;
`;

export const SelectOptionLabelStyled = styled.label`
	color: ${colors[`text-primary`]};
	cursor: pointer;
	display: block;
	font-family: 'Futura PT Book';
	font-size: 16px;
	line-height: 20px;
	padding-left: 25px;
	position: relative;
	user-select: none;

	& ${CheckboxStyled}:checked ~ ${CheckmarkStyled} {
		background-color: ${colors[`purple-100`]};
		border: 1px solid ${colors[`purple-100`]};
	}
	& ${CheckboxStyled}:checked ~ ${CheckmarkStyled}::after {
		opacity: 1;
	}
`;
