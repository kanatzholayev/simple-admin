import { FC } from 'react';

import {
	ProfileImageWrapperStyled,
	ProfileInfoStyled,
	ProfileInfoWrapperStyled,
	ProfileNameStyled,
	ProfilePositionStyled,
} from './ProfileInfo.styles';

export const ProfileInfo: FC = () => (
	<ProfileInfoWrapperStyled>
		<ProfileImageWrapperStyled>
			<img src='./public/profile.png' alt='profile' />
		</ProfileImageWrapperStyled>
		<ProfileInfoStyled>
			<ProfileNameStyled>Артем Иванов</ProfileNameStyled>
			<ProfilePositionStyled>Собственник</ProfilePositionStyled>
		</ProfileInfoStyled>
	</ProfileInfoWrapperStyled>
);
