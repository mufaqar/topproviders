import React from 'react'
import {FaTv,FaWifi, FaMobileAlt ,  FaFileAlt } from 'react-icons/fa'

function IconBox({ title, content, icon }: any) { 

    return (
        <div className="block rounded-xl border border-gray-100 px-8 py-10 shadow-xl transition hover:border-[#215690]/10 hover:shadow-[#215690]/10">
            <span className="text-4xl !text-[#215690] text-center block w-fit mx-auto">
               <FaTv/>
            </span>
            <h2 className="mt-5 text-xl font-bold text-center">
                {title}
            </h2>
            <p className="mt-5 text-base text-center">
                {content}
            </p>
        </div>
    )
}

export default IconBox