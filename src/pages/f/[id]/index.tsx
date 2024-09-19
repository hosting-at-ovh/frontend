import {FileIcon, ShieldCheckIcon} from "lucide-react"
import {Card, CardContent, CardFooter, CardTitle} from "../../../components/ui/card"
import {CardHeader} from "../../../components/ui/card.tsx";
import {ContentLayout} from "../../../components/layout/ContentLayout.tsx";
import ReportDialog from "../../../components/shared/report-dialog.tsx";
import FlexText from "../../../components/shared/flex-text.tsx";
import DownloadButton from "../../../components/shared/download-button.tsx";

export default function DownloadPage() {


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
						<DownloadButton downloadUrl={'https://f84.workupload.com/download/cu4aNLsKQVt'}/>
						<ReportDialog
							trigger={<p className={'text-muted-foreground underline cursor-pointer'}>Report</p>}
							url={'currenturl'} itemId={'item'}/>
					</CardFooter>
				</Card>
			</div>
		</ContentLayout>
	)
}