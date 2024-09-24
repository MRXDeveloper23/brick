import 'react-toastify/dist/ReactToastify.css';
import { RouterProvider } from 'react-router-dom';
import { protectedRouter, publicRouter } from './routes/routes';
import { MantineProvider } from '@mantine/core';
import { Provider, useSelector } from 'react-redux';
import store, { IRootState } from './store';
import { ToastContainer } from 'react-toastify';

const ProtectedRoutes = () => {
	const { token } = useSelector((s: IRootState) => s.auth);

	if (token) return <RouterProvider router={protectedRouter} />;

	return <RouterProvider router={publicRouter} />;
};

const App = () => {
	return (
		<Provider store={store}>
			<ToastContainer />
			<MantineProvider>
				<ProtectedRoutes />
			</MantineProvider>
		</Provider>
	);
};

export default App;
