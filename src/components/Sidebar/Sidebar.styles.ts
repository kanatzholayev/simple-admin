import styled, { css } from 'styled-components';

import { colors } from '../../utils/colors';
import { sizes } from '../../utils/sizes';
import { ProfileInfoStyled } from './ProfileInfo/ProfileInfo.styles';
import { SidebarLinkTitleStyled } from './SidebarLink/SidebarLink.styles';

interface SidebarWrapperStyledProps {
	$isOpen: boolean;
}

export const SidebarLogoStyled = styled.div`
	left: 39px;
	position: absolute;
	top: 25px;

	@media (max-width: ${sizes.mobile}) {
		display: none;
	}
`;

export const SidebarLinksContainerStyled = styled.div`
	left: 38px;
	position: absolute;
	top: 171px;

	@media (max-width: ${sizes.mobile}) {
		left: 15px;
		top: 130px;
	}
`;

export const SidebarWrapperStyled = styled.aside<SidebarWrapperStyledProps>`
	background-color: ${colors[`bg-white`]};
	border-top-right-radius: 15px;
	box-shadow: 0 0 50px rgba(28, 28, 30, 0.2);
	height: 100vh;
	left: 0;
	margin: 0;
	overflow: hidden;
	padding: 20px;
	position: fixed;
	top: 0;
	transition: all 0.2s ease-in-out;

	z-index: 99;

	${p =>
		p.$isOpen
			? css`
					width: 250px;
					& ${SidebarLinkTitleStyled}, & ${ProfileInfoStyled} {
						opacity: 1;
					}
					@media (max-width: ${sizes.mobile}) {
						transform: translateX(0);
					}
			  `
			: css`
					width: 100px;

					@media (max-width: ${sizes.mobile}) {
						transform: translateX(-100%);
					}
			  `}

	@media (max-width: ${sizes.mobile}) {
		border-top-right-radius: 0px;
	}
`;
