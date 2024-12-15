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
					animate={{ opacity: 1 }}
					exit={{
						opacity: 0,
						transition: { delay: 0, duration: 0.4, ease: "easeInOut" },
					}}
					transition={{ duration: 0.4, ease: "easeInOut" }}
					className="w-full h-full">
					{children}
				</motion.div>
			</div>
		</AnimatePresence>
	);
}
