import React from 'react'

const Technology_Box = ({ title, content, icon }: any) => {
    return (
        <div className="block rounded-xl p-8 shadow-xl transition hover:border-[#215690]/10 hover:shadow-[#215690]/10 bg-white/10">
            <span className="text-4xl !text-white block w-fit mx-auto">
                {icon}
            </span>
            <h2 className="mt-4 text-xl font-bold text-white text-center">
               <span dangerouslySetInnerHTML={{__html:title}}></span> 
            </h2>
            <p className="mt-1 text-base text-white text-center">
                {content}
            </p>
        </div>
    )
}

export default Technology_Box