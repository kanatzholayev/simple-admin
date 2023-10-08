import styled from 'styled-components';

import { colors } from '../../../utils/colors';
import { sizes } from '../../../utils/sizes';

export const SidebarLinkImageStyled = styled.div`
	height: 25px;
	width: 25px;

	& img {
		height: 100%;
		object-fit: cover;
		width: 100%;
	}
`;

export const SidebarLinkTitleStyled = styled.p`
	color: ${colors[`text-secondary`]};
	font-family: 'Futura PT';
	font-size: 16px;
	font-weight: 500;
	line-height: 20px;
	margin: 0;
	opacity: 0;
	transition: opacity 0.2s ease-in-out;
`;

export const SidebarLinkWrapperStyled = styled.div`
	align-items: center;
	cursor: pointer;
	display: flex;
	gap: 17px;

	&:not(:last-child) {
		margin-bottom: 34px;
	}
	@media (max-width: ${sizes.mobile}) {
		&:not(:last-child) {
			margin-bottom: 26px;
		}
	}

	&:last-child ${SidebarLinkTitleStyled} {
		color: ${colors[`text-danger`]};
	}
`;
