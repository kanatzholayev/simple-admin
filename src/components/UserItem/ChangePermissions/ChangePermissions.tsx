import { FC, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import { usersActions } from '../../../store/usersSlice';
import { Button } from '../../Button/Button';
import { MultiSelect } from '../../MultiSelect/MultiSelect';
import { InviteHeaderStyled } from '../../Team/NewUserModal/NewUserModal.styles';
import { PermissionsModalWrapperStyled } from './ChangePermissions.styles';

interface ChangePermissionsProps {
	uuid: string;
	permissions: string[];
	onClose: () => void;
}

export const ChangePermissions: FC<ChangePermissionsProps> = ({ uuid, permissions, onClose }) => {
	const dispatch = useDispatch();

	const [checkedList, setCheckedList] = useState<string[]>(permissions);

	const handleSubmit = useCallback((): void => {
		dispatch(usersActions.changePermissions({ uuid, permissions: checkedList }));
		onClose();
	}, [checkedList, onClose, dispatch, uuid]);

	return (
		<PermissionsModalWrapperStyled>
			<InviteHeaderStyled>Изменить права доступа</InviteHeaderStyled>
			<MultiSelect checkedList={checkedList} setCheckedList={setCheckedList} />
			<Button size='big' onClick={handleSubmit}>
				Сохранить
			</Button>
		</PermissionsModalWrapperStyled>
	);
};
