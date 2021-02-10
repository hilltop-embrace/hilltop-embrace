import {
	AiOutlineInstagram,
	AiOutlineLinkedin,
	AiOutlineMail,
} from "react-icons/ai"
import * as yup from "yup"
import { ContactItem } from "./interfaces"

export const CONTACT_ITEMS: ContactItem[] = [
	{
		title: "Instagram",
		url: "https://www.instagram.com/hilltopembrace/",
		icon: <AiOutlineInstagram />,
	},
	{
		title: "LinkedIn",
		url: "https://www.linkedin.com/company/hilltop-embrace/",
		icon: <AiOutlineLinkedin />,
	},
	{
		title: "Email",
		url: "mailto:hilltopembrace@gmail.com",
		icon: <AiOutlineMail />,
	},
]

export const EMAIL_ADDRESS = "hilltopembrace@gmail.com"

export const CONTACT_FORM_SCHEMA = yup.object().shape({
	name: yup.string().required("Please enter your name."),
	email: yup
		.string()
		.email("Please enter a valid email address.")
		.required("Please enter your email address."),
	message: yup.string().required("Please enter a message."),
})

export const ADDRESS = ["323 George Street", "New Brunswick, NJ 08901"]
