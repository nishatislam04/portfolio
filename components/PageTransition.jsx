"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }) {
	const pathName = usePathname();

	return (
		<AnimatePresence>
			<div key={pathName}>
				<motion.div
					key={pathName}
					initial={{ opacity: 0 }}
					animate={{
						opacity: 1,
						transition: { delay: 0.8, duration: 2, ease: "easeInOut" },
					}}
					className="w-full h-full">
					{children}
				</motion.div>
			</div>
		</AnimatePresence>
	);
}
