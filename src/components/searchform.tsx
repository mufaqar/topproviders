import { FaMagnifyingGlass } from 'react-icons/fa6'
import { useRouter } from 'next/navigation'
import { useRouter as Router } from 'next/router'
import React, { useState } from 'react'
//import { useQuery } from '@apollo/client';
//import { ProviderByCITES } from '@/config/query';



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




const SearchForm = () => {
  const [zipcode, setzipcode] = useState<string>();
  const [pro_type, setpro_type] = useState<string>();
  const router = useRouter();
  const router2 = Router();
  const [loader, setloader] = useState<boolean>(false);
  const [resultNotFound, setResultNotFound] = useState(false)

  const variables = {
    zipcode: zipcode
  };
  async function fetchData() {
    setloader(true);
    const response = await fetch('https://cblproject.cablemovers.net/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ query, variables: variables }),
    });
    const respons = await response.json();

    if (respons?.data?.zones?.nodes.length > 0) {
      router.push(`/${respons.data?.zones?.nodes[0]?.states?.nodes[0]?.slug}/${respons.data.zones?.nodes[0]?.cities.nodes[0].slug}?zipcode=${zipcode}&type=internet`);
      setTimeout(()=>{
        setloader(false);
      }, router2.pathname === "/" ? 2000 : 1000)
      setResultNotFound(false)
    }
    else {
      setloader(false);
      setResultNotFound(true)
    }
  }

  function handleState() {
    fetchData();
  }

  const handleKeyDown = (event:any) => {
    if (event.key === 'Enter') {
      fetchData()
    }
  }

  return (
    <>
      {loader ? <div className='fixed z-50 inset-0 !w-full bg-black/60 flex items-center flex-col justify-center'><div className="custom-loader"></div></div> :
      <form>
        <div className="relative flex items-center w-full m-auto serch_form">
          <FaMagnifyingGlass className="absolute ml-3" />
          <input type="text" onKeyDown={handleKeyDown} placeholder="Enter Zip Code" maxLength={5} name="zip_code" value={zipcode} onChange={(e) => setzipcode(e.target.value)} className="w-full py-3 pl-10 pr-8 border outline-none md:w-80 border-zinc-400 rounded-l-md" />
          <button className="px-4 py-[13px] font-semibold text-white bg-[#ef9831] border-[#ef9831] rounded-r-md" onClick={handleState}>Search</button>
        </div>
        {resultNotFound && <div className='w-full py-2 text-red-500'>Result not found! please enter correct zipcode </div>}
        </form>
      }
    </>
  )
}

export default SearchForm