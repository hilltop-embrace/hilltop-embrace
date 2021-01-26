import { DAYS } from "@/constants"
import { Document } from "@contentful/rich-text-types"

export interface AboutItem {
	title: string
	paragraphs: string[]
}

export interface Event {
	title: string
	description?: string
	location?: string
	beginningDate: string
	endingDate: string
	eventType?: {
		fields: {
			type: string
			color: string
		}
	}
	customColor?: string
	excludedDates?: string[]
	days?: typeof DAYS[number][]
}

export interface Position {
	title: string
	description: Document
}
