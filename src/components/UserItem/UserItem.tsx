import { FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { User } from '../../api/contracts';
import { useModal } from '../../hooks/useModal';
import { usePopup } from '../../hooks/usePopup';
import { usersActions } from '../../store/usersSlice';
import { ChangePermissions } from './ChangePermissions/ChangePermissions';
import { UserActions } from './UserActions/UserActions';
import { UserInfo } from './UserInfo/UserInfo';
import { UserImageWrapperStyled, UserItemStyled } from './UserItem.styles';

interface UserItemProps {
	user: User;
	openDeletePopup: () => void;
}

export const UserItem: FC<UserItemProps> = ({ user, openDeletePopup }) => {
	const dispatch = useDispatch();

	const { Modal, openModal, closeModal } = useModal();

	const { PopupModal: InvitePopup, openPopup: openInvitePopup } = usePopup();

	const handleDelete = useCallback((): void => {
		dispatch(usersActions.deleteUser(user.uuid));
	}, [dispatch, user.uuid]);

	return (
		<UserItemStyled>
			<UserImageWrapperStyled>
				<img src={user.image} alt={user.name} />
			</UserImageWrapperStyled>
			<UserInfo user={user} />
			<UserActions
				openDeletePopup={openDeletePopup}
				handleDelete={handleDelete}
				openInvitePopup={openInvitePopup}
				isAuthorized={user.isAuthorized}
				openPermissionsModal={openModal}
			/>
			<InvitePopup>
				Приглашение отправлено на почту <br />
				{user.email}
			</InvitePopup>
			<Modal>
				<ChangePermissions uuid={user.uuid} permissions={user.permissions} onClose={closeModal} />
			</Modal>
		</UserItemStyled>
	);
};
