import React from 'react'

const DynamicPage = ({pageContext}) => {
    return(
        <>
            <h2>Hello dynamic page from {pageContext.name}.</h2>
            <h3>This page is create dynamically at build time.</h3>
        </>
    )
}

export default DynamicPage