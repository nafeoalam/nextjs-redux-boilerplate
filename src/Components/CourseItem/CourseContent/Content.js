import React from 'react'
import SingleContent from './SingleContent'
const Content = ({ customClass, courseModule }) => {
    return (
        <div className="w-100">
            {courseModule?.map((module, index) => {
                return <SingleContent key={module.id} module={module} index={index} customClass={customClass} />
            })}


        </div>
    )
}

export default Content
