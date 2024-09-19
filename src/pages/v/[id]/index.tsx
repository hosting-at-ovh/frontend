'use client'

import React, {useRef, useState} from "react"
import {DownloadIcon, PauseIcon, PlayIcon, VideoIcon, XIcon} from "lucide-react"
import {motion} from "framer-motion"
import {ContentLayout} from "../../../components/layout/ContentLayout";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "../../../components/ui/card.tsx";
import {BottomGradient} from "../../../components/shared/bottom-gradient.tsx";
import ReportDialog from "../../../components/shared/report-dialog.tsx";
import FlexText from "../../../components/shared/flex-text.tsx";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	videoUrl: string;
}

function VideoModal({isOpen, onClose, videoUrl}: ModalProps) {
	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
			<div className="relative w-full max-w-4xl">
				<video src={videoUrl} controls className="w-full"/>
				<button
					onClick={onClose}
					className="absolute top-4 right-4 text-white bg-black bg-opacity-20 backdrop-blur-lg rounded-md p-2"
				>
					<XIcon className="h-6 w-6"/>
				</button>
			</div>
		</div>
	);
}

export default function VideoUploadPage() {
	const [downloadState, setDownloadState] = useState<'idle' | 'downloading' | 'complete'>('idle')
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [isPlaying, setIsPlaying] = useState(false)
	const [isHovered, setIsHovered] = useState(false)
	const videoRef = useRef<HTMLVideoElement>(null)

	const handleDownload = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		setDownloadState('downloading')
		// Simulate download process
		setTimeout(() => {
			setDownloadState('complete')
		}, 3000)
	}

	const handleVideoClick = () => {
		setIsModalOpen(true)
	}

	const handlePlayPause = () => {
		if (videoRef.current) {
			if (isPlaying) {
				videoRef.current.pause()
			} else {
				videoRef.current.play()
			}
			setIsPlaying(!isPlaying)
		}
	}

	const handleVideoEnded = () => {
		setIsPlaying(false)
	}

	const handleMouseEnter = () => {
		setIsHovered(true)
	}

	const handleMouseLeave = () => {
		setIsHovered(false)
	}

	const videoData = {
		url: "/assets/examples/video.mp4",
		originalName: "awesome-video.mp4",
		fileSize: "15.7 MB",
		username: "JaneDoe",
		date: "2023-07-16 09:45:00",
		uploadTime: "5.2 seconds",
		duration: "2:30"
	}

	return (
		<ContentLayout>
			<div className="container mx-auto p-4">
				<Card className="w-full">
					<CardHeader>
						<CardTitle className="text-2xl flex items-center gap-2">
							<VideoIcon className="h-6 w-6 drama-5 drama-white"/>
							{videoData.originalName}
						</CardTitle>
					</CardHeader>
					<CardContent className="space-y-4">
						<div
							className="w-full aspect-video bg-zinc-900 rounded-lg overflow-hidden relative cursor-pointer group"
							onClick={handleVideoClick}
							onMouseEnter={handleMouseEnter}
							onMouseLeave={handleMouseLeave}
						>
							<video
								ref={videoRef}
								src={videoData.url}
								className="w-full h-full object-contain"
								onEnded={handleVideoEnded}
							>
								<source src="https://www.w3schools.com/html/mov_bbb.mp4#t=0.1" type="video/mp4"/>
							</video>
							<div
								className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isHovered || isPlaying ? 'opacity-100' : 'opacity-0'}`}
							>
								<button
									onClick={(e) => {
										e.stopPropagation()
										handlePlayPause()
									}}
									className="bg-black bg-opacity-50 text-white rounded-full p-4 hover:bg-opacity-75 transition-all"
								>
									{isPlaying ? (
										<PauseIcon className="h-8 w-8"/>
									) : (
										<PlayIcon className="h-8 w-8"/>
									)}
								</button>
							</div>
						</div>
						<div className="grid grid-cols-2 gap-4">
							<div className="flex justify-between items-center">
								<span className="text-sm text-gray-400">File size:</span>
								<span className="font-medium">{videoData.fileSize}</span>
							</div>
							<div className="flex justify-between items-center">
								<span className="text-sm text-gray-400">Uploaded by:</span>
								<span className="font-medium"><FlexText username={videoData.username}/></span>
							</div>
							<div className="flex justify-between items-center">
								<span className="text-sm text-gray-400">Upload date:</span>
								<span className="font-medium">{videoData.date}</span>
							</div>
							<div className="flex justify-between items-center">
								<span className="text-sm text-gray-400">Duration:</span>
								<span className="font-medium">{videoData.duration}</span>
							</div>
						</div>
					</CardContent>
					<CardFooter className="flex flex-col gap-2">
						{downloadState === 'downloading' ? (
							<motion.button
								type="button"
								className="relative block w-full text-white rounded-md h-10 font-medium bg-gradient-to-r from-main-one to-main-two shadow-lg overflow-hidden"
								initial={{scale: 1, rotateX: 0}}
								animate={{scale: 1.02, rotateX: 0}}
								transition={{duration: 0.4, ease: "easeInOut"}}
							>
								<motion.div
									className="absolute inset-0 flex items-center justify-center text-white"
									initial={{opacity: 1, y: 0}}
									animate={{opacity: 0, y: -30}}
									transition={{duration: 0.4}}
								>
									Download <DownloadIcon className="ml-2 h-5 w-5"/>
								</motion.div>

								<motion.div
									className="absolute inset-0 flex items-center justify-center text-white filter-blur-3xl shadow-lg"
									initial={{opacity: 0, y: 30}}
									animate={{opacity: 1, y: 0}}
									transition={{delay: 0.4, duration: 0.4}}
								>
									<svg className="w-5 h-5 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none"
										 viewBox="0 0 24 24">
										<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
												strokeWidth="4"></circle>
										<path className="opacity-75" fill="currentColor"
											  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
									</svg>
								</motion.div>
							</motion.button>
						) : downloadState === 'complete' ? (
							<motion.button
								type="button"
								className="bg-gradient-to-br relative group/btn from-green-500 to-green-600 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--green-800)_inset,0px_-1px_0px_0px_var(--green-800)_inset] flex items-center justify-center gap-2 drama-2 drama-green-500"
								initial={{scale: 1}}
								animate={{scale: 1.05}}
								transition={{duration: 0.2}}
							>
								Download started <DownloadIcon className="h-5 w-5"/>
								<BottomGradient/>
							</motion.button>
						) : (
							<motion.button
								onClick={handleDownload}
								type="button"
								className="bg-gradient-to-br relative group/btn from-zinc-900 to-zinc-900 bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] flex items-center justify-center gap-2"
								whileHover={{scale: 1.05}}
								whileTap={{scale: 0.95}}
							>
								Download Now <DownloadIcon className="h-5 w-5"/>
								<BottomGradient/>
							</motion.button>
						)}
						<ReportDialog
							trigger={<p className="text-muted-foreground underline cursor-pointer">Report</p>}
							url={videoData.url}
							itemId={videoData.originalName}
						/>
					</CardFooter>
				</Card>
			</div>
			<VideoModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				videoUrl={videoData.url}
			/>
		</ContentLayout>
	)
}
