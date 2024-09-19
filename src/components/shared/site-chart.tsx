import {Area, AreaChart, CartesianGrid, XAxis} from 'recharts';
import {ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent} from "../ui/chart.tsx";

function generateData() {
	const data = [];
	const startDate = new Date('2021-01-01');
	for (let i = 0; i < 30; i++) {
		const date = new Date(startDate);
		date.setDate(date.getDate() + i);
		data.push({
			date: date.toISOString().slice(0, 10),
			uploads: Math.floor(Math.random() * 100),
		});
	}
	return data;
}

const chartData = generateData();

const chartConfig = {
	uploads: {
		label: 'Uploads',
		color: 'var(--main-one)',
	},
} satisfies ChartConfig;

export function SiteChart() {
	return (
		<div>
			<ChartContainer config={chartConfig} className="max-h-52 w-full">
				<AreaChart
					accessibilityLayer
					data={chartData}
					margin={{
						left: 12,
						right: 12,
					}}
				>
					<CartesianGrid vertical={false}/>
					<XAxis
						dataKey="date"
						tickLine={false}
						axisLine={false}
						tickMargin={8}
					/>
					<ChartTooltip
						cursor={false}
						content={<ChartTooltipContent/>}
					/>
					<defs>
						<linearGradient
							id="filluploads"
							x1="0"
							y1="0"
							x2="0"
							y2="1"
						>
							<stop
								offset="5%"
								stopColor="var(--color-uploads)"
								stopOpacity={0.8}
							/>
							<stop
								offset="95%"
								stopColor="var(--color-uploads)"
								stopOpacity={0.1}
							/>
						</linearGradient>
					</defs>
					<Area
						dataKey="uploads"
						type="monotone"
						fill="url(#filluploads)"
						className={'drama-5 drama-main-two'}
						fillOpacity={0.4}
						stroke="var(--color-uploads)"
						stackId="a"
					/>
					<defs>
						<linearGradient
							id="fillTest"
							x1="0"
							y1="0"
							x2="0"
							y2="1"
						>
							<stop
								offset="5%"
								stopColor="var(--color-test)"
								stopOpacity={0.8}
							/>
							<stop
								offset="95%"
								stopColor="var(--color-test)"
								stopOpacity={0.1}
							/>
						</linearGradient>
					</defs>
					<Area
						dataKey="test"
						type="monotone"
						fill="url(#fillTest)"
						fillOpacity={0.4}
						stroke="var(--color-test)"
						stackId="a"
					/>
				</AreaChart>
			</ChartContainer>
		</div>
	);
}