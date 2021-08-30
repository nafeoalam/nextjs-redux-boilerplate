import { Box, CircularProgress } from '@material-ui/core'
import React from 'react'

const Loader = () => {
    return (
        <Box
            width="100%"
            m={5}
            justifyContent="center" display="flex">
            <CircularProgress color='primary' size={150} />
        </Box>
    )
}

export default Loader
