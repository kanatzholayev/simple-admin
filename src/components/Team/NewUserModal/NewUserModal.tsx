import { FC, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import { usersActions } from '../../../store/usersSlice';
import { Button } from '../../Button/Button';
import { MultiSelect } from '../../MultiSelect/MultiSelect';
import { ErrorStyled, InputStyled, InviteHeaderStyled, InviteWrapperStyled } from './NewUserModal.styles';

interface NewUserModalProps {
	openInvitePopup: () => void;
	closeModal: () => void;
	setInvitedUserEmail: React.Dispatch<React.SetStateAction<string>>;
}

export const NewUserModal: FC<NewUserModalProps> = ({ openInvitePopup, closeModal, setInvitedUserEmail }) => {
	const dispatch = useDispatch();

	const [newUserEmail, setNewUserEmail] = useState<string>(``);
	const [checkedList, setCheckedList] = useState<string[]>([]);
	const [error, setError] = useState<boolean>(false);

	const handleSubmit = useCallback((): void => {
		if (newUserEmail !== `` && /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(newUserEmail)) {
			dispatch(usersActions.addUser({ email: newUserEmail, permissions: checkedList }));
			setInvitedUserEmail(newUserEmail);
			setNewUserEmail(``);
			setError(false);
			closeModal();
			openInvitePopup();
		} else {
			setError(true);
		}
	}, [checkedList, closeModal, dispatch, newUserEmail, openInvitePopup, setInvitedUserEmail]);

	return (
		<InviteWrapperStyled>
			<InviteHeaderStyled>Отправьте приглашение</InviteHeaderStyled>
			<InputStyled placeholder='Email' onChange={e => setNewUserEmail(e.target.value)} value={newUserEmail} />
			<MultiSelect checkedList={checkedList} setCheckedList={setCheckedList} />
			{error && <ErrorStyled>Неправильный e-mail</ErrorStyled>}
			<Button size='big' onClick={handleSubmit}>
				Отправить приглашение
			</Button>
		</InviteWrapperStyled>
	);
};
