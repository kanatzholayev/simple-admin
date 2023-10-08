import { FC, useState } from 'react';

import { useModal } from '../../../hooks/useModal';
import { usePopup } from '../../../hooks/usePopup';
import { Button } from '../../Button/Button';
import { Search } from '../../Search/Search';
import { NewUserModal } from '../NewUserModal/NewUserModal';
import {
	BurgerWrapperStyled,
	TeamControlsWrapperStyled,
	TeamHeaderContainerStyled,
	TeamHeaderStyled,
	TitleStyled,
} from './TeamHeader.styles';

export interface TeamHeaderProps {
	setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
	searchHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
	searchText: string;
}

export const TeamHeader: FC<TeamHeaderProps> = ({ setIsSidebarOpen, searchHandler, searchText }) => {
	const [invitedUserEmail, setInvitedUserEmail] = useState(``);

	const { Modal, openModal, closeModal } = useModal();

	const { PopupModal: InvitePopup, openPopup: openInvitePopup } = usePopup();

	return (
		<TeamHeaderContainerStyled>
			<TeamHeaderStyled>
				<BurgerWrapperStyled onClick={() => setIsSidebarOpen(true)}>
					<svg width='20' height='14' viewBox='0 0 20 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<rect width='20' height='2' fill='#9494A0' />
						<rect y='6' width='20' height='2' fill='#9494A0' />
						<rect y='12' width='20' height='2' fill='#9494A0' />
					</svg>
				</BurgerWrapperStyled>
				<TitleStyled>Команда</TitleStyled>
			</TeamHeaderStyled>
			<TeamControlsWrapperStyled>
				<Search searchText={searchText} searchHandler={searchHandler} />
				<Button onClick={openModal}>Добавить пользователя</Button>
			</TeamControlsWrapperStyled>
			<Modal>
				<NewUserModal
					openInvitePopup={openInvitePopup}
					closeModal={closeModal}
					setInvitedUserEmail={setInvitedUserEmail}
				/>
			</Modal>
			<InvitePopup>
				Приглашение отправлено на почту <br />
				{invitedUserEmail}
			</InvitePopup>
		</TeamHeaderContainerStyled>
	);
};
