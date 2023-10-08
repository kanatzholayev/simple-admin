import { FC } from 'react';

import { sidebarLinks } from '../../utils/consts';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import { SidebarLinksContainerStyled, SidebarLogoStyled, SidebarWrapperStyled } from './Sidebar.styles';
import { SidebarLink } from './SidebarLink/SidebarLink';

interface SidebarProps {
	isSidebarOpen: boolean;
	setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Sidebar: FC<SidebarProps> = ({ isSidebarOpen, setIsSidebarOpen }) => (
	<SidebarWrapperStyled
		$isOpen={isSidebarOpen}
		onMouseOver={() => window.innerWidth > 425 && setIsSidebarOpen(true)}
		onMouseOut={() => window.innerWidth > 425 && setIsSidebarOpen(false)}
	>
		<SidebarLogoStyled>
			<img src='./logo.svg' alt='Logo' />
		</SidebarLogoStyled>
		<ProfileInfo />
		<SidebarLinksContainerStyled>
			{sidebarLinks.map(({ imgSrc, title }) => (
				<SidebarLink imgSrc={imgSrc} title={title} key={imgSrc} />
			))}
		</SidebarLinksContainerStyled>
	</SidebarWrapperStyled>
);
