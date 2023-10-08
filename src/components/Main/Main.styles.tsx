import styled from 'styled-components';

import { sizes } from '../../utils/sizes';

export const MainStyled = styled.main`
	display: flex;
	justify-content: center;
	padding-left: 105px;

	@media (max-width: ${sizes.mobile}) {
		padding-left: 0;
	}
`;
