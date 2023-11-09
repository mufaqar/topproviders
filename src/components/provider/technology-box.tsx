import React from 'react'

const Technology_Box = ({ title, content, icon }: any) => {
    return (
        <div className="block rounded-xl border border-gray-100 p-8 shadow-xl transition hover:border-[#215690]/10 hover:shadow-[#215690]/10">
            <span className="text-4xl !text-[#215690] block w-fit">
                {icon}
            </span>
            <h2 className="mt-4 text-xl font-bold">
               <span dangerouslySetInnerHTML={{__html:title}}></span> 
            </h2>
            <p className="mt-1 text-base">
                {content}
            </p>
        </div>
    )
}

export default Technology_Box