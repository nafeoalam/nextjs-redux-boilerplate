import React from "react"
import { withStyles } from "@material-ui/core/styles"
import { Button, TextField } from "@material-ui/core"

// The `withStyles()` higher-order component is injecting a `classes`
// prop that is used by the `Button` component.
const styles = () => ({
	button: {
		borderRadius: "50px",
	},
})

const customizedButton = ({
	children,
	classes,
	variant,
	color,
	style,
	onClick,
	...rest
}) => {
	return (
		<Button
			variant={variant || "outlined"}
			color={color || "primary"}
			className={classes.button}
			style={style}
			disableElevation
			onClick={onClick}
			{...rest}
		>
			{children}
		</Button>
	)
}
export default withStyles(styles)(customizedButton)
