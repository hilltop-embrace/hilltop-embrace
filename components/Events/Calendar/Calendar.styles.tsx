import { makeStyles } from "@material-ui/core/styles"

const useCalendarStyles = makeStyles((theme) => ({
	root: {
		"& .rbc-month-view": {
			borderTop: "none",
			borderLeft: "none",
			borderRight: "none",
			"& .rbc-month-header": {
				display: "flex",
				paddingBottom: theme.spacing(0.5),
				borderBottom: `1px solid ${theme.palette.text.primary}`,
				"& .rbc-header": {
					width: "calc(100% / 7)",
					textAlign: "center",
					fontWeight: "bold",
					border: "none",
				},
			},
			"& .rbc-month-row": {
				overflow: "visible",
				"& .rbc-row-bg": {
					borderLeft: "1px solid #DDD",
					borderRight: "1px solid #DDD",
					"& .rbc-off-range-bg": {
						backgroundColor: "transparent",
					},
				},
				"& .rbc-row-content": {
					minHeight: 100,
					"& .rbc-event": {
						backgroundColor: "transparent",
						padding: 0,
					},
				},
			},
		},
	},
}))

export default useCalendarStyles
