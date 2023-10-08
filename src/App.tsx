import { FC } from 'react';

import { Main } from './components/Main/Main';
import { ReduxProvider } from './store/ReduxProvider';

export const App: FC = () => (
	<ReduxProvider>
		<Main />
	</ReduxProvider>
);
