import Link from 'next/link'
import { useParams } from 'next/navigation';
import React, { useState } from 'react'

const Provider_Nav_State = () => {

    const path = useParams();
 
    var state = `/${path?.zipcode?.[1]}`;

    const [nav, setNav] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 350) {
            setNav(true);
        }
        else {
            setNav(false);
        }
    }
    if (typeof window !== "undefined") {

        window.addEventListener('scroll', changeBackground);

    }

    return (
        <section className={`bg-[#6041BB] py-5 shadow-sm border-y border-zinc-400/20 !z-10 ${nav ? '' : 'sticky'
            }`}>
            <div className="container mx-auto px-4">
                <div>
                    <ul className='flex md:gap-3 gap-1.5 items-center'>
                        <li>
                            <Link href={`/internet${state}`} className='bg-white text-[#6041BB] hover:bg-white/20 hover:text-white md:text-base text-xs text-center inline-block w-full font-medium font-[Roboto] md:px-3.5 px-1.5 py-2 rounded-tl-3xl rounded-br-3xl rounded-sm'>
                                Internet Providers
                            </Link>
                        </li>
                        <li>
                            <Link href={`/tv${state}`} className='bg-white text-[#6041BB] hover:bg-white/20 hover:text-white md:text-base text-xs text-center inline-block w-full font-medium font-[Roboto] md:px-3.5 px-1.5 py-2 rounded-tl-3xl rounded-br-3xl rounded-sm'>
                                TV Providers
                            </Link>
                        </li>
                        <li>
                            <Link href={`/internet-tv${state}`} className='bg-white text-[#6041BB] hover:bg-white/20 hover:text-white md:text-base text-xs text-center inline-block w-full font-medium font-[Roboto] md:px-3.5 px-1.5 py-2 rounded-tl-3xl rounded-br-3xl rounded-sm'>
                                Internet and TV Providers
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Provider_Nav_State