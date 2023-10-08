import { FC, useEffect, useRef, useState } from 'react';

import { handleClickOutside } from '../../../utils/handleClickOutside';
import {
	UserActionsButtonStyled,
	UserActionsListStyled,
	UserActionStyled,
	UserActionsWrapperStyled,
} from './UserActions.styles';

interface UserActionsProps {
	openPermissionsModal: () => void;
	openDeletePopup: () => void;
	openInvitePopup: () => void;
	handleDelete: () => void;
	isAuthorized: boolean;
}

export const UserActions: FC<UserActionsProps> = ({
	openDeletePopup,
	handleDelete,
	openInvitePopup,
	isAuthorized,
	openPermissionsModal,
}) => {
	const userActionRef = useRef(null);
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		handleClickOutside(() => setIsOpen(false), userActionRef);
	}, [userActionRef]);

	return (
		<UserActionsWrapperStyled>
			<UserActionsButtonStyled onClick={() => setIsOpen(true)}>
				<svg width='20' height='4' viewBox='0 0 20 4' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<circle cx='2' cy='2' r='2' fill='#C1C1CB' />
					<circle cx='10' cy='2' r='2' fill='#C1C1CB' />
					<circle cx='18' cy='2' r='2' fill='#C1C1CB' />
				</svg>
			</UserActionsButtonStyled>

			{isOpen && (
				<UserActionsListStyled ref={userActionRef}>
					<li>
						<UserActionStyled
							onClick={() => {
								setIsOpen(false);
								openPermissionsModal();
							}}
						>
							Изменить права доступа
						</UserActionStyled>
					</li>
					{!isAuthorized && (
						<li>
							<UserActionStyled
								onClick={() => {
									setIsOpen(false);
									openInvitePopup();
								}}
							>
								Отправить код повторно
							</UserActionStyled>
						</li>
					)}
					<li>
						<UserActionStyled
							onClick={() => {
								setIsOpen(false);
								openDeletePopup();
								handleDelete();
							}}
						>
							Удалить
						</UserActionStyled>
					</li>
				</UserActionsListStyled>
			)}
		</UserActionsWrapperStyled>
	);
};
