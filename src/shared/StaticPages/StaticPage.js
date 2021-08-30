import React from 'react'

const StaticPage = ({ pageContent }) => {
    const createHTML = (htmlElements) => {
        return { __html: htmlElements };
    };
    return (
        <div
            dangerouslySetInnerHTML={createHTML(
                pageContent.rendered
            )}
        ></div>
    )
}

export default StaticPage
