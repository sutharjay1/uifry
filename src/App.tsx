import React, { useEffect, useState } from 'react';
import {
	BrowserRouter,
	Routes,
	Route,
	Navigate,
	useNavigate,
} from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Pricing from './pages/Pricing';
import Feature from './pages/Feature';
import Header from './components/ui/Header';
import { ThemeProvider, useTheme } from './components/ui/ThemeProvider';
import Footer from './components/Footer';

const App = () => {
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setTheme('system');
	}, [setTheme]);

	return (
		<ThemeProvider
			defaultTheme={theme}
			storageKey="vite-ui-theme"
		>
			<BrowserRouter>
				<div className="w-full h-screen flex flex-col items-start justify-start overflow-y-auto">
					<Header />
					<div className="bgRust w-full h-screen mx-auto flex  items-center justify-center  overflow-y-auto">
						<AppRouter />
					</div>
				</div>
			</BrowserRouter>
		</ThemeProvider>
	);
};

const AppRouter = () => {
	return (
		<Routes>
			<Route
				path="/"
				element={<Home />}
			/>
			<Route
				path="/about-us"
				element={<AboutUs />}
			/>
			<Route
				path="/pricing"
				element={<Pricing />}
			/>
			<Route
				path={`/feature`}
				element={<Feature />}
			/>
		</Routes>
	);
};

export default App;
