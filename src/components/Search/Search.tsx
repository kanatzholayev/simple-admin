import { FC } from 'react';

import { SearchButtonStyled, SearchInputStyled, SearchWrapperStyled } from './Search.styles';

export interface SearchProps {
	searchHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
	searchText: string;
}

export const Search: FC<SearchProps> = ({ searchHandler, searchText }) => (
	<SearchWrapperStyled>
		<SearchInputStyled placeholder='Поиск по Email' value={searchText} onChange={searchHandler} />
		<SearchButtonStyled>
			<svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M11.4603 10.3188L15.7643 14.6227C15.9155 14.7741 16.0005 14.9793 16.0004 15.1933C16.0003 15.4074 15.9152 15.6126 15.7639 15.7639C15.6125 15.9151 15.4072 16.0001 15.1932 16C14.9792 15.9999 14.774 15.9148 14.6227 15.7635L10.3188 11.4595C9.03217 12.4561 7.41426 12.925 5.79417 12.771C4.17409 12.617 2.67352 11.8516 1.59775 10.6305C0.52197 9.40935 -0.048211 7.82428 0.00319699 6.1977C0.054605 4.57112 0.72374 3.02522 1.87448 1.87448C3.02522 0.72374 4.57112 0.054605 6.1977 0.00319699C7.82428 -0.048211 9.40935 0.52197 10.6305 1.59775C11.8516 2.67352 12.617 4.17409 12.771 5.79417C12.925 7.41426 12.4569 9.03217 11.4603 10.3188ZM6.40046 11.1996C7.67347 11.1996 8.89434 10.6939 9.7945 9.7937C10.6947 8.89354 11.2004 7.67267 11.2004 6.39966C11.2004 5.12665 10.6947 3.90577 9.7945 3.00562C8.89434 2.10546 7.67347 1.59976 6.40046 1.59976C5.12745 1.59976 3.90657 2.10546 3.00642 3.00562C2.10626 3.90577 1.60056 5.12665 1.60056 6.39966C1.60056 7.67267 2.10626 8.89354 3.00642 9.7937C3.90657 10.6939 5.12745 11.1996 6.40046 11.1996Z'
					fill='#9494A0'
				/>
			</svg>
		</SearchButtonStyled>
	</SearchWrapperStyled>
);
