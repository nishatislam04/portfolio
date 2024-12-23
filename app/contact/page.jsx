"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const infos = [
	{
		icon: <FaPhoneAlt />,
		title: "Phone",
		description: "(+880) 16411-02404",
	},
	{
		icon: <FaEnvelope />,
		title: "Email",
		description: "nishatislam3108@gmail.com",
	},
	{
		icon: <FaMapMarkerAlt />,
		title: "Address",
		description: "Rampura, Dhaka",
	},
];

export default function contact() {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { delay: 1, duration: 2.4, ease: "easeInOut" },
			}}
			className="">
			<div className="container pt-8 mx-auto ">
				<div className="flex flex-col xl:flex-row gap-[30px]">
					<div className="xl:h-[45%] order-2 xl:order-none">
						<form className="flex flex-col gap-4 p-10 pb-2 bg-[#27272c] rounded-xl">
							<h3 className="text-4xl text-accent">Let&apos;s work together</h3>
							<p className="leading-6 text-white/60">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquet lorem sit
								amet euismod rutrum.
							</p>
							<div className="grid grid-cols-1 gap-2 mt-2 md:grid-cols-2">
								<Input type="firstname" placeholder="Firstname" />
								<Input type="lastname" placeholder="Lastname" />
								<Input type="email" placeholder="Email Address" />
								<Input type="phone" placeholder="Phone Number" />
							</div>

							<Select>
								<SelectTrigger className="w-full">
									<SelectValue placeholder="Select A Service" />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectLabel>Select a service</SelectLabel>
										<SelectItem value="est">Web Development</SelectItem>
										<SelectItem value="cst">UI/UX Design</SelectItem>
										<SelectItem value="mst">Logo Design</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>

							<Textarea className="h-[200px]" placeholder="Type Your Message Here." />

							<Button size="sm" className="max-w-40">
								Send message
							</Button>
						</form>
					</div>

					<div className="flex items-center flex-1 order-1 mb-8 xl:justify-end xl:order-none xl:mb-0">
						<ul className="flex flex-col gap-10">
							{infos.map((item, index) => {
								return (
									<li key={index} className="flex items-center gap-6">
										<div className="w-[52px] h-[52px] xl:w-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
											<div className="text-[28px]">{item.icon}</div>
										</div>
										<div className="flex-1">
											<p className="text-white/60">{item.title}</p>
											<p className="text-xl">{item.description}</p>
										</div>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
		</motion.section>
	);
}
