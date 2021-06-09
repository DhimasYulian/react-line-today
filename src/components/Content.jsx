import React from 'react'
import ContentItem from './ContentItem'

const Content = ({content}) => {
    return (
        <div className="bg-gray-100 w-full overflow-x-hidden">
            {
                content && content.map((item, idx) => (
                    <ContentItem sections={item.sections} title={item.title} key={idx} />
                ))
            } 
        </div>
    )
}

export default Content
