import styles from "./Search.module.css"

//Material UI
import SearchIcon from '@material-ui/icons/Search';
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { useTheme } from "@material-ui/core/styles"

export default function Search({ style, placeholder, onChange }) {
    const theme = useTheme()
    const mediumScreen = useMediaQuery(theme.breakpoints.down("md"))
    return (
        <div className={styles.InputSec} style={{ ...style, padding: mediumScreen ? "2rem 2.4rem" : "2.8rem 3.2rem" }} >
            <SearchIcon className={styles.InputSec__Icon} />
            <div style={{ padding: "0 2.8rem" }}>
                |
            </div>
            <input placeholder={placeholder || 'Enter Text Here..'} className={styles.InputSec__Input} onChange={onChange} />
        </div>
    )
}
