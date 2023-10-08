import { FC, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import { apiService } from '../../api/apiService';
import { User } from '../../api/contracts';
import { usersActions } from '../../store/usersSlice';
import { handleClickOutside } from '../../utils/handleClickOutside';
import { Sidebar } from '../Sidebar/Sidebar';
import { Team } from '../Team/Team';
import { MainStyled } from './Main.styles';

export const Main: FC = () => {
	const dispatch = useDispatch();

	const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
	const sidebarRef = useRef(null);

	useEffect(() => {
		(async () => {
			try {
				const response = (await apiService.getUsers()) as User[];
				dispatch(usersActions.setUsers(response));
			} catch (e) {
				console.error(e);
			}
		})();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		handleClickOutside(() => setIsSidebarOpen(false), sidebarRef);
	}, [setIsSidebarOpen, sidebarRef]);

	return (
		<MainStyled>
			<div ref={sidebarRef}>
				<Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
			</div>
			<Team setIsSidebarOpen={setIsSidebarOpen} />
		</MainStyled>
	);
};
