import DashboardLayout from "../../../components/layout/DashboardLayout.tsx";
import {Card, CardContent} from "../../../components/ui/card.tsx";
import {Input} from "../../../components/ui/input.tsx";
import {IdCardIcon, PenIcon, User} from "lucide-react";
import {ColorWheelIcon} from "@radix-ui/react-icons";
import DiscordEmbed from "../../../components/shared/discord-embed.tsx";
import {useState} from "react";

const availablePlaceholders = [
	"username",
	"filename",
	"filesize",
	"fileextension",
	"delay",
	"uploads",
	"date",
	"time",
	"role",
	"newline",
];

export default function Index() {
	const [defaultEmbed, setDefaultEmbed] = useState({
		author: "%username% - %date%, %time%",
		title: "Uploaded at hosting-at.ovh",
		description: "Size: %filesize%%newline%Rank: %role%",
		image: "https://archive.org/download/placeholder-image/placeholder-image.jpg",
		color: "var(--main-one)",
	});

	const colorPickerColor = getComputedStyle(document.documentElement).getPropertyValue('--main-one');

	const {author, title, description, image, color} = defaultEmbed;

	return (
		<DashboardLayout>
			<div className="p-6 space-y-6">
				<div className="grid grid-flow-row gap-12">
					<Card>
						<CardContent className="flex flex-col p-6 gap-4 w-full">
							<div className={"flex flex-col gap-1"}>
								<h1 className={"text-2xl font-bold"}>Embed</h1>
								<p className={"font-medium text-gray-400"}>
									Customize your embed. Here is a list of available placeholders
									you can use with your role.
								</p>
								<p className={"font-medium text-gray-400"}>
									<b>Note:</b> You can use{" "}
									{availablePlaceholders.map((placeholder, index) => (
										<span key={index} className={"font-bold text-main-one"}>
                      %{placeholder}%
											{index < availablePlaceholders.length - 1 ? (
												<span className={"text-gray-400"}>, </span>
											) : (
												""
											)}
                    </span>
									))}
								</p>
							</div>

							<div className={"w-full flex flex-col gap-2"}>
								<Input
									onChange={(e) =>
										setDefaultEmbed({...defaultEmbed, author: e.target.value})
									}
									icon={<User className={"w-5 h-5"}/>}
									placeholder={"Author"}
									className={"w-full"}
									value={author}
								/>
								<Input
									onChange={(e) =>
										setDefaultEmbed({...defaultEmbed, title: e.target.value})
									}
									icon={<IdCardIcon className={"w-5 h-5"}/>}
									placeholder={"Title"}
									disabled={true}
									className={"w-full"}
									value={title}
								/>
								<Input
									onChange={(e) =>
										setDefaultEmbed({
											...defaultEmbed,
											description: e.target.value,
										})
									}
									icon={<PenIcon className={"w-5 h-5"}/>}
									placeholder={"Description"}
									className={"w-full"}
									value={description}
								/>
								<Input
									onChange={(e) =>
										setDefaultEmbed({...defaultEmbed, color: e.target.value})
									}
									icon={<ColorWheelIcon className={"w-5 h-5"}/>}
									placeholder={"Color"}
									className={"w-full"}
									disabled={true}
									value={colorPickerColor}
									type={"color"}
								/>
							</div>

							<button
								className="w-full font-semibold bg-gradient-to-br from-main-one to-main-two p-2 rounded-lg transition-all duration-300 ease-in-out hover:scale-90 hover:shadow-lg hover:from-main-two hover:to-main-one">
								Save Changes
							</button>

							<div className="mt-4 text-sm text-gray-400">
								<p>
									<strong>User Permissions:</strong>
								</p>
								<ul className="list-disc list-inside">
									<li>Normal Users: Can modify Author, and Description.</li>
									<li>
										Premium Users: Can modify everything Normal Users can, plus
										the Color.
									</li>
									<li>
										VIP Users: Can modify everything Premium Users can, plus the
										title of the embed.
									</li>
								</ul>
							</div>
						</CardContent>
					</Card>
					<Card>
						<CardContent className="flex flex-col p-6 gap-4 w-full">
							<div className={"flex flex-col gap-1"}>
								<h1 className={"text-2xl font-bold"}>Embed</h1>
								<p className={"font-medium text-gray-400"}>
									Preview of your embed
								</p>
							</div>

							<DiscordEmbed
								author={author}
								title={title}
								description={description}
								image={image}
								color={color}
							/>
						</CardContent>
					</Card>
				</div>
			</div>
		</DashboardLayout>
	);
}
