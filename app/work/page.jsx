"use client";

import { delay, motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";

const projects = [
	{
		num: "01",
		category: "Organization Management",
		title: "Project 1",
		description: "A system with role-based permissions for managing organizations, subscriptions, installment tracking, and penalties.",
		stack: [{ name: "Blade" }, { name: "Livewire" }, { name: "Mysql" }, { name: "Laravel" }, { name: "Tailwindcss" }],
		image: "/assets/work/organization_cover.jpg",
		live: false,
		github: "https://github.com/nishatislam04/organizations",
	},
	{
		num: "02",
		category: "Jukto News",
		title: "Project 2",
		description: "A news aggregation platform providing real-time updates and responsive user navigation.",
		stack: [{ name: "Next.js" }, { name: "Tailwind.css" }, { name: "Express.js" }],
		image: "/assets/work/jukto_cover.png",
		live: "https://news.jukto.com/",
		github: false,
	},
	{
		num: "03",
		category: "Fast React Pizza",
		title: "Project 3",
		description: "A pizza ordering app with cart management, geolocation-based order tracking, and real-time updates from the server.",
		stack: [{ name: "React.js" }, { name: "Tailwind.css" }],
		image: "/assets/work/fast_react_pizza_cover.png",
		live: "https://fast-react-pizza-five-gules.vercel.app/",
		github: "https://github.com/nishatislam04/fast-react-pizza",
	},
];

export default function Work() {
	const [project, setProject] = useState(projects[0]);

	function handleSlideChange(swiper) {
		const currentIndex = swiper.activeIndex;
		setProject(projects[currentIndex]);
	}
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { delay: 1, duration: 2.4, ease: "easeInOut" },
			}}
			className="min-h-[80vh] flex flex-col justify-center  xl:px-0">
			<div className="container pt-8 mx-auto ">
				<div className="flex flex-col xl:flex-row xl:gap-[30px]">
					<div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
						<div className="flex flex-col gap-[30px] h-[50%] mb-5 xl:mb-0">
							<div className="font-extrabold leading-none text-transparent text-8xl text-outline">{project.num}</div>
							<h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category} project</h2>
							<p className="text-white/60">{project.description}</p>
							<ul className="flex flex-wrap w-5/6 gap-4">
								{project.stack.map((item, index) => (
									<li key={index} className="text-xl text-accent">
										{item.name}
										{index !== project.stack.length - 1 && ","}
									</li>
								))}
							</ul>
							<div className="border border-white/20"></div>
							<div className="flex items-center gap-4">
								{project.live && (
									<Link href={project.live}>
										<TooltipProvider delayDuration={100}>
											<Tooltip>
												<TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
													<BsArrowUpRight />
												</TooltipTrigger>
												<TooltipContent>
													<p>Live project</p>
												</TooltipContent>
											</Tooltip>
										</TooltipProvider>
									</Link>
								)}

								{project.github && (
									<Link href={project.github}>
										<TooltipProvider delayDuration={100}>
											<Tooltip>
												<TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
													<BsGithub />
												</TooltipTrigger>
												<TooltipContent>
													<p>Github repo</p>
												</TooltipContent>
											</Tooltip>
										</TooltipProvider>
									</Link>
								)}
							</div>
						</div>
					</div>
					<div className="w-full xl:w-[50%]">
						<Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
							{projects.map((project, index) => (
								<SwiperSlide key={index} className="w-full">
									<div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
										<div className="absolute top-0 bottom-0 z-10 w-full h-full bg-black/10"></div>
										<div className="relative w-full h-full">
											<Image src={project.image} fill className="object-fit" alt="" />
										</div>
									</div>
								</SwiperSlide>
							))}
							<WorkSliderBtns
								containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
								btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
							/>
						</Swiper>
					</div>
				</div>
			</div>
		</motion.section>
	);
}
