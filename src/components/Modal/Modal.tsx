import { FC, ReactNode, useEffect, useRef } from 'react';

import { handleClickOutside } from '../../utils/handleClickOutside';
import { ModalCloseButtonStyled, ModalOverlayStyled, ModalStyled } from './Modal.styles';

interface ModalProps {
	children: ReactNode;
	isActive: boolean;
	onClose: () => void;
}

export const Modal: FC<ModalProps> = ({ isActive, children, onClose }) => {
	const modalRef = useRef(null);

	useEffect(() => {
		handleClickOutside(() => onClose(), modalRef);
	}, [onClose, modalRef]);

	return (
		isActive && (
			<ModalOverlayStyled>
				<ModalStyled ref={modalRef}>
					{children}
					<ModalCloseButtonStyled onClick={onClose}>
						<svg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
							<path
								fillRule='evenodd'
								clipRule='evenodd'
								d='M8.04771 6.95779L13.2984 12.2085C13.6889 12.599 13.6889 13.2322 13.2984 13.6227C12.9079 14.0132 12.2747 14.0132 11.8842 13.6227L6.79565 8.53416L1.70711 13.6227C1.31658 14.0132 0.683418 14.0132 0.292893 13.6227C-0.097631 13.2322 -0.0976313 12.599 0.292893 12.2085L5.54358 6.95779L0.292893 1.70711C-0.0976313 1.31658 -0.097631 0.683418 0.292893 0.292893C0.683418 -0.097631 1.31658 -0.0976313 1.70711 0.292893L6.79565 5.38143L11.8842 0.292893C12.2747 -0.0976313 12.9079 -0.097631 13.2984 0.292893C13.6889 0.683418 13.6889 1.31658 13.2984 1.70711L8.04771 6.95779Z'
								fill='#C1C1CB'
							/>
						</svg>
					</ModalCloseButtonStyled>
				</ModalStyled>
			</ModalOverlayStyled>
		)
	);
};
