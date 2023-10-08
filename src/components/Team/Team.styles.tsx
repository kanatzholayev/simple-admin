import styled from 'styled-components';

import { sizes } from '../../utils/sizes';

export const TeamWrapperStyled = styled.div`
	background-color: #ffffff;
	border-radius: 15px;
	flex-grow: 1;
	margin: 20px 100px;

	@media (max-width: ${sizes.mobile}) {
		margin: 0;
		border-radius: 0;
	}
`;

export const TeamListStyled = styled.ul`
	display: flex;
	flex-direction: column;
	list-style: none;
	margin: 0;
	padding: 0;
`;
