import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
	{ icon: <FaGithub />, path: "" },
	{ icon: <FaLinkedinIn />, path: "" },
	{ icon: <FaYoutube />, path: "" },
	{ icon: <FaTwitter />, path: "" },
];

export default function Social({ containerStyles, iconsStyles }) {
	return (
		<div className={containerStyles}>
			{socials.map((social, idx) => (
				<Link href={social.path} key={idx} className={iconsStyles}>
					{social.icon}
				</Link>
			))}
		</div>
	);
}
