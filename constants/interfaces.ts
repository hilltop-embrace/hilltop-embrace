export interface NavItem {
	title: string
	path: `/${string}`
	isCta?: boolean
}

export interface ContactItem {
	title: string
	url: string
	icon: JSX.Element
}

export interface ContactFormInputs {
	name: string
	email: string
	message: string
}
