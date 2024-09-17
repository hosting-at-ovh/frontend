import React, {createContext, ReactNode, useContext, useEffect, useState,} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import {ChevronRight} from 'lucide-react';
import {cn} from "../../lib/utils.ts";

interface TabContextType {
	activeTab: string;
	setActiveTab: (id: string) => void;
}

const TabContext = createContext<TabContextType | undefined>(undefined);

interface SetupTabsProps {
	children: ReactNode;
	defaultTab?: string;
	className?: string;
	onChange?: (tabId: string) => void;
}

export function SetupTabs({
							  children,
							  defaultTab,
							  className,
							  onChange,
						  }: SetupTabsProps) {
	const [activeTab, setActiveTab] = useState(defaultTab || '');
	const [isDropdownOpen, setDropdownOpen] = useState(false);

	const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

	useEffect(() => {
		if (onChange) {
			onChange(activeTab);
		}
	}, [activeTab, onChange]);

	return (
		<TabContext.Provider value={{activeTab, setActiveTab}}>
			<div className={`${className}`}>
				<nav className="relative">
					<div className="flex lg:hidden">
						<button
							onClick={toggleDropdown}
							className="px-4 py-2 text-sm font-medium text-white-900 bg-main-two rounded flex items-center"
						>
							{(
								React.Children.toArray(children).find(
									child =>
										React.isValidElement(child) &&
										child.type === TabHeader &&
										child.props.id === activeTab,
								) as React.ReactElement
							)?.props.children || 'Select'}
							<span className="ml-2">
                                <ChevronRight
									className={cn(
										`${isDropdownOpen ? 'rotate-90' : 'rotate-0'}`,
										'transition-all max-h-5 ',
									)}
								/>
                            </span>
						</button>
					</div>
					<div className="hidden lg:flex space-x-8">
						{React.Children.toArray(children).filter(
							child =>
								React.isValidElement(child) &&
								child.type === TabHeader,
						)}
					</div>
				</nav>
				<AnimatePresence>
					{isDropdownOpen && (
						<motion.div
							initial={{opacity: 0, height: 0}}
							animate={{opacity: 1, height: 'auto'}}
							exit={{opacity: 0, height: 0}}
							transition={{duration: 0.2}}
							className="lg:hidden mt-2 bg-gray-800 rounded shadow-lg"
						>
							<div className="flex flex-col">
								{React.Children.toArray(children).filter(
									child =>
										React.isValidElement(child) &&
										child.type === TabHeader,
								)}
							</div>
						</motion.div>
					)}
				</AnimatePresence>
				<motion.div
					key={activeTab}
					initial={{opacity: 0, y: 10}}
					animate={{opacity: 1, y: 0}}
					exit={{opacity: 0, y: -10}}
					transition={{duration: 0.2}}
					className="mt-4 text-white-900"
				>
					{React.Children.toArray(children).find(
						child =>
							React.isValidElement(child) &&
							child.type === TabContent &&
							child.props.id === activeTab,
					)}
				</motion.div>
			</div>
		</TabContext.Provider>
	);
}

interface TabHeaderProps {
	id: string;
	children: ReactNode;
}

export function TabHeader({id, children}: TabHeaderProps) {
	const context = useContext(TabContext);
	if (!context) throw new Error('TabHeader must be used within SetupTabs');

	const {activeTab, setActiveTab} = context;

	return (
		<button
			onClick={() => setActiveTab(id)}
			className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${
				activeTab === id
					? 'text-white'
					: 'text-gray-400 hover:text-gray-200'
			}`}
		>
			{children}
			{activeTab === id && (
				<motion.div
					className="absolute bottom-0 left-0 right-0 h-0.5 bg-main-two"
					layoutId="activeTab"
					initial={false}
					transition={{
						type: 'spring',
						stiffness: 500,
						damping: 30,
					}}
				/>
			)}
		</button>
	);
}

interface TabContentProps {
	id: string;
	children: ReactNode;
}

export function TabContent({id, children}: TabContentProps) {
	const context = useContext(TabContext);
	if (!context) throw new Error('TabContent must be used within SetupTabs');

	const {activeTab} = context;

	if (activeTab !== id) return null;

	return <>{children}</>;
}