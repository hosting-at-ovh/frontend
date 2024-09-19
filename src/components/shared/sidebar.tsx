import {memo} from 'react';
import {motion} from 'framer-motion';
import {FaDiscord} from 'react-icons/fa';
import {HomeIcon} from "@radix-ui/react-icons";
import {CogIcon, FilesIcon, UsersIcon} from "lucide-react";
import {cn} from "../../lib/utils.ts";
import {IoDocuments} from "react-icons/io5";

const fadeIn = {
	initial: {opacity: 0, y: 20},
	animate: {opacity: 1, y: 0, transition: {duration: 0.6, ease: "easeOut"}},
	exit: {opacity: 0, y: -20, transition: {duration: 0.3, ease: "easeIn"}}
}

const stagger = {
	animate: {
		transition: {
			staggerChildren: 0.1,
		},
	},
}

const Sidebar = memo(({isStaff = false}: any) => {
	const pathname = typeof window !== 'undefined' ? window.location.pathname : '';

	const tabs = [
		{name: 'Home', icon: HomeIcon, href: '/dashboard'},
		{name: 'Embed', icon: FaDiscord, href: '/dashboard/embed'},
		{name: 'Settings', icon: CogIcon, href: '/dashboard/settings'},
	];

	const staffTabs = [
		{name: 'Reports', icon: IoDocuments, href: '/dashboard/staff/reports'},
		{name: 'Users', icon: UsersIcon, href: '/dashboard/staff/users'},
		{name: 'Files', icon: FilesIcon, href: '/dashboard/staff/files'},
	];

	return (
		<motion.aside
			className="w-64 bg-zinc-900 bg-opacity-5 backdrop-blur-lg p-6 flex flex-col z-10 border border-gray-400 border-opacity-20 h-full"
			initial={{x: -100, opacity: 0}}
			animate={{x: 0, opacity: 1}}
			transition={{duration: 0.6, type: 'spring', stiffness: 100}}
		>
			<motion.h1
				className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-main-one to-main-two mb-8 z-1"
				variants={fadeIn}
			>
				Hosting-at.OVH
			</motion.h1>
			<nav className="flex-1 z-10">
				<motion.ul className="z-10" variants={stagger} initial="initial" animate="animate">
					{tabs.map((tab) => (
						<motion.li className="z-10" key={tab.name} variants={fadeIn}>
							<motion.a
								href={tab.href}
								className={cn(
									'flex items-center w-full p-3 mb-2 rounded-md transition-all',
									pathname === tab.href
										? 'bg-gradient-to-r from-main-one to-main-two text-white'
										: 'text-gray-400 hover:text-white hover:bg-zinc-800'
								)}
								whileHover={{scale: 1.05}}
								whileTap={{scale: 0.95}}
							>
								<tab.icon className="w-5 h-5 mr-3"/>
								{tab.name}
							</motion.a>
						</motion.li>
					))}
					{isStaff && (
						<>
							<motion.li className="z-10 mt-8 font-bold text-gray-400 mb-4" variants={fadeIn}>
								Staff
							</motion.li>
							{staffTabs.map((tab) => (
								<motion.li className="z-10" key={tab.name} variants={fadeIn}>
									<motion.a
										href={tab.href}
										className={cn(
											'flex items-center w-full p-3 mb-2 rounded-md transition-all',
											pathname === tab.href
												? 'bg-gradient-to-r from-main-one to-main-two text-white'
												: 'text-gray-400 hover:text-white hover:bg-zinc-800'
										)}
										whileHover={{scale: 1.05}}
										whileTap={{scale: 0.95}}
									>
										<tab.icon className="w-5 h-5 mr-3"/>
										{tab.name}
									</motion.a>
								</motion.li>
							))}
						</>
					)}
				</motion.ul>
			</nav>
		</motion.aside>
	);
});

export default Sidebar;
