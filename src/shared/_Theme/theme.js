import { createTheme } from "@material-ui/core/styles"

// Create a theme instance.
let theme = createTheme({
	palette: {
		primary: {
			light: "#f0617f",
			main: "#ed4266",
			dark: "#ea234d",
			contrastText: "#fff",
		},
		secondary: {
			light: "#fafaff",
			main: "#EAE9FF",
			dark: "#cac7ff",
		},
	},
	typography: {
		htmlFontSize: 16,
		fontFamily: [
			"Poppins-Regular",
			"Poppins-Light",
			"Poppins-Medium",
			"Poppins-SemiBold",
			"Poppins-Bold",
			"OpenSans-Light",
			"OpenSans-Regular",
			"OpenSans-SemiBold",
			"OpenSans-Bold",
			"serif",
		].join(","),
		button: {
			fontSize: "14px",
			textTransform: "capitalize",
		},
	},
	overrides: {
		// Style sheet name ⚛️
		MuiButton: {
			// Name of the rule
			outlinedSecondary: {
				"&:hover": {
					background: "#cac7ff !important",
					color: "#fff",
				},
			},
			outlinedPrimary: {
				"&:hover": {
					background: "#f0617f !important",
					color: "#fff",
				},
			},
			root: {},
		},
	},
})
theme.typography.h1 = {
	fontSize: "5.4rem",
	lineHeight: "6.6rem",
	"@media (max-width:768px)": {
		fontSize: "4.5rem",
	},
	"@media (max-width:500px)": {
		fontSize: "3.6rem",
	},
}
theme.typography.h2 = {
	fontSize: "3.6rem",
	lineHeight: "5.4rem",
	"@media (max-width:768px)": {
		fontSize: "3rem",
	},
}
theme.typography.body1 = {
	fontSize: "1.8rem",
}
theme.typography.body2 = {
	fontSize: "1.6rem",
}
export default theme
