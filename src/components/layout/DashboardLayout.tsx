'use client'

import React, {useState} from 'react'
import {motion} from 'framer-motion'
import {BellIcon, HomeIcon} from '@radix-ui/react-icons'
import {cn} from '../../lib/utils.ts'
import {Avatar, AvatarFallback, AvatarImage} from '../ui/avatar.tsx'
import {Sheet, SheetContent, SheetTrigger} from '../ui/sheet.tsx'
import {MenuIcon} from "lucide-react";
import FlexText from "../shared/flex-text.tsx";

const fadeIn = {
	initial: {opacity: 0, y: 20},
	animate: {opacity: 1, y: 0, transition: {duration: 0.6}},
}

const stagger = {
	animate: {
		transition: {
			staggerChildren: 0.1,
		},
	},
}

const Layout = ({children}: { children: React.ReactNode }) => {
	const [isOpen, setIsOpen] = useState(false)
	const pathname = typeof window !== 'undefined' ? window.location.pathname : ''
	const tabs = [
		{name: 'Home', icon: HomeIcon, href: '/dashboard'},
	]

	const Sidebar = () => (
		<motion.aside
			className="w-64 bg-zinc-900 bg-opacity-5 backdrop-blur-lg p-6 flex flex-col z-10 border border-gray-400 border-opacity-20 h-full"
			initial={{x: -100, opacity: 0}}
			animate={{x: 0, opacity: 1}}
			transition={{duration: 0.6}}
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
							<a
								href={tab.href}
								className={cn(
									'flex items-center w-full p-3 mb-2 rounded-md transition-colors',
									pathname === tab.href
										? 'bg-gradient-to-r from-main-one to-main-two text-white'
										: 'text-gray-400 hover:text-white hover:bg-zinc-800'
								)}
								onClick={() => setIsOpen(false)}
							>
								<tab.icon className="w-5 h-5 mr-3"/>
								{tab.name}
							</a>
						</motion.li>
					))}
				</motion.ul>
			</nav>
		</motion.aside>
	)

	const getGreeting = () => {
		const time = new Date().getHours()
		if (time < 12) return 'Good Morning'
		if (time < 18) return 'Good Afternoon'
		return 'Good Evening'
	}


	return (
		<div className="bg-black text-white min-h-screen flex relative overflow-hidden">
			<div className="absolute inset-0 bg-grid-white/[0.05] z-0 pointer-events-none">
				<div
					className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
			</div>

			{/* Desktop Sidebar */}
			<div className="hidden md:block">
				<Sidebar/>
			</div>

			{/* Mobile Sidebar */}
			<Sheet open={isOpen} onOpenChange={setIsOpen}>
				<SheetTrigger asChild>
					<button
						className="md:hidden absolute top-4 left-4 z-50 p-2 rounded-md bg-zinc-800 hover:bg-zinc-700 transition-colors border border-gray-400 border-opacity-20">
						<MenuIcon className="w-6 h-6"/>
					</button>
				</SheetTrigger>
				<SheetContent side="left" className="p-0 bg-black w-64 border-r border-gray-400 border-opacity-20">
					<Sidebar/>
				</SheetContent>
			</Sheet>

			{/* Main Content */}
			<main className="flex-1 z-10 w-full">
				<motion.div
					className="flex justify-between items-center z-10"
					variants={fadeIn}
					initial="initial"
					animate="animate"
				>
					<div
						className="p-4 bg-zinc-900 bg-opacity-15 backdrop-blur-lg flex justify-between items-center mb-4 z-10 w-full h-20 border-b border-gray-400 border-opacity-20">
						<div className={'md:flex-row gap-5 hidden md:flex'}>
							<button
								className={'p-2 rounded-md bg-zinc-800 hover:bg-zinc-700 transition-colors border border-gray-400 border-opacity-20 min-h-12 max-h-12 h-full relative'}
							>
								{getGreeting()}, <FlexText username={'Fedox'}/>.
							</button>
						</div>

						<div className="flex items-center space-x-4">
							<button
								className="p-2 rounded-md bg-zinc-800 hover:bg-zinc-700 transition-colors border border-gray-400 border-opacity-20 min-h-12 max-h-12 h-full">
								<BellIcon className="w-7 h-7"/>
								<div
									className="absolute w-3 h-3 bg-main-one rounded-full -translate-y-3 translate-x-4"/>
							</button>
							<button
								className="flex items-center space-x-2 p-2 rounded-md bg-zinc-800 hover:bg-zinc-700 transition-colors border border-gray-400 border-opacity-20 min-h-12 max-h-12">
								<Avatar>
									<AvatarImage src="https://github.com/shadcn.png"/>
									<AvatarFallback className="bg-black bg-opacity-25">CN</AvatarFallback>
								</Avatar>
								<span className="hidden sm:inline">John Doe</span>
							</button>
						</div>
					</div>
				</motion.div>

				<motion.div className={'p-8'}

							variants={fadeIn}
							initial="initial"
							animate="animate">
					{children}
				</motion.div>
			</main>
		</div>
	)
}

export default Layout