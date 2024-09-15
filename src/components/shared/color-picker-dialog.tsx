import { useEffect, useState } from 'react';
import {Dialog, DialogClose, DialogContent, DialogTrigger} from '../ui/dialog';
import { Button } from "../ui/button.tsx";
import {Label} from "../ui/label.tsx";
import {ColorWheelIcon} from "@radix-ui/react-icons";

export default function ColorPickerDialog() {
	const [color1, setColor1] = useState("#a855f7");
	const [color2, setColor2] = useState("#9333ea");


	useEffect(() => {
		const savedColor1 = localStorage.getItem('main-one') || "#a855f7";
		const savedColor2 = localStorage.getItem('main-two') || "#9333ea";

		setColor1(savedColor1);
		setColor2(savedColor2);

		document.documentElement.style.setProperty('--main-one', savedColor1);
		document.documentElement.style.setProperty('--main-two', savedColor2);
	}, []);

	useEffect(() => {
		document.documentElement.style.setProperty('--main-one', color1);
		document.documentElement.style.setProperty('--main-two', color2);
	}, [color1, color2]);

	const handleSave = () => {
		localStorage.setItem('main-one', color1);
		localStorage.setItem('main-two', color2);
	};

	const resetColors = () => {
		setColor1("#a855f7");
		setColor2("#9333ea");
		localStorage.setItem('main-one', "#a855f7");
		localStorage.setItem('main-two', "#9333ea");

	}

	return (
		<Dialog onOpenChange={handleSave}>
			<DialogTrigger asChild>
				<button className={'border border-gray-400 border-opacity-20 backdrop-blur-lg p-4 rounded-md bg-black bg-opacity-5 flex items-center gap-2'}>
					<ColorWheelIcon className={'w-5 h-5'}/>
				</button>
			</DialogTrigger>
			<DialogContent className="bg-black bg-opacity-5 backdrop-blur-lg p-6 rounded-b-md shadow-lg text-white border-gray-400 border-opacity-20">
				<h2 className="text-xl font-semibold mb-4">Choose Colors</h2>
				<div className="mb-4">
					<Label htmlFor="color1" className="block text-neutral-200">Color 1</Label>
					<input
						id="color1"
						type="color"
						value={color1}
						onChange={(e) => setColor1(e.target.value)}
						className="mt-1 bg-transparent w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
					/>
				</div>
				<div>
					<Label htmlFor="color2" className="block text-gray-700">Color 2</Label>
					<input
						id="color2"
						type="color"
						value={color2}
						onChange={(e) => setColor2(e.target.value)}
						className="mt-1 bg-transparent w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
					/>
				</div>

				<div className={'flex flex-row gap-5'}>
					<DialogClose asChild>
						<button
							onClick={handleSave}
							className="bg-gradient-to-br relative group/btn from-zinc-700 to-zinc-900 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] flex items-center justify-center gap-2"
						>
							Save
						</button>
					</DialogClose>
					<button
						onClick={resetColors}
						className="bg-gradient-to-br relative group/btn from-zinc-700 to-zinc-900 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] flex items-center justify-center gap-2"
					>
						Reset
					</button>
				</div>


				<h2 className="mt-6 text-xl font-semibold">Preview</h2>
				<div className="flex flex-col gap-4 mt-4">
					<div
						className="bg-gradient-to-r from-[var(--main-one)] to-[var(--main-two)] text-white text-center p-4 rounded-md shadow-md"
					>
						<h3 className="text-xl font-bold">Hosting-at.OVH</h3>
						<p className="text-lg">The best uploader service</p>
					</div>
					<Button className="w-full bg-main-one text-white hover:bg-main-one-dark focus:ring-main-one focus:border-main-one rounded-md shadow-sm">
						Get Started
					</Button>
				</div>
			</DialogContent>
		</Dialog>
	);
}
