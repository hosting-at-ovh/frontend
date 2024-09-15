import { motion } from 'framer-motion'
import { Upload, Zap, Shield, ChevronRight } from 'lucide-react'

const fadeIn = {
	initial: { opacity: 0, y: 20 },
	animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
	animate: {
		transition: {
			staggerChildren: 0.1
		}
	}
}

export default function Page() {
	return (
		<div className="bg-black text-white min-h-screen relative overflow-hidden">
			{/* Background grid */}
			<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMEgwdjYwaDYwVjB6TTAgMGg2MHY2MEgwVjB6IiBzdHJva2U9IiMyMDIwMjAiIHN0cm9rZS13aWR0aD0iLjUiLz48L2c+PC9zdmc+')] opacity-20" />

			<header className="container mx-auto py-6 px-4">
				<nav className="flex justify-between items-center">
					<motion.h1
						className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
					>
						Hosting-at.OVH
					</motion.h1>
					<motion.div
						className="flex space-x-6"
						variants={stagger}
						initial="initial"
						animate="animate"
					>
						{['Features', 'Pricing', 'Contact'].map((item) => (
							<motion.a
								key={item}
								href={`#${item.toLowerCase()}`}
								className="hover:text-purple-400 transition-colors backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full"
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
							className="lg:w-1/2 mb-10 lg:mb-0"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.7, delay: 0.2 }}
						>
							<h2 className="text-5xl font-bold mb-6 leading-tight">
								Upload and Share <br />
								<span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                  Screenshots Instantly
                </span>
							</h2>
							<p className="text-xl mb-8 text-gray-300">
								Fast, secure, and easy-to-use screenshot hosting for professionals
							</p>
							<motion.button
								className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								Get Started <ChevronRight className="ml-2" />
							</motion.button>
						</motion.div>
						<motion.div
							className="lg:w-1/2"
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.7, delay: 0.4 }}
						>
							<div className="relative">
								<div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-600 rounded-lg filter blur-3xl opacity-30"></div>
								<div className="relative backdrop-blur-lg bg-white/10 p-6 rounded-lg shadow-xl">
									<img src="/placeholder.svg" alt="Screenshot uploader interface" className="w-full rounded-lg" />
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
							viewport={{ once: true }}
						>
							Why Choose Hosting-at.OVH?
						</motion.h3>
						<motion.div
							className="grid grid-cols-1 md:grid-cols-3 gap-8"
							variants={stagger}
							initial="initial"
							whileInView="animate"
							viewport={{ once: true }}
						>
							{[
								{ icon: <Upload size={40} />, title: 'Easy Uploads', description: 'Drag and drop or paste your screenshots' },
								{ icon: <Zap size={40} />, title: 'Lightning Fast', description: 'Instant uploads and quick sharing' },
								{ icon: <Shield size={40} />, title: 'Secure Storage', description: 'Your files are encrypted and protected' },
							].map((feature, index) => (
								<motion.div
									key={index}
									className="backdrop-blur-lg bg-white bg-opacity-[1%] p-6 rounded-lg shadow-lg"
									variants={fadeIn}
								>
									<div className="text-purple-400 mb-4">{feature.icon}</div>
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
							viewport={{ once: true }}
						>
							Join the thriving community
						</motion.h3>
						<motion.div
							className="flex justify-center items-center space-x-12"
							variants={stagger}
							initial="initial"
							whileInView="animate"
							viewport={{ once: true }}
						>
							{[
								{ number: '9.0K', label: 'Users Created' },
								{ number: '400K', label: 'Total Views' },
							].map((stat, index) => (
								<motion.div key={index} className="text-center" variants={fadeIn}>
									<h4 className="text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
										{stat.number}
									</h4>
									<p className="text-gray-400">{stat.label}</p>
								</motion.div>
							))}
						</motion.div>
					</div>
				</section>

				<section id="pricing" className="py-20">
					<div className="container mx-auto px-4">
						<motion.h3
							className="text-3xl font-bold mb-12 text-center"
							variants={fadeIn}
							initial="initial"
							whileInView="animate"
							viewport={{ once: true }}
						>
							Simple Pricing
						</motion.h3>
						<motion.div
							className="grid grid-cols-1 md:grid-cols-3 gap-8"
							variants={stagger}
							initial="initial"
							whileInView="animate"
							viewport={{ once: true }}
						>
							{[
								{ name: 'Basic', price: 'Free', features: ['10 uploads/day', '24-hour storage', 'Basic support'] },
								{ name: 'Pro', price: '$9.99/mo', features: ['Unlimited uploads', 'Permanent storage', 'Priority support'] },
								{ name: 'Enterprise', price: 'Custom', features: ['Custom solutions', 'API access', 'Dedicated support'] },
							].map((plan, index) => (
								<motion.div
									key={index}
									className="backdrop-blur-lg bg-white bg-opacity-[1%] p-6 rounded-lg shadow-lg text-center"
									variants={fadeIn}
								>
									<h4 className="text-2xl font-semibold mb-4">{plan.name}</h4>
									<p className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
										{plan.price}
									</p>
									<ul className="mb-6 space-y-2">
										{plan.features.map((feature, i) => (
											<li key={i} className="text-gray-300">{feature}</li>
										))}
									</ul>
									<button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
										Choose Plan
									</button>
								</motion.div>
							))}
						</motion.div>
					</div>
				</section>
			</main>

			<footer className="py-8">
				<div className="container mx-auto px-4 text-center text-gray-400">
					<p>&copy; 2023 Hosting-at.OVH. All rights reserved.</p>
				</div>
			</footer>
		</div>
	)
}