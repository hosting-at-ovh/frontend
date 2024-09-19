import {Card, CardContent} from "../ui/card.tsx";
import {FilesIcon} from "lucide-react";

interface Props {
	title: string;
	value: string;
}

export default function StatsCard({title, value}: Props) {
	return (
		<Card>
			<CardContent className="flex items-center p-6 gap-6">
				<div className={'bg-main-one p-7 rounded-md drama-5 drama-main-one'}>
					<FilesIcon className={'w-7 h-7'}/>
				</div>
				<div className="space-y-1">
					<p className="text-sm font-medium text-gray-200">{title}</p>
					<p className="text-3xl font-bold">{value}</p>
				</div>
			</CardContent>
		</Card>
	)
}
