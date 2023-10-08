import { FC, ReactNode, useEffect, useRef } from 'react';

import { handleClickOutside } from '../../utils/handleClickOutside';
import { Button } from '../Button/Button';
import { PopupOverlayStyled, PopupStyled, PopupTextStyled } from './Popup.styles';

interface PopupProps {
	children: ReactNode;
	isActive: boolean;
	onClose: () => void;
}

export const Popup: FC<PopupProps> = ({ isActive, children, onClose }) => {
	const popupRef = useRef(null);

	useEffect(() => {
		handleClickOutside(() => onClose(), popupRef);
	}, [onClose, popupRef]);

	return (
		isActive && (
			<PopupOverlayStyled>
				<PopupStyled ref={popupRef}>
					<PopupTextStyled>{children}</PopupTextStyled>
					<Button size='big' onClick={onClose}>
						Закрыть
					</Button>
				</PopupStyled>
			</PopupOverlayStyled>
		)
	);
};
