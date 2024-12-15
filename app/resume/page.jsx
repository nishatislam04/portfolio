"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

const about = {
	title: "About me",
	description:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisi augue, luctus vitae ex in, facilisis cursus tellus.",
	info: [
		{
			fieldName: "Name",
			fieldValue: "Nishat Islam",
		},
		{
			fieldName: "Phone",
			fieldValue: "(+880) 16411-02404",
		},
		{
			fieldName: "Experience",
			fieldValue: "12+ Years",
		},
		{
			fieldName: "Skype",
			fieldValue: "nio004",
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
			fieldValue: "English",
		},
	],
};

const experience = {
	icon: "/assets/resume/badge.svg",
	title: "My Experience",
	description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisi augue.",
	items: [
		{
			company: "Tech Solution Inc.",
			position: "Full Stack Developer",
			duration: "2022 - present",
		},
		{
			company: "Web Design Studio",
			position: "Front-End Developer Intern",
			duration: "Summer 2021",
		},
		{
			company: "E-commerce Startup",
			position: "Freelance Web Developer",
			duration: "2020 - 2021",
		},
		{
			company: "Tech Academy",
			position: "Teaching Assistant",
			duration: "2019 - 2020",
		},
		{
			company: "Digital Agency",
			position: "UI/UX Designer",
			duration: "2018 - 2019",
		},
		{
			company: "Software Development Firm",
			position: "Junior Developer",
			duration: "2017 - 2018",
		},
	],
};

const education = {
	icon: "/assets/resume/cap.svg",
	title: "My Education",
	description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisi augue.",
	items: [
		{
			institution: "Online Course Platform",
			degree: "Full Stack Web Development Bootcamp",
			duration: "2023",
		},
		{
			institution: "Codecademy",
			degree: "Front-end Track",
			duration: "2022",
		},
		{
			institution: "Online Course",
			degree: "Programming Course",
			duration: "2020-2021",
		},
		{
			institution: "Tech Institute",
			degree: "Certified Web Developer",
			duration: "2019",
		},
		{
			institution: "Design School",
			degree: "Diploma in Graphic Design",
			duration: "2016 - 2018",
		},
		{
			institution: "Community in College",
			degree: "Associate Degree in Computer Science",
			duration: "2014 - 2016",
		},
	],
};

const skills = {
	title: "My Skills",
	description:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisi augue, luctus.",
	skillList: [
		{
			icon: <FaHtml5 />,
			name: "html 5",
		},
		{
			icon: <FaCss3 />,
			name: "css 3",
		},
		{
			icon: <FaJs />,
			name: "javascript",
		},
		{
			icon: <FaReact />,
			name: "react.js",
		},
		{
			icon: <SiNextdotjs />,
			name: "next.js",
		},
		{
			icon: <SiTailwindcss />,
			name: "tailwind.css",
		},
		{
			icon: <FaNodeJs />,
			name: "node.js",
		},
		{
			icon: <FaFigma />,
			name: "figma",
		},
	],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

export default function Resume() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { delay: 2.4, duration: 8.4, ease: "easeIn" } }}
			className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
			<div className="container mx-auto">
				<Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
					<TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:m-0 gap-6">
						<TabsTrigger value="experience">Experience</TabsTrigger>
						<TabsTrigger value="education">Education</TabsTrigger>
						<TabsTrigger value="skills">Skills</TabsTrigger>
						<TabsTrigger value="about">About me</TabsTrigger>
					</TabsList>

					<div className="min-h-[70vh] w-full ">
						<TabsContent value="experience" className="w-full">
							<div className="flex flex-col gap-[30px] text-center xl:text-left">
								<h3 className="text-4xl font-bold">{experience.title}</h3>
								<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
									{experience.description}
								</p>
								<ScrollArea className="h-[400px]">
									<ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
										{experience.items.map((item, index) => {
											return (
												<li
													key={index}
													className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
													<span className="text-accent">{item.duration}</span>
													<h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
														{item.position}
													</h3>
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
								<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
									{education.description}
								</p>
								<ScrollArea className="h-[400px]">
									<ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
										{education.items.map((item, index) => {
											return (
												<li
													key={index}
													className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
													<span className="text-accent">{item.duration}</span>
													<h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
														{item.degree}
													</h3>
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
									<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
										{skills.description}
									</p>
								</div>
								<ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
									{skills.skillList.map((skill, index) => {
										return (
											<li key={index} className="">
												<TooltipProvider delayDuration={100}>
													<Tooltip>
														<TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
															<div className="text-6xl transition-all duration-300 group-hover:text-accent">
																{skill.icon}
															</div>
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
							</div>
						</TabsContent>

						<TabsContent value="about" className="w-full text-center xl:text-left">
							<div className="flex flex-col gap-[30px] ">
								<h3 className="text-4xl font-bold">{about.title}</h3>
								<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
								<ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
									{about.info.map((item, index) => {
										return (
											<li
												key={index}
												className="flex items-center justify-center gap-4 xl:justify-start">
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
