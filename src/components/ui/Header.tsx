import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';
import { CgMenuGridO } from 'react-icons/cg';
import { FcCloseUpMode } from 'react-icons/fc';
import { IoClose } from 'react-icons/io5';
import { BiChevronRight } from 'react-icons/bi';
import { colorTheme } from './../../../constant/colorTheme';
import { Button } from './button';
import { useTheme } from './ThemeProvider';
import ToggleButton from './toggleTheme';

const Header = () => {
	const pathname = useLocation();

	const { theme } = useTheme();

	const menuOptions = [
		{
			title: 'Home',
			path: '/',
		},
		{
			title: 'About Us',
			path: '/about-us',
		},

		{
			title: 'Pricing',
			path: '/pricing',
		},
		{
			title: 'Feature',
			path: '/feature',
		},
	];

	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	useEffect(() => {
		setIsMenuOpen(false);
	}, [pathname]);

	return (
		<div className="relative w-full z-20  ">
			<div
				className={` w-full flex items-center justify-center py-4 px-4 z-20 backdrop-blur-5xl shadow-lg `}
			>
				<div className="max-w-7xl w-full flex  items-center justify-between">
					<div className="flex flex-row space-x-9 text-xl font-semibold tracking-wide select-none">
						<Link to={'/'}>
							{theme === 'dark' ? (
								<img
									src="https://res.cloudinary.com/di4uqe4to/image/upload/v1717771735/asipcq2qkw3d75pnkwho.svg"
									alt="logo"
									className="max-w-28	"
								/>
							) : (
								<img
									src="https://res.cloudinary.com/di4uqe4to/image/upload/v1717771737/mjtk04xuzkcb3hizhzk9.svg"
									alt="logo"
									className="w-28	"
								/>
							)}
						</Link>
						<div className="hidden lg:flex items-center justify-center gap-6">
							{menuOptions.map((option) => (
								<Link
									to={option.path}
									key={option.path}
								>
									<span
										className={`text-lg  ${
											option.path === pathname.pathname
												? `text-primary  font-bold`
												: `text-[${
														theme === 'dark'
															? 'white'
															: 'black'
												  }] font-medium`
										}`}
									>
										{option.title}
									</span>
								</Link>
							))}
						</div>
					</div>
					<div className="hidden lg:flex items-center justify-center gap-12">
						<ToggleButton />
						<Button
							className={`text-base font-normal rounded-sm py-6 px-9 ${
								theme === 'dark'
									? 'bg-white text-black hover:bg-white/95'
									: 'bg-black text-white hover:bg-black/95'
							}  `}
						>
							Download
						</Button>
					</div>

					<div className="flex	 lg:hidden items-center justify-center gap-12">
						<span onClick={handleMenu}>
							<CgMenuGridO size={32} />
						</span>
					</div>
				</div>
			</div>
			{isMenuOpen && (
				<div className="absolute inset-x-0 md:w-1/2 md:left-1/2 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
					<div className="divide-y-2 divide-gray-50 rounded-lg  backdrop-blur-xl shadow-lg ring-1 ring-black ring-opacity-5">
						<div className="px-5 pb-6 pt-5">
							<div className="flex items-center justify-between">
								<div className="inline-flex items-center space-x-2">
									<Link to={'/'}>
										{theme === 'dark' ? (
											<img
												src="../../../public/logo-dark.svg"
												alt="logo"
												className="max-w-28	"
											/>
										) : (
											<img
												src="../../../public/logo-light.svg"
												alt="logo"
												className="w-28	"
											/>
										)}
									</Link>
								</div>
								<div className="-mr-2 space-x-2	">
									<ToggleButton />
									<Button
										onClick={handleMenu}
										variant="default"
										className="px-2 md:px-3"
									>
										<span className="sr-only">
											Close menu
										</span>
										<IoClose size={28} />
									</Button>
								</div>
							</div>
							<div className="mt-6">
								<nav className="grid gap-y-4">
									{menuOptions.map((option) => (
										<Link
											to={option.path}
											key={option.path}
											className={`-m-3 flex items-center rounded-md p-3 text-sm font-semibold  ${
												option.path ===
												pathname.pathname
													? `text-primary underline underline-offset-8 font-bold`
													: `text-zinc-700`
											}`}
										>
											<span className="ml-3 text-base font-medium text-gray-900">
												{option.title}
											</span>
											<span>
												<BiChevronRight className="ml-3 h-4 w-4" />
											</span>
										</Link>
									))}
								</nav>
							</div>
							<div className="mt-3 space-y-2">
								<div className="space-y-1 w-full">
									<Link to={'/'}>
										<button
											type="button"
											className="w-full rounded-sm bg-primary px-3 py-[0.5rem] text-sm font-semibold text-black shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
										>
											Download
										</button>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Header;
