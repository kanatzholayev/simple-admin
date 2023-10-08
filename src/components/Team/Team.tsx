import { FC, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import { usePopup } from '../../hooks/usePopup';
import { usersSelector } from '../../store/usersSlice';
import { UserItem } from '../UserItem/UserItem';
import { TeamListStyled, TeamWrapperStyled } from './Team.styles';
import { TeamHeader } from './TeamHeader/TeamHeader';

interface TeamProps {
	setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Team: FC<TeamProps> = ({ setIsSidebarOpen }) => {
	const { PopupModal: DeletePopup, openPopup: openDeletePopup } = usePopup();

	const [searchText, setSearchText] = useState<string>(``);

	const searchHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const lowerCase = e.target.value.toLowerCase();
		setSearchText(lowerCase);
	};

	const { users } = useSelector(usersSelector);

	const filteredUsers = useMemo(
		() =>
			users.filter(el => {
				if (searchText === ``) {
					return el;
				}

				return el.email.toLowerCase().includes(searchText);
			}),
		[searchText, users],
	);

	return (
		<TeamWrapperStyled>
			<TeamHeader searchText={searchText} searchHandler={searchHandler} setIsSidebarOpen={setIsSidebarOpen} />
			<TeamListStyled>
				{filteredUsers.map(user => (
					<UserItem user={user} key={user.uuid} openDeletePopup={openDeletePopup} />
				))}
			</TeamListStyled>
			<DeletePopup>Пользователь успешно удален</DeletePopup>
		</TeamWrapperStyled>
	);
};
