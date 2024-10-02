import 'react-toastify/dist/ReactToastify.css';
import { RouterProvider } from 'react-router-dom';
import { protectedRouter, publicRouter } from './routes/routes';
import { Provider, useSelector } from 'react-redux';
import store, { RootState } from './store';
import { ToastContainer } from 'react-toastify';
import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/themes/lara-light-indigo/theme.css'; // Theme
import 'primereact/resources/primereact.min.css'; // Core CSS
import 'primeicons/primeicons.css'; // Icons CSS
import 'react-responsive-modal/styles.css'; // Reactive Modal

const ProtectedRoutes = () => {
	const token = useSelector((state: RootState) => state.auth.token);

	if (token) {
		return <RouterProvider router={protectedRouter} />;
	}

	return <RouterProvider router={publicRouter} />;
};

const App = () => {
	return (
		<Provider store={store}>
			<ToastContainer />
			<PrimeReactProvider>
				<ProtectedRoutes />
			</PrimeReactProvider>
		</Provider>
	);
};

export default App;
