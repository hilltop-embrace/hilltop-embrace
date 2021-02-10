import FormItem from "@/components/FormItem"
import { ContactFormInputs, CONTACT_FORM_SCHEMA } from "@/constants"
import { yupResolver } from "@hookform/resolvers/yup"
import { Button, FormHelperText, Grid } from "@material-ui/core"
import axios from "axios"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import useContactFormStyles from "./ContactForm.styles"

const ContactForm: React.FC = () => {
	const {
		register,
		handleSubmit,
		errors,
		formState,
		reset,
	} = useForm<ContactFormInputs>({
		resolver: yupResolver(CONTACT_FORM_SCHEMA),
		mode: "all",
	})
	const { isValid, isSubmitting } = formState
	const [isSubmitSuccessful, setIsSubmitSuccessful] = useState<boolean>(false)

	const onSubmit = (data: ContactFormInputs) => {
		axios({
			method: "POST",
			url: process.env.NEXT_PUBLIC_CONTACT_FORM_URL,
			data,
		})
			.then(() => {
				reset({})
				setIsSubmitSuccessful(true)
			})
			.catch(() => {
				alert(
					"There was an issue sending your message. Please try again later!"
				)
				setIsSubmitSuccessful(false)
			})
	}

	useEffect(() => {
		if (isSubmitSuccessful) {
			const timeout = setTimeout(() => {
				setIsSubmitSuccessful(false)
				clearTimeout(timeout)
			}, 30000)
		}
	}, [isSubmitSuccessful])

	const classes = useContactFormStyles()

	return (
		<form onSubmit={handleSubmit(onSubmit)} name="contact" method="POST">
			<input type="hidden" name="form-name" value="contact" />
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<FormItem
						inputRef={register}
						name="name"
						label="Name"
						schemaError={errors.name}
					/>
				</Grid>
				<Grid item xs={12}>
					<FormItem
						inputRef={register}
						name="email"
						label="Email Address"
						schemaError={errors.email}
					/>
				</Grid>
				<Grid item xs={12}>
					<FormItem
						inputRef={register}
						name="message"
						label="Message"
						schemaError={errors.message}
						multiline
						rows={6}
					/>
				</Grid>
				<Grid item xs={12}>
					<Button
						variant="outlined"
						color="secondary"
						disabled={!isValid}
						type="submit"
						fullWidth
					>
						{isSubmitting ? "Submitting..." : "Submit"}
					</Button>

					{isSubmitSuccessful && (
						<FormHelperText className={classes.success}>
							Message sent successfully!
						</FormHelperText>
					)}
				</Grid>
			</Grid>
		</form>
	)
}

export default ContactForm
