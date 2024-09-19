import React from "react";

export const ContentLayout = ({children}: { children: React.ReactNode }) => {
	return (
		<div className="bg-black text-white min-h-screen relative overflow-hidden flex items-center justify-center">
			<div className="absolute inset-0 bg-grid-white/[0.07] z-0 pointer-events-none">
				<div
					className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
				></div>
			</div>

			<div className="container mx-auto p-4 max-w-2xl z-10">
				{children}
			</div>
		</div>
	);
};
