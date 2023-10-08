import styled from 'styled-components';

import { colors } from '../../utils/tokens/colors';
import { sizes } from '../../utils/tokens/sizes';

export const UserItemStyled = styled.li`
	display: flex;
	gap: 11px;
	padding: 18px 30px;
	position: relative;
	transition: all 0.2s ease-in-out;

	&:hover {
		background-color: ${colors[`bg-secondary`]};
	}

	&:last-child {
		border-bottom-left-radius: 15px;
		border-bottom-right-radius: 15px;
	}

	@media (max-width: ${sizes.mobile}) {
		padding: 10px 15px;
		gap: 15px;
	}
`;

export const UserImageWrapperStyled = styled.div`
	border-radius: 50%;
	flex-basis: 64px;
	flex-shrink: 0;
	height: 64px;
	overflow: hidden;
	width: 64px;

	@media (max-width: ${sizes.mobile}) {
		width: 55px;
		height: 55px;
		flex-basis: 55px;
	}

	& img {
		height: 100%;
		object-fit: cover;
		width: 100%;
	}
`;
