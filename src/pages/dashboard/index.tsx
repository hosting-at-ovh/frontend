import DashboardLayout from "../../components/layout/DashboardLayout.tsx";
import {Card, CardContent} from "../../components/ui/card.tsx";
import {Files, FilesIcon, NewspaperIcon, UsersIcon} from "lucide-react";
import {GrStorage} from "react-icons/gr";

export default function Index() {
	return (
		<DashboardLayout>
			<div className="p-6 space-y-6">

				<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
					<Card>
						<CardContent className="flex items-center p-6 gap-6">
							<div className={'bg-main-one p-7 rounded-md'}>
								<FilesIcon className={'w-7 h-7'}/>
							</div>
							<div className="space-y-1">
								<p className="text-sm font-medium text-gray-200">Total uploads</p>
								<p className="text-3xl font-bold">1</p>
							</div>
						</CardContent>
					</Card>
					<Card>
						<CardContent className="flex items-center p-6 gap-6">
							<div className={'bg-main-one p-7 rounded-md'}>
								<UsersIcon className={'w-7 h-7'}/>
							</div>
							<div className="space-y-1">
								<p className="text-sm font-medium text-gray-200">Total users</p>
								<p className="text-3xl font-bold">412</p>
							</div>
						</CardContent>
					</Card>
					<Card>
						<CardContent className="flex items-center p-6 gap-6">
							<div className={'bg-main-one p-7 rounded-md'}>
								<GrStorage className={'w-7 h-7'}/>
							</div>
							<div className="space-y-1">
								<p className="text-sm font-medium text-gray-200">Used storage</p>
								<p className="text-3xl font-bold">62.34 KB / 5GB</p>
							</div>
						</CardContent>
					</Card>
				</div>

				<Card>
					<CardContent className="p-6">
						<h2 className="text-lg font-semibold mb-4 flex items-center gap-3">
							News & Updates
							<NewspaperIcon/>
						</h2>
						<div className={'p-4 bg-black bg-opacity-20 rounded-lg'}>
							<p className="text-gray-400">No data.</p>
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardContent className="p-6">
						<h2 className="text-lg font-semibold mb-4 flex items-center gap-3">
							Your last uploads
							<Files/>
						</h2>
						<div className={'p-4 bg-black bg-opacity-20 rounded-lg'}>
							<p className="text-gray-400">No data.</p>
						</div>
					</CardContent>
				</Card>
			</div>
		</DashboardLayout>
	)
}
