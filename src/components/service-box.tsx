import React from 'react'

const ServiceBox = ({ img, title, content, custm_Bg }: any) => {
    return (
        <div className="w-full py-7 px-4 bg-white shadow-[0_0_12px_0_rgba(0,0,0,0.20)] rounded-tl-[90px] rounded-br-[90px] rounded-tr-[3px] rounded-bl-[3px]">
            <div className="mt-5">
                <span className={`block rounded-full w-fit mx-auto p-4 ${custm_Bg}`}>
                    {img}
                </span>
                <h2 className="mt-5 text-center text-base font-bold text-[#071F37]">
                    {title}
                </h2>
                <div>
                    <p className="px-5 mt-5 text-base text-center text-[#464646]">
                        {content}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ServiceBox