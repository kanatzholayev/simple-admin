import { FC } from 'react';

import { SidebarLinkImageStyled, SidebarLinkTitleStyled, SidebarLinkWrapperStyled } from './SidebarLink.styles';

interface SidebarLinkProps {
	imgSrc: string;
	title: string;
}

export const SidebarLink: FC<SidebarLinkProps> = ({ imgSrc, title }) => (
	<SidebarLinkWrapperStyled>
		<SidebarLinkImageStyled>
			<img src={imgSrc} alt='Sidebar Icon' />
		</SidebarLinkImageStyled>
		<SidebarLinkTitleStyled>{title}</SidebarLinkTitleStyled>
	</SidebarLinkWrapperStyled>
);
