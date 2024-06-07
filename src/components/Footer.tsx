import { Link } from 'react-router-dom';
import { useTheme } from './ui/ThemeProvider';
import { IoMail, IoPhoneLandscape } from 'react-icons/io5';
import { FaPhone } from 'react-icons/fa6';
import { DiAngularSimple } from 'react-icons/di';

const Footer = () => {
	const { theme } = useTheme();

	const NewLetterButton = () => {
		return (
			<div className="relative w-full">
				<button
					className="absolute right-1 top-1 z-10 select-none rounded bg-zinc-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-zinc-900/20 transition-all hover:shadow-lg hover:shadow-zinc-900/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
					type="button"
					data-ripple-light="true"
				>
					Subscribe
				</button>
				<input
					type="email"
					className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-zinc-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
					placeholder=" "
					required
				/>
				<label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-sm font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500">
					Your Email
				</label>
			</div>
		);
	};

	const menu = [
		{
			title: 'Links',
			parts: [
				{
					title: 'Home',
					path: '/',
				},
				{
					title: 'About Us',
					path: '/about-us',
				},
				{
					title: 'Bookings',
					path: '/bookings',
				},
				{
					title: 'Blog',
					path: '/blog',
				},
			],
		},
		{
			title: 'Legal',
			parts: [
				{
					title: 'Terms of Use',
					path: '/terms-of-use',
				},
				{
					title: 'Privacy Policy',
					path: '/privacy-policy',
				},
				{
					title: 'Cookie Policy',
					path: '/cookie-policy',
				},
			],
		},
		{
			title: 'Product',
			parts: [
				{
					title: 'Take Tour',
					path: '/take-tour',
				},
				{
					title: 'Live Chat',
					path: '/live-chat',
				},
				{
					title: 'Reviews',
					path: '/reviews',
				},
			],
		},
		{
			title: 'Newsletter',
			parts: [
				{
					title: 'Stay up to date',
					path: '/stay-up-to-date',
				},
			],
			button: <NewLetterButton />,
		},
	];

	return (
		<section className="relative overflow-hidden py-10">
			<div className="relative z-10 mx-auto max-w-7xl px-4">
				<div className="-m-6 flex flex-wrap">
					<div className="w-full p-6 md:w-1/2 lg:w-5/12">
						<div className="flex h-full flex-col justify-between">
							<div className="mb-4 inline-flex flex-col items-start gap-2">
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
								<span className="font-medium flex items-center justify-center gap-2 capitalize">
									{' '}
									<IoMail size={20} /> help@frybix.com
								</span>
								<span className="font-medium flex items-center justify-center gap-2 capitalize">
									{' '}
									<FaPhone size={20} /> +123 456 789
								</span>
							</div>
						</div>
					</div>
					<div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
						{menu.map((item, index) => (
							// <div className="w-full p-6 md:w-1/2 lg:w-4/12  ">
							<div
								className="h-full"
								key={index}
							>
								<h3
									className={`tracking-px mb-9 text-xs font-semibold uppercase ${
										theme === 'dark'
											? 'text-zinc-100'
											: 'text-zinc-900'
									}`}
								>
									{item.title}
								</h3>
								<ul>
									{item.parts.map((part, partIndex) => (
										<li
											className="mb-4"
											key={partIndex}
										>
											<Link
												className={`text-base font-medium ${
													theme === 'dark'
														? 'text-zinc-100 hover:text-zinc-200'
														: 'text-zinc-900 hover:text-zinc-700'
												}`}
												to={part.path}
											>
												{part.title}
											</Link>
										</li>
									))}
								</ul>
								<span>{item.button}</span>
							</div>
							// 	</div>
						))}
					</div>
				</div>
			</div>
			<hr className="my-4" />
			<div className="w-full flex items-center justify-center">
				<span> Copyright 2022 uifry.com all rights reserved</span>
			</div>
		</section>
	);
};

export default Footer;
