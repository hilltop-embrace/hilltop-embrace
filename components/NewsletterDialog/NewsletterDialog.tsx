import {
	NewsletterFormInputs,
	NEWSLETTER_FORM_SCHEMA,
	REGISTERED_COOKIE,
} from "@/constants"
import { yupResolver } from "@hookform/resolvers/yup"
import { Button, Dialog, Grid, Typography } from "@material-ui/core"
import { useForm } from "react-hook-form"
import FormItem from "../FormItem"
import { Content, Header } from "../Typography"
import useNewsletterDialogStyles from "./NewsletterDialog.styles"

interface NewsletterDialogProps {
	open: boolean
	onClose: () => void
}

const NewsletterDialog: React.FC<NewsletterDialogProps> = ({
	onClose,
	open,
}) => {
	const { register, handleSubmit, errors } = useForm<NewsletterFormInputs>({
		resolver: yupResolver(NEWSLETTER_FORM_SCHEMA),
		mode: "all",
	})

	const classes = useNewsletterDialogStyles()

	const onSubmit = () => {
		window.localStorage.setItem(REGISTERED_COOKIE, "true")
		onClose()
	}

	return (
		<Dialog
			open={open}
			onClose={onClose}
			style={{ zIndex: 10001 }}
			classes={{ paper: classes.root }}
		>
			<Header>Stay in touch with us!</Header>
			<Content>
				<Typography variant="body1">
					Subscribe to our newsletter to stay up-to-date with updates about the
					organization and upcoming events.
				</Typography>
				<form
					onSubmit={handleSubmit(onSubmit)}
					action={process.env.NEXT_PUBLIC_MAILCHIMP_SUBSCRIBE_URL}
					method="POST"
				>
					<input
						type="hidden"
						name="u"
						value={process.env.NEXT_PUBLIC_MAILCHIMP_USER_ID}
					/>
					<input
						type="hidden"
						name="id"
						value={process.env.NEXT_PUBLIC_MAILCHIMP_AUDIENCE_ID}
					/>
					<Grid container spacing={2}>
						<Grid item xs={8}>
							<FormItem
								inputRef={register}
								label="Email"
								name="MERGE0"
								schemaError={errors.MERGE0}
							/>
						</Grid>
						<Grid item xs={4}>
							<Button
								variant="outlined"
								color="secondary"
								type="submit"
								fullWidth
								className={classes.button}
							>
								Subscribe
							</Button>
						</Grid>
					</Grid>

					{/* 
    <!-- people should not fill these in and expect good things -->
    <div class="field-shift" aria-label="Please leave the following three fields empty">
        <label for="b_name">Name: </label>
        <input type="text" name="b_name" tabindex="-1" value="" placeholder="Freddie" id="b_name" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAfBJREFUWAntVk1OwkAUZkoDKza4Utm61iP0AqyIDXahN2BjwiHYGU+gizap4QDuegWN7lyCbMSlCQjU7yO0TOlAi6GwgJc0fT/fzPfmzet0crmD7HsFBAvQbrcrw+Gw5fu+AfOYvgylJ4TwCoVCs1ardYTruqfj8fgV5OUMSVVT93VdP9dAzpVvm5wJHZFbg2LQ2pEYOlZ/oiDvwNcsFoseY4PBwMCrhaeCJyKWZU37KOJcYdi27QdhcuuBIb073BvTNL8ln4NeeR6NRi/wxZKQcGurQs5oNhqLshzVTMBewW/LMU3TTNlO0ieTiStjYhUIyi6DAp0xbEdgTt+LE0aCKQw24U4llsCs4ZRJrYopB6RwqnpA1YQ5NGFZ1YQ41Z5S8IQQdP5laEBRJcD4Vj5DEsW2gE6s6g3d/YP/g+BDnT7GNi2qCjTwGd6riBzHaaCEd3Js01vwCPIbmWBRx1nwAN/1ov+/drgFWIlfKpVukyYihtgkXNp4mABK+1GtVr+SBhJDbBIubVw+Cd/TDgKO2DPiN3YUo6y/nDCNEIsqTKH1en2tcwA9FKEItyDi3aIh8Gl1sRrVnSDzNFDJT1bAy5xpOYGn5fP5JuL95ZjMIn1ya7j5dPGfv0A5eAnpZUY3n5jXcoec5J67D9q+VuAPM47D3XaSeL4AAAAASUVORK5CYII=&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%;" />

        <label for="b_email">Email: </label>
        <input type="email" name="b_email" tabindex="-1" value="" placeholder="youremail@gmail.com" id="b_email" />

        <label for="b_comment">Comment: </label>
        <textarea name="b_comment" tabindex="-1" placeholder="Please comment" id="b_comment"></textarea>
    </div>

    <div id="mergeTable" class="mergeTable">
        
        
        <div class="mergeRow dojoDndItem mergeRow-email" id="mergeRow-0">
            <label for="MERGE0">Email Address <span class="req asterisk">*</span></label>
            <div class="field-group">
                <input type="email" autocapitalize="off" autocorrect="off" name="MERGE0" id="MERGE0" size="25" value="" />
                
                
            </div>
            
        </div>
        
        
        
        
        
        
        
        
        
        
        
        


        

        

        
    </div>

    <div class="submit_container clear">
        <input type="submit" class="formEmailButton" name="submit" value="Subscribe" />
    </div>
    <input type="hidden" name="ht" value="941bda35ab51d7392c6f6ff6b95c347ee6dcf4c8:MTYxMjk3OTI5MS42NTEx" />
    <input type="hidden" name="mc_signupsource" value="hosted" /> */}
				</form>
			</Content>
		</Dialog>
	)
}

export default NewsletterDialog
