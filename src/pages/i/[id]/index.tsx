'use client'

import {ImageIcon, XIcon} from "lucide-react"
import {ContentLayout} from "../../../components/layout/ContentLayout.tsx";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "../../../components/ui/card.tsx";
import ReportDialog from "../../../components/shared/report-dialog.tsx";
import FlexText from "../../../components/shared/flex-text.tsx";
import DownloadButton from "../../../components/shared/download-button.tsx";
import {useEffect, useState} from "react";
import {HostingAtOvh} from "../../../lib/api/hosting-at-ovh.ts";
import {useParams} from "react-router";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	imageUrl: string;
	altText: string;
}

function ImageModal({isOpen, onClose, imageUrl, altText}: ModalProps) {
	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
			<div className="relative">
				<img src={imageUrl} alt={altText} className="max-w-full max-h-full object-contain"/>
				<button
					onClick={onClose}
					className="absolute top-4 right-4 text-white bg-black bg-opacity-20 backdrop-blur-lg rounded-md p-2">
					<XIcon className="h-6 w-6"/>
				</button>
			</div>
		</div>
	);
}

interface ApiResponse {
	relatedFile: string;
	delay: number;
	user: {
		username: string;
	};
}

interface ImageData {
	date: string;
	fileSize: string;
	originalName: string;
	uploadTime: string;
	url: string;
	username: string;
}

export default function ImageUploadPage() {

	const {id} = useParams();

	const [isModalOpen, setIsModalOpen] = useState(false)

	const handleImageClick = () => {
		setIsModalOpen(true);
	};

	const [imageData, setImageData] = useState<ImageData | null>(null);

	useEffect(() => {
		HostingAtOvh.getAPI()
			.getUpload(Number(id))
			.then((data: unknown) => {
				const apiResponse = data as ApiResponse;

				if (apiResponse) {
					setImageData({
						date: "",
						fileSize: "",
						originalName: apiResponse.relatedFile || "Unknown",
						uploadTime: apiResponse.delay ? `${apiResponse.delay}ms` : "Unknown time",
						url: "http://localhost:8080" + apiResponse.url,
						username: apiResponse.user?.username || "Unknown user"
					});
				} else {
					console.warn("No data returned from API");
				}
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
			});
	}, [id]);

	// const fakeData = {
	// 	url: "https://images.photowall.com/products/59453/landscape-waterfall.jpg?h=699&q=85",
	// 	originalName: "beautiful-landscape.jpg",
	// 	fileSize: "2.5 MB",
	// 	username: "JohnDoe",
	// 	date: "2023-07-15 14:30:00",
	// 	uploadTime: "2.3 seconds"
	// }

	if (!imageData) {
		return (
			<ContentLayout>
				<div className="container mx-auto p-4">
					<Card className="w-full">
						<CardHeader>
							<CardTitle className="text-2xl flex items-center gap-2">
								<ImageIcon className="h-6 w-6 drama-5 drama-white"/>
								Loading...
							</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-muted-foreground">Loading image data...</p>
						</CardContent>
					</Card>
				</div>
			</ContentLayout>
		);
	}

	return (
		<ContentLayout>
			<div className="container mx-auto p-4">
				<Card className="w-full">
					<CardHeader>
						<CardTitle className="text-2xl flex items-center gap-2">
							<ImageIcon className="h-6 w-6 drama-5 drama-white"/>
							{imageData.originalName}
						</CardTitle>
					</CardHeader>
					<CardContent className="space-y-4">
						<div className="w-full h-auto overflow-hidden bg-zinc-900 rounded-lg cursor-pointer"
							 onClick={handleImageClick}>
							<img
								src={imageData.url}
								alt={imageData.originalName}
								className="w-full h-auto object-contain"
								loading="lazy"
								decoding="async"
							/>
						</div>

						<div className="grid grid-cols-2 gap-4">
							<div className="flex justify-between items-center">
								<span className="text-sm text-gray-400">File size:</span>
								<span className="font-medium">{imageData.fileSize}</span>
							</div>
							<div className="flex justify-between items-center">
								<span className="text-sm text-gray-400">Uploaded by:</span>
								<span className="font-medium"><FlexText username={imageData.username}/></span>
							</div>
							<div className="flex justify-between items-center">
								<span className="text-sm text-gray-400">Upload date:</span>
								<span className="font-medium">{imageData.date}</span>
							</div>
							<div className="flex justify-between items-center">
								<span className="text-sm text-gray-400">Upload time:</span>
								<span className="font-medium">{imageData.uploadTime}</span>
							</div>
						</div>
					</CardContent>
					<CardFooter className="flex flex-col gap-2">

						<DownloadButton downloadUrl={imageData.url}/>

						<ReportDialog
							trigger={<p className="text-muted-foreground underline cursor-pointer">Report</p>}
							url={imageData.url}
							itemId={imageData.originalName}
						/>
					</CardFooter>
				</Card>
			</div>
			<ImageModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				imageUrl={imageData.url}
				altText={imageData.originalName}
			/>
		</ContentLayout>
	)
}
