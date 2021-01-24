import { AiOutlineInstagram, AiOutlineMail } from "react-icons/ai"
import { ContactItem } from "./interfaces"

export const CONTACT_ITEMS: ContactItem[] = [
	{
		title: "Instagram",
		url: "https://www.instagram.com/hilltopembrace/",
		icon: <AiOutlineInstagram />,
	},
	{
		title: "Email",
		url: "mailto:hilltopembrace@gmail.com",
		icon: <AiOutlineMail />,
	},
]
