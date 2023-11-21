import React from 'react'

const Technology_Box = ({ title, content, icon }: any) => {
    return (
        <div className="block rounded-tr-[50px] rounded-bl-[50px] rounded-md border border-gray-100 p-8 shadow-xl transition hover:border-[#6041BB]/10 hover:shadow-[#6041BB]/10">
            <span className="text-4xl !text-[#6041BB] block w-fit">
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