"use client";

import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";
import { DialogTitle } from "@radix-ui/react-dialog";

const VisuallyHidden = ({ children }) => (
	<span
		style={{
			position: "absolute",
			width: "1px",
			height: "1px",
			margin: "-1px",
			padding: "0",
			border: "0",
			clip: "rect(0 0 0 0)",
			overflow: "hidden",
		}}>
		{children}
	</span>
);

const links = [
	{ name: "home", path: "/" },
	{ name: "services", path: "/services" },
	{ name: "resume", path: "/resume" },
	{ name: "work", path: "/work" },
	{ name: "contact", path: "/contact" },
];

export default function MobileNav() {
	const pathname = usePathname();
	return (
		<Sheet>
			<SheetTrigger className="flex items-center justify-center">
				<CiMenuFries className="text-[32px] text-accent" />
			</SheetTrigger>
			<SheetContent className="flex flex-col">
				{/* Add DialogTitle for accessibility */}
				<DialogTitle>
					<VisuallyHidden>Mobile Navigation Menu</VisuallyHidden>
				</DialogTitle>

				<div className="mt-32 mb-40 text-2xl text-center">
					<Link href="/">
						<h1 className="text-4xl font-semibold">
							Luke<span className="text-accent">.</span>
						</h1>
					</Link>
				</div>
				<nav className="flex flex-col items-center justify-center gap-8">
					{links.map((link) => (
						<Link
							href={link.path}
							key={link.name}
							className={`${
								link.path === pathname && "text-accent border-b-2 border-accent"
							} text-xl capitalize hover:text-accent transition-all`}>
							{link.name}
						</Link>
					))}
				</nav>
			</SheetContent>
		</Sheet>
	);
}
