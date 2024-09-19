'use client'

import {useRef, useState} from "react"
import {PauseIcon, PlayIcon, VideoIcon, XIcon} from "lucide-react"
import {ContentLayout} from "../../../components/layout/ContentLayout";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "../../../components/ui/card.tsx";
import ReportDialog from "../../../components/shared/report-dialog.tsx";
import FlexText from "../../../components/shared/flex-text.tsx";
import DownloadButton from "../../../components/shared/download-button.tsx";

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
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [isPlaying, setIsPlaying] = useState(false)
	const [isHovered, setIsHovered] = useState(false)
	const videoRef = useRef<HTMLVideoElement>(null)

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
						<DownloadButton downloadUrl={videoData.url}/>
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
