"use client";

import CountUp from "react-countup";

const stats = [
	{
		num: 12,
		text: "Years of experience",
	},
	{
		num: 26,
		text: "Projects completed",
	},
	{
		num: 8,
		text: "Technology mastered",
	},
	{
		num: 500,
		text: "Code commits",
	},
];

export default function Stats() {
	return (
		<section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
			<div className="container mx-auto">
				<div className="flex flex-wrap gap-12 xl:gap-6 max-w-[90vw] xl:max-w-none">
					{stats.map((stat, index) => (
						<div
							key={index}
							className="flex items-center justify-center flex-1 gap-4 xl:justify-start">
							<CountUp
								end={stat.num}
								duration={5}
								delay={2}
								className="text-4xl font-extrabold xl:text-6xl"
							/>
							<p
								className={`${
									stat.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
								} leading-snug text-white/80`}>
								{stat.text}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
