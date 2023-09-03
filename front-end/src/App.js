import React from 'react';
import { Provider } from 'react-redux'; // Import the Provider
import Navigation from './routes';
import store from './store'; // Import your Redux store

const App = () => {
	return (
		<Provider store={store}>
			<Navigation />
		</Provider>
	);
};

export default App;