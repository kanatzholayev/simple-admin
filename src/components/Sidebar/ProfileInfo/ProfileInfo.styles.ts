import styled from 'styled-components';

import { colors } from '../../../utils/colors';
import { sizes } from '../../../utils/sizes';

export const ProfileInfoWrapperStyled = styled.div`
	display: flex;
	gap: 13px;
	left: 20px;
	margin-bottom: 25px;
	position: absolute;
	top: 85px;

	@media (max-width: ${sizes.mobile}) {
		top: 60px;
		left: 15px;
	}
`;

export const ProfileImageWrapperStyled = styled.div`
	border-radius: 50%;
	flex-basis: 60px;
	flex-shrink: 0;
	height: 60px;
	overflow: hidden;
	width: 60px;

	@media (max-width: ${sizes.mobile}) {
		height: 50px;
		flex-basis: 50px;
		width: 50px;
	}

	& img {
		height: 100%;
		object-fit: cover;
		width: 100%;
	}
`;

export const ProfileInfoStyled = styled.div`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	flex-shrink: 0;
	justify-content: center;
	opacity: 0;
	transition: opacity 0.2s ease-in-out;
`;

export const ProfileNameStyled = styled.h4`
	color: ${colors[`text-primary`]};
	font-family: 'Futura PT Demi';
	font-size: 16px;
	line-height: 20px;
	margin: 0;
`;

export const ProfilePositionStyled = styled.p`
	color: ${colors[`text-secondary`]};
	font-family: 'Futura PT Book';
	font-size: 14px;
	line-height: 20px;
	margin: 0;
`;
