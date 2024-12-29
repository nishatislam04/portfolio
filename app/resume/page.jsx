"use client";

import { FaJs, FaReact, FaFigma, FaNodeJs, FaLaravel, FaPhp, FaDocker, FaSass, FaGitAlt } from "react-icons/fa";
import { SiMysql, SiTypescript, SiPrisma, SiVitess } from "react-icons/si";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

const about = {
	title: "About me",
	description: "A passionate Full Stack Web Developer skilled in Laravel, Nextjs and MySQL. I build dynamic and scalable web apps. I have one year of job experience.",
	info: [
		{
			fieldName: "Name",
			fieldValue: "Minhajul Islam",
		},
		{
			fieldName: "Phone",
			fieldValue: "(+880) 16411-02404",
		},
		{
			fieldName: "Experience",
			fieldValue: "1+ Years",
		},
		{
			fieldName: "Whatsapp",
			fieldValue: "(+880) 16411-02404",
		},
		{
			fieldName: "Nationality",
			fieldValue: "Bangalee",
		},
		{
			fieldName: "Email",
			fieldValue: "nishatislam3108@gmail.com",
		},
		{
			fieldName: "Freelance",
			fieldValue: "Available",
		},
		{
			fieldName: "Language",
			fieldValue: "English, Bangla",
		},
	],
};

const experience = {
	icon: "/assets/resume/badge.svg",
	title: "My Experience",
	description: "I have One year working experience on Softbd, Where i get to collaborate with many senior developers to build Fullstack web Applications.",
	items: [
		{
			company: "SoftBD LTD.",
			position: "Full Stack Developer",
			duration: "2023 - present",
		},
	],
};

const education = {
	icon: "/assets/resume/cap.svg",
	title: "My Education",
	description: "I have completed my Diploma in CST (Computer Science Technology) in Feni Computer Institute with GPA 3.89 out of 4.0",
	items: [
		{
			institution: "Feni Computer Institute",
			degree: "Diploma in CST",
			duration: "2024",
		},
		{
			institution: "Mirkashem High School",
			degree: "SSC",
			duration: "2023",
		},
	],
};

const skills = {
	title: "My Skills",
	description: "I have Years of experiences over Next.js, React, Javascript, Laravel, PHP, MYSQL, Docker, Typescript, SASS, Tailwindcss, Prisam, Git, Vite.",
	skillList: [
		{
			icon: <SiNextdotjs />,
			name: "Next.JS",
		},
		{
			icon: <FaReact />,
			name: "React.JS",
		},
		{
			icon: <FaJs />,
			name: "Javascript",
		},
		{
			icon: <FaLaravel />,
			name: "Laravel",
		},
		{
			icon: <FaPhp />,
			name: "PHP",
		},
		{
			icon: <SiMysql />,
			name: "MYSQL",
		},
		{
			icon: <FaDocker />,
			name: "Docker",
		},
		{
			icon: <SiTypescript />,
			name: "Typescript",
		},
		{
			icon: <SiTailwindcss />,
			name: "tailwind.css",
		},
		{
			icon: <FaSass />,
			name: "SASS",
		},
		{
			icon: <SiPrisma />,
			name: "Prisma",
		},
		{
			icon: <FaGitAlt />,
			name: "Git",
		},
		{
			icon: <SiVitess />,
			name: "Vite",
		},
	],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

export default function Resume() {
	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 1, duration: 2.4, ease: "easeIn" } }} className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
			<div className="container pt-8 mx-auto ">
				<Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
					<TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:m-0 gap-6">
						<TabsTrigger value="experience">Experience</TabsTrigger>
						<TabsTrigger value="education">Education</TabsTrigger>
						<TabsTrigger value="skills">Skills</TabsTrigger>
						<TabsTrigger value="about">About me</TabsTrigger>
					</TabsList>

					<div className="min-h-[70vh] w-full mb-8">
						<TabsContent value="experience" className="w-full">
							<div className="flex flex-col gap-[30px] text-center xl:text-left">
								<h3 className="text-4xl font-bold">{experience.title}</h3>
								<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 leading-9">{experience.description}</p>
								<ScrollArea className="h-[500px] xl:h-[400px]">
									<ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
										{experience.items.map((item, index) => {
											return (
												<li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
													<span className="text-accent">{item.duration}</span>
													<h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
													<div className="flex items-center gap-3">
														<span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
														<p className="text-white/60 ">{item.company}</p>
													</div>
												</li>
											);
										})}
									</ul>
								</ScrollArea>
							</div>
						</TabsContent>

						<TabsContent value="education" className="w-full">
							<div className="flex flex-col gap-[30px] text-center xl:text-left">
								<h3 className="text-4xl font-bold">{education.title}</h3>
								<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 leading-9">{education.description}</p>
								<ScrollArea className="h-[450px] xl:h-[400px]">
									<ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
										{education.items.map((item, index) => {
											return (
												<li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
													<span className="text-accent">{item.duration}</span>
													<h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
													<div className="flex items-center gap-3">
														<span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
														<p className="text-white/60 ">{item.institution}</p>
													</div>
												</li>
											);
										})}
									</ul>
								</ScrollArea>
							</div>
						</TabsContent>

						<TabsContent value="skills" className="w-full h-full">
							<div className="flex flex-col gap-[30px]">
								<div className="flex flex-col gap-[30px] text-center xl:text-left">
									<h3 className="text-4xl font-bold">{skills.title}</h3>
									<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0  leading-9">{skills.description}</p>
								</div>
								<ScrollArea className="h-[500px] xl:h-[400px]">
									<ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
										{skills.skillList.map((skill, index) => {
											return (
												<li key={index} className="">
													<TooltipProvider delayDuration={100}>
														<Tooltip>
															<TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
																<div className="text-6xl transition-all duration-300 group-hover:text-accent">{skill.icon}</div>
															</TooltipTrigger>
															<TooltipContent>
																<p className="capitalize">{skill.name}</p>
															</TooltipContent>
														</Tooltip>
													</TooltipProvider>
												</li>
											);
										})}
									</ul>
								</ScrollArea>
							</div>
						</TabsContent>

						<TabsContent value="about" className="w-full text-center xl:text-left">
							<div className="flex flex-col gap-[30px] ">
								<h3 className="text-4xl font-bold">{about.title}</h3>
								<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 leading-9">{about.description}</p>
								<ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-3 max-w-[620px] mx-auto xl:mx-0 mt-12 xl:mt-2">
									{about.info.map((item, index) => {
										return (
											<li key={index} className="flex items-center justify-center gap-4 xl:justify-start">
												<span className="text-white/60">{item.fieldName}</span>
												<span className="text-xl">{item.fieldValue}</span>
											</li>
										);
									})}
								</ul>
							</div>
						</TabsContent>
					</div>
				</Tabs>
			</div>
		</motion.div>
	);
}
