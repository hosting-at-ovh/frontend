import {Flag} from "lucide-react"
import {Card} from "../../../components/ui/card.tsx";
import {Button} from "../../../components/ui/button.tsx";
import FlexText from "../../../components/shared/flex-text.tsx";

export default function ImageView() {
	return (
		<div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
			<div className="absolute inset-0 bg-grid-white/[0.05] z-0">
				<div
					className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
			</div>

			<Card>
				<div className="p-6 space-y-6">
					<img
						src="https://images.ctfassets.net/ihx0a8chifpc/GTlzd4xkx4LmWsG1Kw1BB/ad1834111245e6ee1da4372f1eb5876c/placeholder.com-1280x720.png?w=1920&q=60&fm=webp"
						alt="Uploaded image"
						className="w-full h-auto rounded-lg"
					/>
					<div className="flex justify-between items-center">
						<div>
							<div className={'text-4xl'}>
								<FlexText username={'Fedox'}/>
							</div>
							<p className="text-zinc-400">Uploaded 2 hours ago</p>
						</div>
						<div className="flex items-center space-x-4">
							<span className="text-zinc-400">5.2 MB</span>
							<Button variant="outline" size="sm">
								<Flag className="w-4 h-4 mr-2"/>
								Report
							</Button>
						</div>
					</div>
				</div>
			</Card>
		</div>
	)
}