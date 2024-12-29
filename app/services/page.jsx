"use client";
import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";

const services = [
	{
		num: "01",
		title: "Frontend Web Development",
		Description: "I have 2 years+ experience over Frontend web development. Where i built many Responsive Application with Next.js, React, Tailwindcss and vanilla Javascript.",
		href: "",
	},
	{
		num: "02",
		title: "Backend Web Development",
		Description: "I have one year of experience working with Laravel. Where implement many backend functionality with Relational Database.",
		href: "",
	},
	{
		num: "03",
		title: "REST API",
		Description: "I have one year experience of building many REST API. Both in Laravel and Nextjs field.",
		href: "",
	},
];

export default function Services() {
	return (
		<section className="min=h-[80vh] flex flex-col justify-center py-12 xl:py-0 mt-0 xl:mt-12">
			<section className="container pt-4 mx-auto xl:pt-12 ">
				<ScrollArea className="h-[700px] xl:h-[400px] ">
					<motion.div
						initial={{ opacity: 0 }}
						animate={{
							opacity: 1,
							transition: { delay: 1, duration: 2.4, ease: "easeInOut" },
						}}
						className="grid grid-cols-1 md:grid-cols-2 gap-[60px] px-4">
						{services.map((service, index) => {
							return (
								<div key={index} className="flex flex-col justify-center flex-1 gap-6 group">
									<div className="flex items-center justify-between w-full">
										<div className="text-5xl font-extrabold text-transparent transition-all duration-500 text-outline group-hover:text-outline-hover">{service.num}</div>
										{/* <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
										<BsArrowDownRight className="text-3xl text-primary" />
									</Link> */}
									</div>
									<h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>

									<p className="text-sm leading-8 xl:leading-9 xl:text-base text-white/60">{service.Description}</p>
									<div className="w-full border-b border-white/20"></div>
								</div>
							);
						})}
					</motion.div>
				</ScrollArea>
			</section>
		</section>
	);
}
