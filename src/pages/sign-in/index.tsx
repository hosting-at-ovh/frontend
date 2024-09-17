import {motion} from 'framer-motion';
import {Label} from "../../components/ui/label.tsx";
import {Input, LabelInputContainer} from "../../components/ui/input.tsx";
import {useState} from "react";
import {ArrowRightIcon} from "@radix-ui/react-icons";
import {BottomGradient} from "../../components/shared/bottom-gradient.tsx";

const fadeIn = {
	initial: {opacity: 0, y: 20},
	animate: {opacity: 1, y: 0, transition: {duration: 0.6}},
};

export default function SignUp() {

	const [error] = useState("")
	const [isSubmitting, setIsSubmitting] = useState(false)

	const handleSubmit = (e: any) => {
		e.preventDefault()
		setIsSubmitting(true)
	}

	return (
		<div className="bg-black text-white min-h-screen flex items-center justify-center relative overflow-hidden">
			<div className="absolute inset-0 bg-grid-white/[0.05] z-0 pointer-events-none">
				<div
					className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
			</div>

			<motion.div
				className="m-5 relative rounded-lg shadow-lg z-10 backdrop-blur-lg bg-white bg-opacity-[1%] border border-gray-400 border-opacity-10 p-14 md:min-w-[500px] md:w-[500px]"
				initial="initial"
				animate="animate"
				variants={fadeIn}
			>
				<div className="my-8">
					<h2 className="font-bold w-full text-2xl text-neutral-200 text-center px-4">
						Welcome back
					</h2>
				</div>
				<form className="space-y-8">
					<div className="flex flex-col mb-4">
						<LabelInputContainer className="mb-6">
							<Label htmlFor="email">Email</Label>
							<Input
								type="email"
								id="email"
								name="email"
								className="w-full"
								placeholder="Enter your email"
								required
							/>
						</LabelInputContainer>

						<LabelInputContainer>
							<Label htmlFor="password">Password</Label>
							<Input
								type="password"
								id="password"
								name="password"
								className="w-full rounded-md"
								placeholder="Enter your password"
								required
							/>
						</LabelInputContainer>

						<p className={'text-red-500 pb-5 font-semibold'}>{error}</p>
						{isSubmitting ? (
							<motion.button
								type="submit"
								className="relative block w-full text-white rounded-md h-10 font-medium bg-gradient-to-r from-main-one to-main-two shadow-lg overflow-hidden"
								initial={{scale: 1, rotateX: 0}}
								animate={{scale: 1.02, rotateX: 0}}
								whileHover={{scale: 1.05, rotateX: 15}}
								whileTap={{scale: 0.95, rotateX: 180}}
								transition={{duration: 0.4, ease: "easeInOut"}}
							>
								<motion.div
									className="absolute inset-0 flex items-center justify-center text-white"
									initial={{opacity: 1, y: 0}}
									animate={{opacity: 0, y: -30}}
									transition={{duration: 0.4}}
								>
									Sign in <ArrowRightIcon/>
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
						) : (
							<motion.button
								onClick={handleSubmit}
								type="submit"
								className="bg-gradient-to-br relative group/btn from-zinc-900 to-zinc-900 bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] flex items-center justify-center gap-2"
								whileHover={{scale: 1.05}}
								whileTap={{scale: 0.95}}
							>
								Sign in <ArrowRightIcon/>
								<BottomGradient/>
							</motion.button>
						)}
					</div>
				</form>
				<p className="mt-4 text-center text-gray-400">
					New to our page?{' '}
					<a href="/sign-up" className="text-main-one hover:underline">Sign up</a>
				</p>
			</motion.div>
		</div>
	);
}


