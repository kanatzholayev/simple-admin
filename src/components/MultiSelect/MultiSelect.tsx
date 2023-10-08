import { FC, useCallback, useEffect, useRef, useState } from 'react';

import { optionsList } from '../../utils/consts';
import { handleClickOutside } from '../../utils/handleClickOutside';
import {
	CheckboxStyled,
	CheckmarkStyled,
	MultiSelectWrapperStyled,
	SelectOptionLabelStyled,
	SelectOptionsListStyled,
	SelectOptionStyled,
	SelectSpanStyled,
	SelectStyled,
} from './MultiSelect.styles';

const ArrowDown: FC = () => (
	<svg width='12' height='9' viewBox='0 0 12 9' fill='none' xmlns='http://www.w3.org/2000/svg'>
		<path
			d='M1.00006 1.86407L5.86401 6.72803L10.728 1.86407'
			stroke='#C1C1CB'
			strokeWidth='2'
			strokeLinecap='round'
		/>
	</svg>
);

interface MultiSelectProps {
	setCheckedList: React.Dispatch<React.SetStateAction<string[]>>;
	checkedList: string[];
}

export const MultiSelect: FC<MultiSelectProps> = ({ setCheckedList, checkedList }) => {
	const optionsRef = useRef(null);
	const [isOpen, setIsOpen] = useState(false);

	const handleCheck = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>): void => {
			let updatedList = [...checkedList];
			if (event.target.checked) {
				updatedList = [...checkedList, event.target.value];
			} else {
				updatedList.splice(checkedList.indexOf(event.target.value), 1);
			}

			setCheckedList(updatedList);
		},
		[checkedList, setCheckedList],
	);

	const handleCheckAll = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>): void => {
			let updatedList: string[] = [];
			if (event.target.checked) {
				updatedList = [...optionsList];
			}
			setCheckedList(updatedList);
		},
		[setCheckedList],
	);

	const isChecked = useCallback(
		(value: string): boolean => checkedList.findIndex(el => el === value) !== -1,
		[checkedList],
	);

	const isCheckedAll = useCallback((): boolean => checkedList.length === optionsList.length, [checkedList.length]);

	useEffect(() => {
		handleClickOutside(() => setIsOpen(false), optionsRef);
	}, [optionsRef]);

	return (
		<MultiSelectWrapperStyled ref={optionsRef}>
			<SelectStyled onClick={() => setIsOpen(!isOpen)}>
				<SelectSpanStyled>
					{checkedList.length < 1 ? `Выберите права доступа` : checkedList.join(`, `)}
				</SelectSpanStyled>
				<ArrowDown />
			</SelectStyled>
			{isOpen && (
				<SelectOptionsListStyled>
					<SelectOptionStyled>
						<SelectOptionLabelStyled>
							Все
							<CheckboxStyled type='checkbox' onChange={handleCheckAll} checked={isCheckedAll()} />
							<CheckmarkStyled />
						</SelectOptionLabelStyled>
					</SelectOptionStyled>
					{optionsList.map(option => (
						<SelectOptionStyled key={option}>
							<SelectOptionLabelStyled>
								{option}
								<CheckboxStyled
									type='checkbox'
									value={option}
									checked={isChecked(option)}
									onChange={handleCheck}
								/>
								<CheckmarkStyled />
							</SelectOptionLabelStyled>
						</SelectOptionStyled>
					))}
				</SelectOptionsListStyled>
			)}
		</MultiSelectWrapperStyled>
	);
};
