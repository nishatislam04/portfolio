"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }) {
	const pathName = usePathname();

	return (
		<AnimatePresence>
			<div key={pathName}>
				<motion.div
					initial={{ opacity: 1 }}
					animate={{
						opacity: 0,
						transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
					}}
					className="fixed top-0 w-screen h-screen pointer-events-none bg-primary">
					{children}
				</motion.div>
			</div>
		</AnimatePresence>
	);
}
