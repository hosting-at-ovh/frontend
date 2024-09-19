import DashboardLayout from "../../../components/layout/DashboardLayout.tsx";
import {Card, CardContent} from "../../../components/ui/card.tsx";
import {Input, LabelInputContainer} from "../../../components/ui/input.tsx";
import {RiLockPasswordLine} from "react-icons/ri";
import {KeyIcon} from "lucide-react";

export default function Index() {
	return (
		<DashboardLayout>
			<div className="p-6 space-y-6">

				<div className="grid grid-flow-row gap-12">
					<Card>
						<CardContent className="flex flex-col p-6 gap-4 w-full">
							<div className={'flex flex-col gap-1'}>
								<h1 className={'text-2xl font-bold'}>Key</h1>
								<p className={'font-medium text-gray-400'}>Your key is used to authenticate you
									when you
									upload
									files. <span
										className={'font-bold text-main-one underline drama-1 drama-main-one'}>Don't share it with someone.</span>
								</p>
							</div>
							<div className={'w-full'}>
								<Input blurred={true} readOnly={true} icon={<KeyIcon
									className={'w-5 h-5'}/>}
									   placeholder={'Your extremly secret key'}
									   className={'w-full'}/>
							</div>

						</CardContent>
					</Card>
					<Card>
						<CardContent className="flex flex-col p-6 gap-4 w-full">
							<div className={'flex flex-col gap-1'}>
								<h1 className={'text-2xl font-bold'}>ShareX</h1>
								<p className={'font-medium text-gray-400'}>ShareX is a free and open source program that
									lets you capture or record any area of your screen and share it with a single press
									of a key.</p>
							</div>
							<button
								className="w-full font-semibold bg-gradient-to-br from-main-one to-main-two p-2 rounded-lg transition-all duration-300 ease-in-out hover:scale-90 hover:shadow-lg hover:from-main-two hover:to-main-one"
								aria-label="Download ShareX"
							>
								Download ShareX
							</button>
							<button
								className="w-full font-semibold bg-gradient-to-br from-main-one to-main-two p-2 rounded-lg transition-all duration-300 ease-in-out hover:scale-90 hover:shadow-lg hover:from-main-two hover:to-main-one"
								aria-label="Download ShareX config"
							>
								Download ShareX config
							</button>
							<button
								className="w-full font-semibold border border-main-one p-2 rounded-lg transition-all duration-300 ease-in-out hover:scale-90 hover:shadow-lg hover:bg-main-one hover:text-white"
								aria-label="Reset IP"
							>
								Reset IP
							</button>

						</CardContent>
					</Card>
					<Card>
						<CardContent className="flex flex-col p-6 gap-4 w-full">
							<div className={'flex flex-col gap-1'}>
								<h1 className={'text-2xl font-bold'}>Change your password</h1>
								<p className={'font-medium text-gray-400'}>Your password must be at least 8 characters
									long and contain letters, numbers and special characters.</p>
							</div>
							<div className={'w-full space-y-5'}>
								<div className={'flex flex-col gap-2'}>
									<LabelInputContainer>
										<Input
											icon={<RiLockPasswordLine className={'w-5 h-5'}/>}
											type="password"
											id="cpassword"
											name="cpassword"
											className="w-full rounded-md"
											placeholder="Enter your current password"
											required
										/>
									</LabelInputContainer>
									<LabelInputContainer>
										<Input
											icon={<RiLockPasswordLine className={'w-5 h-5'}/>}
											type="password"
											id="password"
											name="password"
											className="w-full rounded-md"
											placeholder="Enter your new password"
											required
										/>
									</LabelInputContainer>
									<LabelInputContainer>
										<Input
											icon={<RiLockPasswordLine className={'w-5 h-5'}/>}
											type="password"
											id="cnpassword"
											name="cnpassword"
											className="w-full rounded-md"
											placeholder="Confirm your new password"
											required
										/>
									</LabelInputContainer>
								</div>

								<button
									className="w-full font-semibold bg-gradient-to-br from-main-one to-main-two p-2 rounded-lg transition-all duration-300 ease-in-out hover:scale-90 hover:shadow-lg hover:from-main-two hover:to-main-one"
									aria-label="Change password">
									Change password
								</button>
							</div>

						</CardContent>
					</Card>
				</div>
			</div>

		</DashboardLayout>
	)
}
