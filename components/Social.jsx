import { githubLink, linkedinLink, messengerLink, whatsappLink } from "@/datasource/nishat";
import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaWhatsapp, FaFacebookMessenger } from "react-icons/fa";

const socials = [
	{ icon: <FaGithub />, path: githubLink },
	{ icon: <FaLinkedinIn />, path: linkedinLink },
	{ icon: <FaWhatsapp />, path: whatsappLink },
	{ icon: <FaFacebookMessenger />, path: messengerLink },
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
