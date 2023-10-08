import { FC, ReactNode, useState } from 'react';

import { Modal as ModalComponent } from '../components/Modal/Modal';

interface ModalProps {
	children: ReactNode;
}

interface ModalResult {
	openModal: () => void;
	closeModal: () => void;
	Modal: FC<ModalProps>;
}

export const useModal = (): ModalResult => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const openModal = (): void => setIsOpen(true);

	const closeModal = (): void => setIsOpen(false);

	const Modal: FC<ModalProps> = ({ children }) => (
		<ModalComponent isActive={isOpen} onClose={closeModal}>
			{children}
		</ModalComponent>
	);

	return {
		openModal,
		closeModal,
		Modal,
	};
};
