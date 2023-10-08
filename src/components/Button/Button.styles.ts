import styled, { css } from 'styled-components';

import { sizes } from '../../utils/sizes';

export type ButtonSize = 'small' | 'big';

interface ButtonStyledProps {
	size: ButtonSize;
}

export const ButtonStyled = styled.button<ButtonStyledProps>`
	background-color: #32c076;
	border: none;
	color: #f9fafb;
	cursor: pointer;
	font-family: 'Futura PT';
	font-weight: 500;
	line-height: 20px;
	padding: 0 20px;

	${p => {
		if (p.size === `big`) {
			return css`
				border-radius: 15px;
				font-size: 20px;
				height: 61px;

				@media (max-width: ${sizes.mobile}) {
					height: 50px;
					font-size: 18px;
					border-radius: 12px;
				}
			`;
		}

		return css`
			border-radius: 10px;
			font-size: 18px;
			height: 36px;

			@media (max-width: ${sizes.mobile}) {
				height: 30px;
				font-size: 16px;
				border-radius: 8px;
			}
		`;
	}};
`;
