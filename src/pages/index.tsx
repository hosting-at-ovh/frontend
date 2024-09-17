import {motion} from "framer-motion";
import {Check, ChevronRight, Crown, Diamond, Shield, Upload, User, Zap} from 'lucide-react'
import {PiGithubLogo} from "react-icons/pi";

const fadeIn = {
	initial: {opacity: 0, y: 20},
	animate: {opacity: 1, y: 0, transition: {duration: 0.6}},
};

const stagger = {
	animate: {
		transition: {
			staggerChildren: 0.1
		}
	}
}

const teamMembers = [
	{
		name: "Fedox",
		role: "Founder & Developer",
		image: "/assets/staff/fedox.png?height=200&width=200",
		github: "https://github.com/Fedox-die-Ente"
	},
	{
		name: "Austria7",
		role: "Co-Founder & Developer",
		image: "/assets/staff/austria7.png?height=200&width=200",
		github: "https://github.com/Austria7"
	},
	// {
	// 	name: "Mike Johnson",
	// 	role: "Lead Developer",
	// 	image: "/placeholder.svg?height=200&width=200",
	// },
	// {
	// 	name: "Sarah Brown",
	// 	role: "UX Designer",
	// 	image: "/placeholder.svg?height=200&width=200",
	// },
]

export default function Index() {

	return (
		<div className="bg-black text-white min-h-screen relative overflow-hidden">
			<div className="absolute inset-0 bg-grid-white/[0.07] z-0 pointer-events-none">
				<div
					className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
			</div>


			<header className="container mx-auto py-6 px-4 relative z-10">
				<nav className="flex justify-between items-center">
					<motion.h1
						className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-main-one to-main-two"
						initial={{opacity: 0, x: -20}}
						animate={{opacity: 1, x: 0}}
						transition={{duration: 0.5}}
					>
						Hosting-at.OVH
					</motion.h1>
					<motion.div
						className="flex space-x-6 z-10"
						variants={stagger}
						initial="initial"
						animate="animate"
					>
						{['Features', 'Roles', 'Contact'].map((item) => (
							<motion.a
								key={item}
								href={`#${item.toLowerCase()}`}
								className="hover:text-main-one transition-colors backdrop-blur-md bg-white bg-opacity-[3%] px-4 py-2 rounded-md border border-gray-400 border-opacity-20"
								variants={fadeIn}
							>
								{item}
							</motion.a>
						))}
					</motion.div>
				</nav>
			</header>

			<main>
				<section className="container mx-auto py-20 px-4">
					<div className="flex flex-col lg:flex-row items-center justify-between">
						<motion.div
							className="lg:w-1/2 mb-10 lg:mb-0 z-10"
							initial={{opacity: 0, y: 20}}
							animate={{opacity: 1, y: 0}}
							transition={{duration: 0.7, delay: 0.2}}
						>
							<h2 className="text-5xl font-bold mb-6 leading-tight z-20">
								Upload and Share <br/>
								<span
									className="bg-clip-text text-transparent bg-gradient-to-r from-main-one to-main-two z-10 drama-main-two drama-1">
									Files Instantly
								</span>
							</h2>
							<p className="text-xl mb-8 text-gray-300 z-10">
								Fast, secure, and easy-to-use file hosting for you.
							</p>
							<div className={'flex flex-row gap-5'}>
								<motion.button
									className="backdrop-blur-lg border border-gray-400 border-opacity-5 bg-gray-400 bg-opacity-[10%] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:from-main-two hover:to-main-two transition-all duration-300 flex items-center"
									whileHover={{scale: 1.05}}
									whileTap={{scale: 0.95}}
								>
									<a href={'/sign-up'} className={'flex items-center justify-center'}>
										Get Started <ChevronRight className="ml-2"/>
									</a>
								</motion.button>
							</div>

						</motion.div>
						<motion.div
							className="lg:w-1/2"
							initial={{opacity: 0, scale: 0.8}}
							animate={{opacity: 1, scale: 1}}
							transition={{duration: 0.7, delay: 0.4}}
						>
							<div className="relative">
								<div
									className="absolute inset-0 bg-gradient-to-r from-main-one to-main-two rounded-lg filter blur-3xl opacity-30 z-0"></div>
								<div className="relative backdrop-blur-lg bg-white/5 p-6 rounded-lg shadow-xl z-10">
									<img src="https://archive.org/download/placeholder-image/placeholder-image.jpg"
										 alt="Screenshot uploader interface"
										 className="w-full rounded-lg"/>
								</div>
							</div>
						</motion.div>
					</div>
				</section>

				<section id="features" className="py-20">
					<div className="container mx-auto px-4">
						<motion.h3
							className="text-3xl font-bold mb-12 text-center"
							variants={fadeIn}
							initial="initial"
							whileInView="animate"
							viewport={{once: true}}
						>
							Why Choose Us?
						</motion.h3>
						<motion.div
							className="grid grid-cols-1 md:grid-cols-3 gap-8"
							variants={stagger}
							initial="initial"
							whileInView="animate"
							viewport={{once: true}}
						>
							{[
								{
									icon: <Upload size={40}/>,
									title: 'Easy Uploads',
									description: 'Drag and drop or paste your files'
								},
								{
									icon: <Zap size={40}/>,
									title: 'Lightning Fast',
									description: 'Instant uploads and quick sharing'
								},
								{
									icon: <Shield size={40}/>,
									title: 'Secure Storage',
									description: 'Your files are encrypted and protected'
								},
							].map((feature, index) => (
								<motion.div
									key={index}
									className="backdrop-blur-lg bg-white bg-opacity-[1%] p-6 rounded-lg shadow-lg border border-gray-400 border-opacity-5"
									variants={fadeIn}
								>
									<div className="text-main-one mb-4 drama-main-one drama-1">{feature.icon}</div>
									<h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
									<p className="text-gray-300">{feature.description}</p>
								</motion.div>
							))}
						</motion.div>
					</div>
				</section>

				<section className="py-20">
					<div className="container mx-auto px-4">
						<motion.h3
							className="text-3xl font-bold mb-12 text-center"
							variants={fadeIn}
							initial="initial"
							whileInView="animate"
							viewport={{once: true}}
						>
							Join the thriving community
						</motion.h3>
						<motion.div
							className="flex justify-center items-center space-x-12"
							variants={stagger}
							initial="initial"
							whileInView="animate"
							viewport={{once: true}}
						>
							{[
								{number: '9.0K', label: 'Users Created'},
								{number: '400K', label: 'Total Views'},
							].map((stat, index) => (
								<motion.div key={index} className="text-center" variants={fadeIn}>
									<h4 className="text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-main-one to-main-two drama-1 drama-main-two">
										{stat.number}
									</h4>
									<p className="text-gray-400">{stat.label}</p>
								</motion.div>
							))}
						</motion.div>
					</div>
				</section>

				<section id="team" className="py-20">
					<div className="container mx-auto px-4 relative z-10">
						<motion.h3
							className="text-3xl font-bold mb-12 text-center"
							variants={fadeIn}
							initial="initial"
							whileInView="animate"
							viewport={{once: true}}
						>
							Our Team
						</motion.h3>
						<div className="flex justify-center">
							<motion.div
								className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${Math.min(4, teamMembers.length)} gap-8 items-center justify-center`}
								variants={stagger}
								initial="initial"
								whileInView="animate"
								viewport={{once: true}}
							>
								{teamMembers.map((member, index) => (
									<motion.div
										key={index}
										className="backdrop-blur-lg bg-white bg-opacity-[1%] p-12 rounded-lg shadow-lg border border-gray-400 border-opacity-5 text-center"
										variants={fadeIn}
									>
										<motion.div
											className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden animate-spin"
											whileHover={{scale: 1.05}}
											transition={{type: "spring", stiffness: 300}}
										>
											<img src={member.image} alt={member.name}
												 className="w-full h-full object-cover"/>
										</motion.div>
										<h4 className="text-xl font-semibold mb-2">{member.name}</h4>
										<p className="text-gray-400">{member.role}</p>
										<motion.button
											onClick={() => window.open(member.github)}
											className="mt-4 bg-gradient-to-r from-main-one to-main-two text-white px-4 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity duration-300 flex items-center justify-center mx-auto"
											whileHover={{scale: 1.05}}
											whileTap={{scale: 0.95}}
										>
											<PiGithubLogo className="mr-2 w-5 h-5"/>
											View GitHub
										</motion.button>
									</motion.div>
								))}
							</motion.div>
						</div>
					</div>
				</section>


				<section id="roles" className="py-20">
					<div className="container mx-auto px-4">
						<motion.h3
							className="text-3xl font-bold mb-12 text-center"
							variants={fadeIn}
							initial="initial"
							whileInView="animate"
							viewport={{once: true}}
						>
							Our Roles
						</motion.h3>
						<motion.div
							className="grid grid-cols-1 md:grid-cols-3 gap-8"
							variants={stagger}
							initial="initial"
							whileInView="animate"
							viewport={{once: true}}
						>
							{[
								{
									icon: <User size={40}/>,
									name: 'User',
									description: 'Exclusive invite-only access',
									features: [
										'5GB storage',
										'Basic embed customization',
										'24-hour file retention',
										'Community support'
									]
								},
								{
									icon: <Crown size={40}/>,
									name: 'Premium',
									description: 'Enhanced features for power users',
									features: [
										'50GB storage',
										'Advanced embed customization',
										'30-day file retention',
										'Priority support',
										'Custom domain'
									]
								},
								{
									icon: <Diamond size={40}/>,
									name: 'VIP',
									description: 'Ultimate experience for professionals',
									features: [
										'Unlimited storage',
										'Full embed control',
										'Permanent file retention',
										'24/7 dedicated support',
										'API access',
									]
								},
							].map((role, index) => (
								<motion.div
									key={index}
									className="backdrop-blur-lg bg-white bg-opacity-[1%] p-6 rounded-lg shadow-lg text-center border border-gray-400 border-opacity-5"
									variants={fadeIn}
								>
									<div
										className="text-main-one mb-4 flex justify-center drama-main-two drama-1">{role.icon}</div>
									<h4 className="text-2xl font-semibold mb-4 text-glow-white">{role.name}</h4>
									<p className="text-gray-300 mb-6">{role.description}</p>
									<ul className="text-left mb-6 space-y-2">
										{role.features.map((feature, i) => (
											<li key={i} className="text-gray-300 flex items-center">
												<Check size={16} className="text-green-400 mr-2"/>
												{feature}
											</li>
										))}
									</ul>
								</motion.div>
							))}
						</motion.div>
					</div>
				</section>
			</main>

			<footer className="py-8">
				<div className="container mx-auto px-4 text-center text-gray-400">

					<p>&copy; 2024 Hosting-at.OVH. All rights reserved.</p>
					<div className="flex justify-center gap-4 mt-4 text-gray-400 items-center">
						<a href="#" className="hover:underline">Terms of Service</a>
						<a href="#" className="hover:underline">Imprint</a>
						<a href="#" className="hover:underline">Privacy</a>
					</div>
				</div>
			</footer>

		</div>
	)
}
