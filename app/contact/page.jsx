"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/contactGmail";
import { useState } from "react";
import CustomToast from "@/components/ui/toast";

const infos = [
	{
		type: "phone",
		icon: <FaPhoneAlt />,
		title: "Phone",
		call: "+880 01641102404",
		description: "(+880) 16411-02404",
	},
	{
		type: "email",
		icon: <FaEnvelope />,
		title: "Email",
		description: "nishatislam3108@gmail.com",
	},
	{
		type: "address",
		icon: <FaMapMarkerAlt />,
		title: "Address",
		location: "https://maps.app.goo.gl/gk7HMXZjtznqSVyS7",
		description: "Rampura, Dhaka",
	},
];

export default function Contact() {
	const [toastMessage, setToastMessage] = useState("");
	const [toastType, setToastType] = useState("sucess");
	const [isToastOpen, setIsToastOpen] = useState(false);

	const handleSubmit = async (e) => {
		const formData = new FormData(e.target);

		try {
			const result = await sendEmail(formData);
			if (result.success) {
				setToastMessage("Message sent successfully!");
				setToastType("success");
				console.log(toastMessage);
				e.target.reset();
			}
		} catch (err) {
			console.error(err);
			setToastMessage("Failed to send message. Please try again.");
			setToastType("error");
			alert("Failed to send message. Please try again.");
		} finally {
			setIsToastOpen(true); // Show the toast
		}
	};
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
					<div className="xl:h-[45%] order-2 xl:order-none mb-5 xl:mb-0">
						<form
							onSubmit={(e) => {
								e.preventDefault();
								handleSubmit(e);
							}}
							className="flex flex-col gap-4 p-10 pb-5 xl:pb-2 bg-[#27272c] rounded-xl">
							<h3 className="text-4xl text-accent">Let&apos;s work together</h3>
							<p className="text-sm leading-9 xl:text-md text-white/60 ">Please Fill out the form to contact me anytime. Thanks.</p>
							<div className="grid grid-cols-1 gap-2 mt-2 md:grid-cols-2">
								<Input name="firstname" type="firstname" placeholder="Firstname" />
								<Input name="lastname" type="lastname" placeholder="Lastname" />
								<Input name="email" type="email" placeholder="Email Address" />
								<Input name="phone" type="phone" placeholder="Phone Number" />
							</div>

							<Select name="service">
								<SelectTrigger className="w-full">
									<SelectValue placeholder="Select A Service" />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectLabel>Select a service</SelectLabel>
										<SelectItem value="frontend">Frontend Web Development</SelectItem>
										<SelectItem value="backend">Backend Web Development</SelectItem>
										<SelectItem value="fullstack">Fullstack Web Development</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>

							<Textarea name="message" className="h-[200px]" placeholder="Type Your Message Here." />

							<Button type="submit" size="sm" className="max-w-40">
								Send message
							</Button>
						</form>
						<CustomToast message={toastMessage} type={toastType} isOpen={isToastOpen} setIsOpen={setIsToastOpen} />
					</div>

					<div className="flex items-center flex-1 order-1 mb-8 xl:justify-end xl:order-none xl:mb-0">
						<ul className="flex flex-col gap-10">
							{infos.map((item, index) => {
								return (
									<li key={index} className="flex items-center gap-6">
										<div className=" h-[52px] w-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
											<div className="text-[28px]">{item.icon}</div>
										</div>
										<div className="flex-1 w-[200px]">
											<p className="text-white/60">{item.title}</p>
											{item.type === "phone" && (
												<a href={`tel:${item.call}`} className="text-lg">
													{item.description}
												</a>
											)}
											{item.type === "email" && (
												<a href={`mailto:${item.description}`} className="text-lg">
													{item.description}
												</a>
											)}
											{item.type === "address" && (
												<a href={item.location} target="_blank" className="text-lg">
													{item.description}
												</a>
											)}
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
