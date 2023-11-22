import { Providers_Data } from '@/const/exports'
import React from 'react'

function Compare_Form() {
    return (
        <div>
            <form className='flex md:flex-row flex-col gap-4'>
                <div className="w-full flex flex-col">
                    <label htmlFor='provider1' className="text-base font-semibold leading-none hidden">Provider1</label>
                    <select
                        id="provider1"
                        name='provider1'
                        className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 bg-gray-100 border rounded border-gray-200 placeholder-gray-100">
                        <option value="provider1">Provider1</option>
                        {Providers_Data.map((option: any, idx: any) => (
                            <option key={idx} value={option.name}>{option.name}</option>
                        ))}
                    </select>
                </div>
                <div className="w-full flex flex-col">
                    <label htmlFor='provider2' className="text-base font-semibold leading-none hidden">Provider2</label>
                    <select
                        id="provider2"
                        name='provider2'
                        className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 bg-gray-100 border rounded border-gray-200 placeholder-gray-100">
                        <option value="privider2">Provider2</option>
                        {Providers_Data.map((option: any, idx: any) => (
                            <option key={idx} value={option.name}>{option.name}</option>
                        ))}
                    </select>

                </div>
                <button type='submit' className="text-base font-semibold leading-none text-white py-2 px-10 bg-[#FECE2F] hover:bg-white/20 rounded">
                    Compare
                </button>
            </form>
        </div>
    )
}

export default Compare_Form