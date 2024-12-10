import Link from "next/link";
import Nav from "./Nav";
import { Button } from "./ui/button";

export default function Header() {
	return (
		<header className="py-8 text-white xl:py-2 ">
			<div className="container flex items-center justify-between mx-auto">
				<Link href="/">
					<h1 className="text-4xl font-semibold">
						Luke <span className="text-accent">.</span>
					</h1>
				</Link>
				<div className="items-center hidden gap-8 xl:flex">
					<Nav />
					<Link href="/contact">
						<Button>Hire me</Button>
					</Link>
				</div>
			</div>
		</header>
	);
}
