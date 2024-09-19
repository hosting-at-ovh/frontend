import {CheckIcon, DownloadIcon, FileIcon, ShieldCheckIcon} from "lucide-react"
import {Card, CardContent, CardFooter, CardTitle} from "../../../components/ui/card"
import {CardHeader} from "../../../components/ui/card.tsx";
import {ContentLayout} from "../../../components/layout/ContentLayout.tsx";
import {BottomGradient} from "../../../components/shared/bottom-gradient.tsx";
import {motion} from "framer-motion";
import {useState} from "react";
import ReportDialog from "../../../components/shared/report-dialog.tsx";
import FlexText from "../../../components/shared/flex-text.tsx";

export default function DownloadPage() {
	const [downloadState, setDownloadState] = useState<'idle' | 'downloading' | 'complete'>('idle')

	const handleDownload = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		setDownloadState('downloading')
		// Simulate download process
		setTimeout(() => {
			setDownloadState('complete')
		}, 3000)
	}

	return (
		<ContentLayout>
			<div className="container mx-auto p-4 max-w-xl">
				<Card className="w-full">
					<CardHeader>
						<CardTitle className="text-2xl flex items-center gap-2">
							<FileIcon className="h-6 w-6 drama-5 drama-white"/>
							file-name.zip
						</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="space-y-4">
							<div className="flex justify-between items-center">
								<span className="text-sm text-gray-400">File size:</span>
								<span className="font-medium">4.23 MB</span>
							</div>
							<div className="flex justify-between items-center">
								<span className="text-sm text-gray-400">File type:</span>
								<span className="font-medium">ZIP Archive</span>
							</div>
							<div className="flex justify-between items-center">
								<span className="text-sm text-gray-400">Uploaded:</span>
								<span className="font-medium">2023-07-15 14:30:00</span>
							</div>
							<div className="flex justify-between items-center">
								<span className="text-sm text-gray-400">Uploaded by:</span>
								<span className="font-medium"><FlexText username={'John Doe'}/></span>
							</div>
							<div className="flex items-center gap-2">
								<ShieldCheckIcon className="h-5 w-5 text-green-500 drama-1 drama-green-500"/>
								<span className="text-sm text-muted-foreground">
    Virus scanned. No threats detected.
</span>
							</div>
						</div>
					</CardContent>
					<CardFooter className={'flex flex-col gap-2'}>
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
										<circle
											className="opacity-25"
											cx="12"
											cy="12"
											r="10"
											stroke="currentColor"
											strokeWidth="4"
										></circle>
										<path
											className="opacity-75"
											fill="currentColor"
											d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
										></path>
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
								Download started <CheckIcon className="h-5 w-5"/>
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
							trigger={<p className={'text-muted-foreground underline cursor-pointer'}>Report</p>}
							url={'currenturl'} itemId={'item'}/>
					</CardFooter>
				</Card>
			</div>
		</ContentLayout>
	)
}