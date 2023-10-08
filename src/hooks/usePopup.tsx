import { FC, ReactNode, useState } from 'react';

import { Popup } from '../components/Popup/Popup';

interface PopupModalProps {
	children: ReactNode;
}

interface PopupResult {
	openPopup: () => void;
	PopupModal: FC<PopupModalProps>;
}

export const usePopup = (handleClose?: () => void): PopupResult => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const openPopup = (): void => setIsOpen(true);

	const handleCloseClick = (): void => {
		setIsOpen(false);
		if (handleClose) {
			handleClose();
		}
	};

	const PopupModal: FC<PopupModalProps> = ({ children }) => (
		<Popup isActive={isOpen} onClose={() => handleCloseClick()}>
			{children}
		</Popup>
	);

	return {
		openPopup,
		PopupModal,
	};
};
