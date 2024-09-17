'use client'

import {SetStateAction, useEffect, useState} from 'react'
import {ColorWheelIcon} from "@radix-ui/react-icons"
import {useColor} from '../../context/ColorContext'
import {HexColorPicker} from "react-colorful"
import {Dialog, DialogContent, DialogTrigger} from "../ui/dialog.tsx";
import {Button} from "../ui/button.tsx";

export default function ColorPickerDialog() {
	const {color1, color2, setColor1, setColor2} = useColor()
	const [tempColor1, setTempColor1] = useState(color1)
	const [tempColor2, setTempColor2] = useState(color2)
	const [activeColor, setActiveColor] = useState('color1')

	useEffect(() => {
		const savedColor1 = localStorage.getItem('main-one') || "#a855f7"
		const savedColor2 = localStorage.getItem('main-two') || "#9333ea"

		setColor1(savedColor1)
		setColor2(savedColor2)
		setTempColor1(savedColor1)
		setTempColor2(savedColor2)

		document.documentElement.style.setProperty('--main-one', savedColor1)
		document.documentElement.style.setProperty('--main-two', savedColor2)
	}, [])

	useEffect(() => {
		document.documentElement.style.setProperty('--main-one', color1)
		document.documentElement.style.setProperty('--main-two', color2)
	}, [color1, color2])

	const handleSave = () => {
		setColor1(tempColor1)
		setColor2(tempColor2)
		localStorage.setItem('main-one', tempColor1)
		localStorage.setItem('main-two', tempColor2)
	}

	const resetColors = () => {
		const defaultColor1 = "#a855f7"
		const defaultColor2 = "#9333ea"
		setTempColor1(defaultColor1)
		setTempColor2(defaultColor2)
		setColor1(defaultColor1)
		setColor2(defaultColor2)
		localStorage.setItem('main-one', defaultColor1)
		localStorage.setItem('main-two', defaultColor2)
	}

	return (
		<Dialog>
			<DialogTrigger asChild className={'z-50'}>
				<button
					className={'border border-gray-400 border-opacity-20 backdrop-blur-lg p-4 rounded-md bg-black bg-opacity-5 flex items-center gap-2 '}>
					<ColorWheelIcon className={'w-5 h-5 text-white'}/>
				</button>
			</DialogTrigger>
			<DialogContent
				className="sm:max-w-[425px] bg-black bg-opacity-20 backdrop-blur-lg border-gray-400 border-opacity-20 text-white">
				<div className="grid gap-4 py-4">
					<div className="flex justify-center space-x-4">
						<Button
							variant={activeColor === 'color1' ? "default" : "outline"}
							onClick={() => setActiveColor('color1')}
							style={{backgroundColor: tempColor1}}
							className="w-16 h-16 rounded-full p-0 border-4 border-white"
						/>
						<Button
							variant={activeColor === 'color2' ? "default" : "outline"}
							onClick={() => setActiveColor('color2')}
							style={{backgroundColor: tempColor2}}
							className="w-16 h-16 rounded-full p-0 border-4 border-white"
						/>
					</div>
					<div className="flex justify-center">
						<HexColorPicker
							color={activeColor === 'color1' ? tempColor1 : tempColor2}
							onChange={(color: SetStateAction<string>) => activeColor === 'color1' ? setTempColor1(color) : setTempColor2(color)}
						/>
					</div>
					<div className="flex justify-between gap-5">
						<button
							className="bg-gradient-to-br relative group/btn from-zinc-700 to-zinc-900 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] flex items-center justify-center gap-2"
							onClick={resetColors}>
							Reset
						</button>
						<button
							className="bg-gradient-to-br relative group/btn from-zinc-700 to-zinc-900 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] flex items-center justify-center gap-2"
							onClick={handleSave}>
							Save
						</button>
					</div>
					<div className="space-y-2">
						<h3 className="text-lg font-semibold">Preview</h3>
						<div
							className="h-24 rounded-md p-4 flex items-center justify-center bg-gradient-to-r from-[var(--main-one)] to-[var(--main-two)]">
              <span className="text-2xl font-bold text-white drop-shadow-lg">
                Hosting-at.OVH
              </span>
						</div>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	)
}