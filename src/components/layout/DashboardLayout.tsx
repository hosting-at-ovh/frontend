'use client'

import React, {useState} from 'react'
import {AnimatePresence, motion} from 'framer-motion'
import {BellIcon} from '@radix-ui/react-icons'
import {Avatar, AvatarFallback, AvatarImage} from '../ui/avatar'
import {Sheet, SheetContent, SheetTrigger} from '../ui/sheet'
import {MenuIcon} from "lucide-react"
import FlexText from "../shared/flex-text"
import Sidebar from "../shared/sidebar.tsx";

const fadeIn = {
	initial: {opacity: 0, y: 20},
	animate: {opacity: 1, y: 0, transition: {duration: 0.6, ease: "easeOut"}},
	exit: {opacity: 0, y: -20, transition: {duration: 0.3, ease: "easeIn"}}
}

const Layout = ({children}: { children: React.ReactNode }) => {
	const [isOpen, setIsOpen] = useState(false)

	const getGreeting = () => {
		const time = new Date().getHours()
		if (time < 12) return 'Good Morning'
		if (time < 18) return 'Good Afternoon'
		return 'Good Evening'
	}

	return (
		<div className="bg-black text-white min-h-screen flex relative overflow-hidden">
			<motion.div
				className="absolute inset-0 bg-grid-white/[0.05] z-0 pointer-events-none"
				initial={{opacity: 0}}
				animate={{opacity: 1}}
				transition={{duration: 1}}
			>
				<div
					className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
			</motion.div>

			{/* Desktop Sidebar */}
			<div className="hidden md:block">
				<Sidebar isStaff={true}/>
			</div>

			{/* Mobile Sidebar */}
			<Sheet open={isOpen} onOpenChange={setIsOpen}>
				<SheetTrigger asChild>
					<motion.button
						className="md:hidden absolute top-4 left-4 z-50 p-2 rounded-md bg-zinc-800 hover:bg-zinc-700 transition-colors border border-gray-400 border-opacity-20"
						whileHover={{scale: 1.1}}
						whileTap={{scale: 0.9}}
					>
						<MenuIcon className="w-6 h-6"/>
					</motion.button>
				</SheetTrigger>
				<SheetContent side="left" className="p-0 bg-black w-64 border-r border-gray-400 border-opacity-20">
					<Sidebar isStaff={true}/>
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
						<AnimatePresence mode="wait">
							<motion.div
								key={getGreeting()}
								className={'md:flex-row gap-5 hidden md:flex'}
								initial={{opacity: 0, y: 20}}
								animate={{opacity: 1, y: 0}}
								exit={{opacity: 0, y: -20}}
								transition={{duration: 0.5}}
							>
								<motion.button
									className={'p-2 rounded-md bg-zinc-800 bg-opacity-20 transition-colors border border-gray-400 border-opacity-20 min-h-12 max-h-12 h-full relative'}
									whileHover={{scale: 1.05}}
									whileTap={{scale: 0.95}}
								>
									{getGreeting()}, <FlexText username={'Fedox'}/>.
								</motion.button>
							</motion.div>
						</AnimatePresence>

						<div className="flex items-center space-x-4">
							<motion.button
								className="p-2 rounded-md bg-zinc-800 bg-opacity-20 hover:bg-zinc-800 transition-colors border border-gray-400 border-opacity-20 min-h-12 max-h-12 h-full relative"
								whileHover={{scale: 1.1}}
								whileTap={{scale: 0.9}}
							>
								<BellIcon className="w-7 h-7"/>
								<div
									className="absolute w-3 h-3 bg-main-one drama-2 drama-main-one rounded-full -translate-y-2 translate-x-4"
								/>
							</motion.button>
							<motion.button
								className="flex items-center space-x-2 p-2 rounded-md bg-zinc-800 hover:bg-zinc-800 bg-opacity-20 transition-colors border border-gray-400 border-opacity-20 min-h-12 max-h-12"
								whileHover={{scale: 1.05}}
								whileTap={{scale: 0.95}}
							>
								<Avatar>
									<AvatarImage src="https://github.com/shadcn.png"/>
									<AvatarFallback className="bg-black bg-opacity-25">CN</AvatarFallback>
								</Avatar>
								<span className="hidden sm:inline">John Doe</span>
							</motion.button>
						</div>
					</div>
				</motion.div>

				<motion.div
					className={'p-2'}
					variants={fadeIn}
					initial="initial"
					animate="animate"
					exit="exit"
				>
					{children}
				</motion.div>
			</main>
		</div>
	)
}

export default Layout