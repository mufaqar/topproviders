import React from 'react'
import Link from 'next/link'
const Inter_Service = ({ data, type }: any) => {

    return (
        <div className={`min-w-[120px] md:w-full  grid  ${type === 'tv' ? 'md:grid-cols-7' : 'md:grid-cols-8'} dtable`}>
            <div className="w-full md:border-r border-r-0 md:border-b-0 border-b grid justify-center md:p-5 p-2 md:h-auto h-[120px] items-center">
                <div>
                    <p className="text-center md:text-base text-xs">

                        <Link href={`/providers/${data.slug}`} target="_blank" >  {data?.provider} </Link>
                    </p>
                </div>
            </div>
            <div className="w-full md:border-r border-r-0 md:border-b-0 border-b grid justify-center md:p-5 p-2 md:h-auto h-[120px] items-center">
                <div>
                    {
                        data?.type.map((t: any, i: number) => (
                            <p className="text-center md:text-base text-xs" key={i}>
                                {t.name}
                            </p>
                        ))
                    }

                </div>
            </div>
            <div className="w-full md:border-r border-r-0 md:border-b-0 border-b grid justify-center md:p-5 p-2 md:h-auto h-[120px] items-center">
                <div>
                    <p className="text-center md:text-base text-xs">
                        {data?.summery?.summarySpeed}  {type !== 'tv' && (<>Mbps</>)}

                    </p>
                </div>
            </div>

            {type === "internet-tv" &&
                <div className="w-full md:border-r border-r-0 md:border-b-0 border-b grid justify-center md:p-5 p-2 md:h-auto h-[120px] items-center">
                    <div>
                        <p className="text-center md:text-base text-xs">

                            {data?.summery?.summaryChannel}
                        </p>
                    </div>
                </div>
            }
            <div className="w-full md:border-r border-r-0 md:border-b-0 border-b grid justify-center md:p-5 p-2 md:h-auto h-[120px] items-center md:col-span-3">
                <div>
                    <p className="text-center md:text-base text-xs">
                        {data?.summery?.summaryFeatures}
                    </p>
                </div>
            </div>
            <div className="w-full grid justify-center md:p-5 p-2 md:h-auto h-[120px] items-center">
                <div>
                    <p className="text-center md:text-base text-xs">
                        ${data?.price}/mo
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Inter_Service