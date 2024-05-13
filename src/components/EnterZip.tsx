import React from 'react'

const EnterZip = ({handleModelBox}:any) => {
  return (
    <>
    <section className="h-[calc(100vh-68px)] flex items-center bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className='flex justify-center flex-col items-center'>
                        <h1 className="sm:text-5xl text-2xl font-bold text-center max-w-[850px] mx-auto capitalize leading-10">
                            Search TV Service Providers <br /><span className="text-[#ef9831] "></span>
                        </h1>
                        <p className="text-xl text-center font-[Roboto] my-5">
                            Enter your zip so we can find the best providers in your area:
                        </p>
                        <button className="text-[#ef9831] border hover:bg-[#ef9831] hover:text-white border-[#ef9831] p-3 px-8 rounded-lg" onClick={handleModelBox}>Enter your zip code</button>
                    </div>
                </div>
            </section>
    </>
  )
}

export default EnterZip