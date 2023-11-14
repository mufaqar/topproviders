import React from 'react'

function CompareBox({ img, title, content, custm_Bg }: any) {
    return (
        <div className="w-full py-7 px-4">
            <div className="flex items-start gap-4">
                <span className={`block rounded-full w-fit p-3 ${custm_Bg}`}>
                    {img}
                </span>
                <div>
                    <h2 className="md:text-3xl text-xl font-bold text-[#071F37] mb-2">
                        {title}
                    </h2>
                    <p className="text-base text-[#34344B]">
                        {content}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CompareBox