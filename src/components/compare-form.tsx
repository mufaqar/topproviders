import { Providers_Data } from '@/const/exports'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

function Compare_Form() {
    const [providerOne, setProviderOne] = useState<any>()
    const [providerTwo, setProviderTwo] = useState<any>()
    const [message, setMessage] = useState(false)
    const router = useRouter()

    const handleCompare = () => {
        if (providerOne && providerTwo) {
            router.push(`/insights?providerOne=${providerOne}&providerTwo=${providerTwo}`)
            setMessage(false)
        }else{
            setMessage(true)
        }
    }

    return (
<>
        <div className='flex md:flex-row flex-col gap-4'>
            <div className="w-full flex flex-col">
                <label htmlFor='provider1' className="text-base font-semibold leading-none hidden">Provider1</label>
                <select
                    id="provider1"
                    name='provider1'
                    onChange={(e)=>setProviderOne(e.target.value)}
                    className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 bg-gray-100 border rounded border-gray-200 placeholder-gray-100">
                    <option value="provider1">Provider1</option>
                    {Providers_Data.map((option: any, idx: any) => (
                        <option key={idx} value={option.link.replace('/providers/', '')}>{option.name}</option>
                    ))}
                </select>
            </div>
            <div className="w-full flex flex-col">
                <label htmlFor='provider2' className="text-base font-semibold leading-none hidden">Provider2</label>
                <select
                    id="provider2"
                    name='provider2'
                    onChange={(e)=>setProviderTwo(e.target.value)}
                    className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 bg-gray-100 border rounded border-gray-200 placeholder-gray-100">
                    <option value="privider2">Provider2</option>
                    {Providers_Data.map((option: any, idx: any) => (
                        <option key={idx} value={option.link.replace('/providers/', '')}>{option.name}</option>
                    ))}
                </select>

            </div>
            <button onClick={handleCompare} className="text-base font-semibold leading-none text-white py-2 px-10 bg-[#FECE2F] hover:bg-white/20 rounded">
                Compare
            </button>
        </div>
        <p className='mt-2 text-red-500'>{message && 'Please Select Both Provider First!'}</p>
        </>

    )
}

export default Compare_Form