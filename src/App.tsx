import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes';
import { MantineProvider } from '@mantine/core';

const App = () => {
	return (
		<div>
			<MantineProvider>
				<RouterProvider router={router} />
			</MantineProvider>
		</div>
	);
};

export default App;
