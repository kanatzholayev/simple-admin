import { FC, ReactNode } from 'react';

import { ButtonSize, ButtonStyled } from './Button.styles';

interface ButtonProps {
	children: ReactNode;
	size?: ButtonSize;
	onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({ children, size = `small`, onClick }) => (
	<ButtonStyled size={size} onClick={onClick}>
		{children}
	</ButtonStyled>
);
