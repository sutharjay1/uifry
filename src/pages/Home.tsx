import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/ui/ThemeProvider';
import { HiArrowLongRight } from 'react-icons/hi2';
import {
	PiBell,
	PiCubeTransparentLight,
	PiPlayCircleLight,
	PiStarFour,
} from 'react-icons/pi';
import { FaApple, FaArchive } from 'react-icons/fa';
import { MdStarPurple500 } from 'react-icons/md';
import { TbHexagon3D } from 'react-icons/tb';
import { useRef } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const HeroOne = ({ theme }: { theme: string }) => {
	return (
		<div className="mx-auto flex flex-col lg:flex-row relative w-full">
			<div className="max-w-7xl mx-auto	px-3 py-6 flex flex-col lg:flex-row items-center justify-between">
				<div className="w-full h-auto	relative	">
					<motion.h1
						className="w-full mt-8 text-3xl font-bold tracking-tight md:text-4xl lg:text-7xl capitalize"
						initial={{ opacity: 0, x: -80 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
					>
						Make the best financial decisions
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, x: -80 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
						className={`${
							theme === 'dark' ? 'text-zinc-100' : 'text-zinc-900'
						} text-lg mt-5`}
					>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Consequatur modi blanditiis dolores quasi eaque
						explicabo!
					</motion.p>
					<div className="flex flex-col 	 items-start justify-start gap-4 my-5">
						<motion.div
							className="flex flex-row  gap-4 "
							initial={{ opacity: 0, x: -80 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5 }}
						>
							<Button
								className={`text-base font-normal rounded-sm py-6 md:py-6 px-4 md:px-9 ${
									theme === 'dark'
										? 'bg-white text-black hover:bg-white/95'
										: 'bg-black text-white hover:bg-black/95'
								}`}
							>
								<span className="flex items-center justify-center gap-2">
									Get Started <HiArrowLongRight size={30} />
								</span>
							</Button>
							<Button
								className={`text-base font-normal rounded-sm py-6 md:py-6 px-4 md:px-9 ${
									theme === 'dark'
										? 'bg-transparent hover:bg-transparent text-white'
										: 'bg-transparent hover:bg-transparent text-black'
								}`}
							>
								<span className="flex items-center justify-center gap-2">
									<PiPlayCircleLight
										color={
											theme === 'dark' ? 'white' : 'black'
										}
										size={30}
									/>
									Watch Video
								</span>
							</Button>
						</motion.div>

						<div className="w-full ">
							<img
								src="https://res.cloudinary.com/di4uqe4to/image/upload/v1717771648/oqurvjyewjyzlerccest.svg"
								alt="Decorative strip"
								className="w-full"
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full lg:w-[45%] h-auto 	flex items-start justify-start">
				<motion.img
					className="object-cover max-w-full md:max-w-none h-auto"
					src="https://res.cloudinary.com/di4uqe4to/image/upload/v1717771649/u2ayok9un6cwk89so0hw.svg"
					alt="Illustrative graphic"
					initial={{ opacity: 0, y: 200 }}
					animate={{ opacity: 1, y: -20 }}
					transition={{ duration: 0.5 }}
				/>
			</div>
		</div>
	);
};
const HeroTwo = ({ theme }: { theme: string }) => {
	const featureOptions = [
		{
			icon: (
				<PiStarFour
					size={30}
					color="#FF5555"
				/>
			),
			title: 'Budgeting Intervals',
			description:
				'Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.',
		},
		{
			icon: (
				<TbHexagon3D
					size={30}
					color="#FF5555"
				/>
			),
			title: 'Budgeting Intervals',
			description:
				'Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.',
		},
		{
			icon: (
				<PiCubeTransparentLight
					size={30}
					color="#FF5555"
				/>
			),
			title: 'Budgeting Intervals',
			description:
				'Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.',
		},
	];

	return (
		<div className="mx-auto flex flex-col lg:flex-row relative w-full">
			<div className="w-full h-auto hidden md:flex items-start justify-start">
				<motion.img
					className="object-cover max-w-full md:max-w-none h-auto"
					src="https://res.cloudinary.com/di4uqe4to/image/upload/v1717771649/toniyocmyrfptl62ljwx.svg"
					alt="Illustrative graphic"
					initial={{ opacity: 0, y: 200 }}
					animate={{ opacity: 1, y: -20 }}
					transition={{ duration: 0.5 }}
				/>
				<div className="w-full h-full flex-1 px-3 py-6 flex flex-col items-center justify-center">
					<motion.div
						className="w-full flex items-start justify-start flex-col mb-4"
						initial={{ opacity: 0, x: -80 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
					>
						<span className="uppercase text-primary font-normal text-2xl">
							Featured
						</span>
						<span className="w-full capitalize font-extrabold text-6xl">
							{' '}
							uifry premium
						</span>
					</motion.div>
					<div className="w-full flex-col items-start justify-start space-y-6">
						{featureOptions.map((feature, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, x: -80 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.5 }}
							>
								<div className="w-full gap-4 flex items-center justify-start mb-1">
									<span className="text-black">
										{feature.icon}
									</span>
									<span className="text-xl font-semibold">
										{feature.title}
									</span>
								</div>
								<div className="mb-8">
									<span
										className={`${
											theme === 'dark'
												? 'text-zinc-100'
												: 'text-zinc-900'
										} text-lg`}
									>
										{feature.description}
									</span>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

const HeroThree = ({ theme }: { theme: string }) => {
	return (
		<div className="mx-auto flex flex-col lg:flex-row relative w-full">
			<div className="max-w-7xl mx-auto	px-3 py-6 flex flex-col lg:flex-row items-center justify-between">
				<div className="w-full h-auto	relative	">
					<motion.div
						className="w-full flex items-start justify-start flex-col"
						initial={{ opacity: 0, x: -80 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
					>
						<span className="uppercase text-primary font-normal text-lg md:text-2xl">
							advantages
						</span>
						<span className="w-full capitalize font-extrabold text-3xl md:text-6xl">
							{' '}
							why choose Uifry?
						</span>
					</motion.div>
					<div className="w-full flex-col items-start justify-start space-y-9 		">
						<motion.div
							initial={{ opacity: 0, x: -80 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5 }}
							className="w-full gap-4 flex flex-col items-center justify-start py-6"
						>
							<div className="w-full gap-4 flex items-center justify-start mb-1">
								<span className="text-black">
									<PiBell
										size={45}
										className="bg-primary text-white rounded-full p-2 flex items-center justify-center"
									/>
								</span>
								<span className="text-xl font-semibold capitalize">
									clever notifications
								</span>
							</div>
							<div className="mb-8">
								<span
									className={`${
										theme === 'dark'
											? 'text-zinc-100'
											: 'text-zinc-900'
									} text-lg`}
								>
									Arcu at dictum sapien, mollis. Vulputate sit
									id accumsan, ultricies. In ultrices
									malesuada elit mauris etiam odio. Duis
									tristique lacus, et blandit viverra nisl
									velit. Sed mattis rhoncus, diam suspendisse
									sit nunc, gravida eu. Lectus eget eget ac
									dolor neque lorem sapien, suspendisse
									aliquam.
								</span>
							</div>
						</motion.div>
					</div>
				</div>
			</div>
			<div className="w-full lg:w-[45%] h-auto 	flex items-start justify-start">
				<motion.img
					className="object-cover max-w-full md:max-w-none h-auto"
					src="https://ik.imagekit.io/1o3zbcknw/asset3.svg?updatedAt=1717772708932"
					alt="Illustrative graphic"
					initial={{ opacity: 0, y: 200 }}
					animate={{ opacity: 1, y: -20 }}
					transition={{ duration: 0.5 }}
				/>
			</div>
		</div>
	);
};

const HeroFour = ({ theme }: { theme: string }) => {
	return (
		<div className="mx-auto flex flex-col lg:flex-row relative w-full">
			<div className="w-full h-auto hidden md:flex items-start justify-start">
				<motion.img
					className="object-cover max-w-full md:max-w-none h-auto"
					src="https://res.cloudinary.com/di4uqe4to/image/upload/v1717771721/smnplmwqzxbdnznputla.svg"
					alt="Illustrative graphic"
					initial={{ opacity: 0, y: 200 }}
					animate={{ opacity: 1, y: -20 }}
					transition={{ duration: 0.5 }}
				/>
				<div className="w-full h-full flex-1 px-3 py-6 flex flex-col items-center justify-center">
					<div className="w-full flex-col items-center justify-center space-y-9 		">
						<motion.div
							initial={{ opacity: 0, x: -80 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5 }}
							className="w-full gap-4 flex flex-col items-center justify-start py-6"
						>
							<div className="w-full gap-4 flex items-center justify-start mb-1">
								<span className="text-black">
									<PiStarFour
										size={45}
										className="bg-primary text-white rounded-full p-2 flex items-center justify-center"
									/>
								</span>
								<span className="text-xl font-semibold capitalize">
									fully customizable
								</span>
							</div>
							<div className="mb-8">
								<span
									className={`${
										theme === 'dark'
											? 'text-zinc-100'
											: 'text-zinc-900'
									} text-lg`}
								>
									Arcu at dictum sapien, mollis. Vulputate sit
									id accumsan, ultricies. In ultrices
									malesuada elit mauris etiam odio. Duis
									tristique lacus, et blandit viverra nisl
									velit. Sed mattis rhoncus, diam suspendisse
									sit nunc, gravida eu. Lectus eget eget ac
									dolor neque lorem sapien, suspendisse
									aliquam.
								</span>
							</div>
						</motion.div>
					</div>
				</div>
			</div>
		</div>
	);
};
const HeroFive = ({ theme }: { theme: string }) => {
	return (
		<div className="mx-auto flex flex-col relative w-full">
			<div className="w-full h-auto flex flex-col items-center justify-center mb-3">
				<span className="uppercase text-base md:text-xl font-medium">
					testimonial
				</span>
				<span className="w-full md:w-[35%] capitalize text-3xl md:text-5xl font-extrabold text-center">
					what our users say about us?
				</span>
			</div>
			<div className="w-full h-auto hidden md:flex items-start justify-start">
				<motion.img
					className="object-cover max-w-full md:max-w-none h-auto"
					src="https://res.cloudinary.com/di4uqe4to/image/upload/v1717771721/rs1pr5c4mug09ejdszx6.svg"
					alt="Illustrative graphic"
					initial={{ opacity: 0, y: 200 }}
					animate={{ opacity: 1, y: -20 }}
					transition={{ duration: 0.5 }}
				/>
				<div className="w-full h-full flex-1 px-3 py-6 flex flex-col items-center justify-center">
					<div className="w-full flex-col items-center justify-center space-y-1		">
						<motion.div
							initial={{ opacity: 0, x: -80 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5 }}
							className="w-full gap-4 flex flex-col items-center justify-start py-1	"
						>
							<div className="w-full gap-4 flex items-center justify-start ">
								<span
									className={`text-3xl font-bold capitalize `}
								>
									the best financial accounting app ever!
								</span>
							</div>
							<div className="mb-2">
								<span
									className={`${
										theme === 'dark'
											? 'text-zinc-100'
											: 'text-zinc-900'
									} text-lg`}
								>
									“Arcu at dictum sapien, mollis. Vulputate
									sit id accumsan, ultricies. In ultrices
									malesuada elit mauris etiam odio. Duis
									tristique lacus, et blandit viverra nisl
									velit. Sed mattis rhoncus, diam suspendisse
									sit nunc, gravida eu. Lectus eget eget ac
									dolor neque lorem sapien, suspendisse
									aliquam.”
								</span>
							</div>
						</motion.div>
					</div>
					<div className="w-full space-y-2">
						<div className="w-full flex items-center justify-start gap-3">
							<Avatar>
								<AvatarImage src="https://i.pravatar.cc" />
								<AvatarFallback>CN</AvatarFallback>
							</Avatar>
							<Avatar className="opacity-50">
								<AvatarImage src="https://i.pravatar.cc" />
								<AvatarFallback>CN</AvatarFallback>
							</Avatar>
							<Avatar className="opacity-50">
								<AvatarImage src="https://i.pravatar.cc" />
								<AvatarFallback>CN</AvatarFallback>
							</Avatar>
							<Avatar className="opacity-50">
								<AvatarImage src="https://i.pravatar.cc" />
								<AvatarFallback>CN</AvatarFallback>
							</Avatar>
						</div>
						<div>
							<span className="text-2xl font-semibold capitalize">
								nick jonas
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const HeroSix = ({ theme }: { theme: string }) => {
	const Info = [
		{
			title: 'the best financial accounting app ever!',
			description:
				'Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl',
			bg: 'bg-primary',
		},
		{
			title: 'the best financial accounting app ever!',
			description:
				'Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl',
		},
		{
			title: 'the best financial accounting app ever!',
			description:
				'Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl',
		},
		{
			title: 'the best financial accounting app ever!',
			description:
				'Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl',
			bg: 'bg-primary',
		},
		{
			title: 'the best financial accounting app ever!',
			description:
				'Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl',
			bg: 'bg-primary',
		},
		{
			title: 'the best financial accounting app ever!',
			description:
				'Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl',
		},
	];

	const Box = ({
		title,
		description,
		bg,
	}: {
		title: string;
		description: string;
		bg?: string;
	}) => {
		return (
			<motion.div
				className={`w-full flex flex-col items-center justify-start rounded-lg ${bg} p-6 gap-3`}
				initial={{ opacity: 0, x: -80 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.5 }}
			>
				<span
					className={`text-2xl md:text-3xl font-semibold capitalize ${
						bg && 'text-white'
					}`}
				>
					{title}
				</span>
				<span className={`text-base md:text-lg ${bg && 'text-white'}`}>
					{description}
				</span>
			</motion.div>
		);
	};

	return (
		<div className="mx-auto flex flex-col relative w-full px-3">
			<div className="w-full flex items-start justify-start flex-col mb-4">
				<span className="uppercase text-primary font-normal text-lg md:text-2xl">
					FAQ
				</span>
				<span className="w-full md:w-1/2 capitalize font-extrabold text-2xl md:text-6xl">
					{' '}
					Frequently asked questions
				</span>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				{Info.map((info) => (
					<Box
						key={info.title}
						title={info.title}
						description={info.description}
						bg={info?.bg}
					/>
				))}
			</div>
		</div>
	);
};

const HeroSeven = ({ theme }: { theme: string }) => {
	return (
		<div className="w-full flex flex-col items-center justify-center py-16 px-3">
			<div className="relative w-full flex flex-col items-center justify-center">
				<img
					src="https://res.cloudinary.com/di4uqe4to/image/upload/v1717771734/d8ltmh5amzd5sigli6gc.svg	"
					alt="hero"
					width="100%"
					className="rounded-md hidden md:flex"
				/>
				<div className="mx-10 md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 w-full flex flex-col items-start justify-start md:px-4 gap-1 ">
					<span className="text-base md:text-5xl font-semibold capitalize text-black md:text-white">
						ready to get started?
					</span>
					<span className="w-full md:w-[45%] text-base md:text-lg  capitalize text-black md:text-white">
						Risus habitant leo egestas mauris diam eget morbi tempus
						vulputate.
					</span>
					<Button className="mt-4 text-sm sm:text-lg lg:text-lg  font-semibold rounded-sm py-7 px-9 bg-black md:bg-white text-white md:text-black hover:bg-white/95">
						<span className="flex items-center justify-center gap-2">
							Download App <FaApple size={25} />
						</span>
					</Button>
				</div>
			</div>
		</div>
	);
};

const Home = () => {
	const { theme } = useTheme();

	return (
		<div className="max-w-7xl mx-auto relative w-full h-full">
			<HeroOne theme={theme} />
			<HeroTwo theme={theme} />
			<HeroThree theme={theme} />
			<HeroFour theme={theme} />
			<HeroFive theme={theme} />
			<HeroSix theme={theme} />
			<HeroSeven theme={theme} />
			<Footer />
		</div>
	);
};

export default Home;
