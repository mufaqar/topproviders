"use client"

import { FaMagnifyingGlass } from 'react-icons/fa6'
import { usePathname, useRouter } from 'next/navigation'
import React, { useState } from 'react'
import Loader from './provider/Loader';

const query = `
query zones($zipcode: String = "") {
   zones(where: {title: $zipcode}) {
     nodes {
       title
       cities {
         nodes {
           name
           slug
         }
       }
       states {
         nodes {
           name
           slug
         }
       }
     }
   }
 }
`;


const SearchForm = ({types, closeModal}:any) => {
  const [zipcode, setzipcode] = useState<string>();
  const [proType, setProType] = useState<string>('internet');
  const router = useRouter();
  const path = usePathname();
  const [loader, setloader] = useState<boolean>(false);
  const [resultNotFound, setResultNotFound] = useState(false)

  const variables = {
    zipcode: zipcode
  };
  async function fetchData() {
    setloader(true);
    const response = await fetch('https://topproviders.mufaqar.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ query, variables: variables }),
    });
    const respons = await response.json();

    if (respons?.data?.zones?.nodes.length > 0) {
      router.push(`/${proType}/zipcode-${zipcode}`);
      setTimeout(() => {
        setloader(false);
      }, path === "/" ? 2000 : 1000)
      setResultNotFound(false)
      types && closeModal()
    }
    else {
      setloader(false);
      setResultNotFound(true)
    }
  }

  function handleState() {
    fetchData();
  }

  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      fetchData()
    }
  }

  return (
    <>
      {loader ? <Loader/> :
        <form>
          <div className="relative flex items-center w-full m-auto serch_form">
            <FaMagnifyingGlass className="absolute ml-3" />
            <input type="text" onKeyDown={handleKeyDown} placeholder="Enter Zip Code" maxLength={5} name="zip_code" value={zipcode} onChange={(e) => setzipcode(e.target.value)} className="w-full py-3 pl-10 pr-8 border outline-none md:w-80 border-zinc-400 rounded-l-md" />
            <button className="px-4 py-[13px] font-semibold text-white bg-[#ef9831] border-[#ef9831] rounded-r-md" onClick={handleState}>Search</button>
          </div>
          {
            types && <div className="flex  mt-6 md:gap-3 md:mt-5 font-[Roboto]">
            <label onClick={()=>setProType('internet')} className='flex cursor-pointer items-center gap-1'> <input type="radio" name="" id="Internet" className="w-10 h-7" checked={proType === 'internet'}/> Internet</label>
            <label onClick={()=>setProType('tv')} className='flex cursor-pointer items-center gap-1'><input type="radio" name="TV" id="" className="w-10 h-7" checked={proType === 'tv'}/> TV</label>
            <label onClick={()=>setProType('internet-tv')} className='flex cursor-pointer items-center gap-1'><input type="radio" name="" id="Bundle" className="w-10 h-7" checked={proType === 'internet-tv'}/> Internet+TV</label>
          </div>
          }
          {resultNotFound && <div className='w-full py-2 text-red-500'>No Result found! please enter correct zipcode </div>}
        </form>
      }
    </>
  )
}

export default SearchForm
