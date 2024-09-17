import {createContext, ReactNode, useContext, useEffect, useState} from 'react';

interface ColorContextType {
	color1: string;
	color2: string;
	setColor1: (color: string) => void;
	setColor2: (color: string) => void;
	showDialog: boolean;
	setShowDialog: (show: boolean) => void;
}

const ColorContext = createContext<ColorContextType | undefined>(undefined);

export const ColorProvider = ({children}: { children: ReactNode }) => {
	const [color1, setColor1] = useState("#a855f7");
	const [color2, setColor2] = useState("#9333ea");
	const [showDialog, setShowDialog] = useState(false);

	useEffect(() => {
		const savedColor1 = localStorage.getItem('main-one') || "#a855f7";
		const savedColor2 = localStorage.getItem('main-two') || "#9333ea";

		setColor1(savedColor1);
		setColor2(savedColor2);

		document.documentElement.style.setProperty('--main-one', savedColor1);
		document.documentElement.style.setProperty('--main-two', savedColor2);

		if (!localStorage.getItem('main-one') || !localStorage.getItem('main-two')) {
			setShowDialog(true);
		}
	}, []);

	useEffect(() => {
		document.documentElement.style.setProperty('--main-one', color1);
		document.documentElement.style.setProperty('--main-two', color2);
	}, [color1, color2]);

	return (
		<ColorContext.Provider value={{color1, color2, setColor1, setColor2, showDialog, setShowDialog}}>
			{children}
		</ColorContext.Provider>
	);
};

export const useColor = () => {
	const context = useContext(ColorContext);
	if (!context) {
		throw new Error("useColor must be used within a ColorProvider");
	}
	return context;
};
