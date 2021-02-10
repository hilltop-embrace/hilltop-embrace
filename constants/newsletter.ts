import * as yup from "yup"

export const NEWSLETTER_FORM_SCHEMA = yup.object().shape({
	MERGE0: yup
		.string()
		.email("Please enter a valid email address.")
		.required("Please enter your email address."),
})

export const REGISTERED_COOKIE = "registeredNewsletter"
