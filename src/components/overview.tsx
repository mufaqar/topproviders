import React from 'react'

function OverView({ uniqueServiceType, type, city, state, allProviders }: any) {

    function formatType(type: any) {
        if (type === "internet") {
            return "Internet";
        } else if (type === "tv") {
            return "TV";
        } else if (type === "internet-tv") {
            return "Internet and TV";
        } else {

            return type;
        }
    }
    return (

        <p className='text-xl font-[Roboto] mt-5'>
            As of the time this page was written, {city === '' ? <span className='uppercase'>{state}</span> : city}  has three or more {formatType(type)} service providers offering various types of {formatType(type)} plans to its residents. You’ll likely have options from
            {
                uniqueServiceType.map((t: any, i: number) => (
                    <span key={i}> <span dangerouslySetInnerHTML={{ __html: t.name }} /> {i < uniqueServiceType.length - 1 && ', '} </span>

                ))
            } {formatType(type)} service providers.  {
                allProviders?.slice(0, 2).map((item: any, idx: number) => (
                    <span key={idx}>  {item?.title}, </span>
                ))
            } are the best {formatType(type)} service providers in {city} .
        </p>


    )
}

export default OverView


