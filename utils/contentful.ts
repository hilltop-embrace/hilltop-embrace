const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN

const client = require("contentful").createClient({
	space: space,
	accessToken: accessToken,
})

export async function fetchRecurringEvents() {
	const entries = await client.getEntries({
		content_type: "recurringEvent",
		order: "fields.beginningDate",
	})
	if (entries.items) return entries.items
	console.log("Error getting recurring events.")
}

export const fetchOneTimeEvents = async () => {
	const entries = await client.getEntries({
		content_type: "oneTimeEvent",
		order: "fields.beginningDate",
	})
	if (entries.items) return entries.items
	console.log("Error getting one-time events.")
}

export const fetchPositions = async () => {
	const entries = await client.getEntries({
		content_type: "position",
		order: "fields.title",
	})
	if (entries.items) return entries.items
	console.log("Error getting positions.")
}
