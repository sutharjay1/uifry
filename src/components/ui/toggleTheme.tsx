import { IoIosMoon, IoIosSunny } from 'react-icons/io';
import { Button } from './button';
import { useTheme } from './ThemeProvider';

const ToggleButton = () => {
	const { theme, setTheme } = useTheme();

	const toggleTheme = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	return (
		<Button
			onClick={toggleTheme}
			variant="outline"
			className="px-2 md:px-3"
		>
			{theme === 'dark' ? (
				<IoIosSunny size={25} />
			) : (
				<IoIosMoon size={25} />
			)}
		</Button>
	);
};

export default ToggleButton;
