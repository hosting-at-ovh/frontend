import DashboardLayout from "../../components/layout/DashboardLayout.tsx";
import {Card, CardContent} from "../../components/ui/card.tsx";
import {Files, NewspaperIcon} from "lucide-react";
import {SiteChart} from "../../components/shared/site-chart.tsx";
import {IoAnalytics} from "react-icons/io5";
import StatsCard from "../../components/shared/stats-card.tsx";

export default function Index() {
	return (
		<DashboardLayout>
			<div className="p-6 space-y-6">

				<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
					<StatsCard title={'Total uploads'} value={'1'}/>
					<StatsCard title={'Total users'} value={'412'}/>
					<StatsCard title={'Used storage'} value={'62.34 KB / 5GB'}/>
				</div>

				<Card>
					<CardContent className="p-6">
						<h2 className="text-lg font-semibold mb-4 flex items-center gap-3">
							Site analytics
							<IoAnalytics className={'w-5 h-5'}/>
						</h2>
						<SiteChart/>
					</CardContent>
				</Card>

				<Card>
					<CardContent className="p-6">
						<h2 className="text-lg font-semibold mb-4 flex items-center gap-3">
							News & Updates
							<NewspaperIcon className={'w-5 h-5'}/>
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
							<Files className={'w-5 h-5'}/>
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
