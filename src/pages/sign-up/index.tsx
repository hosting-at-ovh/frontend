import { motion } from 'framer-motion';

const fadeIn = {
	initial: { opacity: 0, y: 20 },
	animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function SignUp() {
	return (
		<div className="bg-black text-white min-h-screen flex items-center justify-center relative overflow-hidden">
			{/* Background gradient */}
			<div className="absolute inset-0 bg-grid-white/[0.07] z-0 pointer-events-none">
				<div
					className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
			</div>

			<motion.div
				className="relative p-8 rounded-lg shadow-lg z-10"
				initial="initial"
				animate="animate"
				variants={fadeIn}
			>
				<h1 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
					Sign Up
				</h1>
				<form className="space-y-4">
					<div>
						<label htmlFor="name" className="block text-gray-300 mb-1">Name</label>
						<input
							type="text"
							id="name"
							name="name"
							className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
							placeholder="Enter your name"
							required
						/>
					</div>
					<div>
						<label htmlFor="email" className="block text-gray-300 mb-1">Email</label>
						<input
							type="email"
							id="email"
							name="email"
							className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
							placeholder="Enter your email"
							required
						/>
					</div>
					<div>
						<label htmlFor="password" className="block text-gray-300 mb-1">Password</label>
						<input
							type="password"
							id="password"
							name="password"
							className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
							placeholder="Enter your password"
							required
						/>
					</div>
					<motion.button
						type="submit"
						className="w-full px-4 py-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-600 text-white font-semibold hover:opacity-90 transition-opacity"
						whileHover={{scale: 1.05}}
						whileTap={{scale: 0.95}}
					>
						Sign Up
					</motion.button>
				</form>
				<p className="mt-4 text-center text-gray-400">
					Already have an account?{' '}
					<a href="#" className="text-purple-400 hover:underline">Log in</a>
				</p>
			</motion.div>
		</div>
	);
}
