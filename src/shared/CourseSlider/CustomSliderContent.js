import React from 'react'

export default function CustomSliderContent({ children, index, ...rest }) {
    return (
        <div {...rest} style={{ margin: "0 15px" }}>
            {children}
        </div>
    );
}
