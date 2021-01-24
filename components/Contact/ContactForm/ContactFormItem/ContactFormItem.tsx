import { BaseTextFieldProps, TextField } from "@material-ui/core"
import { FieldError } from "react-hook-form"
import useContactFormItemStyles from "./ContactFormItem.styles"

interface ContactFormItemProps extends BaseTextFieldProps {
	name: string
	label: string
	inputRef: React.Ref<any>
	schemaError: FieldError | undefined
}

const ContactFormItem: React.FC<ContactFormItemProps> = ({
	name,
	label,
	inputRef,
	schemaError,
	...props
}) => {
	const classes = useContactFormItemStyles()

	return (
		<TextField
			inputRef={inputRef}
			name={name}
			id={name}
			label={label || name}
			fullWidth
			error={!!schemaError}
			InputLabelProps={{
				className: classes.label,
			}}
			InputProps={{
				className: classes.root,
			}}
			helperText={schemaError?.message}
			variant="outlined"
			{...props}
		/>
	)
}

export default ContactFormItem
