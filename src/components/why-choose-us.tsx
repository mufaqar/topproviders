import React from 'react'
import { FaHandshake, FaMoneyBill, FaRegClock, FaUserTie } from 'react-icons/fa6'

const Why_ChooseUs = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className='text-center md:text-4xl text-2xl font-bold'>
                        Why Choose Top Providers?
                    </h2>
                    <p className='text-xl font-normal my-4'>
                        Finding Internet and TV service providers is complex and time consuming but Top Providers make the search process so easy and simple that saves you time and money. Here’s why you should shop with us.
                    </p>
                </div>
                <div className="mt-8 grid md:grid-cols-2 grid-cols-1 gap-7">
                    <div className="block rounded-tr-[50px] rounded-bl-[50px] rounded-md border border-gray-100 p-8 shadow-xl transition hover:border-[#6041BB]/10 hover:shadow-[#6041BB]/10">
                        <FaHandshake className="h-10 w-10 text-[#6041BB]" />
                        <h2 className="mt-4 text-xl font-bold">
                            Convenience
                        </h2>
                        <p className="mt-1 text-base">
                            Top Providers can simplify the task of setting up your Internet or TV service. Instead of searching individual provider sites do all your research, compare plans and order service all on one site.
                        </p>
                    </div>
                    <div className="block rounded-tr-[50px] rounded-bl-[50px] rounded-md border border-gray-100 p-8 shadow-xl transition hover:border-[#6041BB]/10 hover:shadow-[#6041BB]/10">
                        <FaRegClock className="h-10 w-10 text-[#6041BB]" />
                        <h2 className="mt-4 text-xl font-bold">
                            Time Savings
                        </h2>
                        <p className="mt-1 text-base">
                            Top Providers can help you save time. Enter your zip code once and compare all options available at your address.
                        </p>
                    </div>
                    <div className="block rounded-tr-[50px] rounded-bl-[50px] rounded-md border border-gray-100 p-8 shadow-xl transition hover:border-[#6041BB]/10 hover:shadow-[#6041BB]/10">
                        <FaMoneyBill className="h-10 w-10 text-[#6041BB]" />
                        <h2 className="mt-4 text-xl font-bold">
                            Cost Savings
                        </h2>
                        <p className="mt-1 text-base">
                            Instead of tracking offers from multiple provider websites, compare current prices in real time at Top Providers and get the best deal that fit your budget.
                        </p>
                    </div>
                    <div className="block rounded-tr-[50px] rounded-bl-[50px] rounded-md border border-gray-100 p-8 shadow-xl transition hover:border-[#6041BB]/10 hover:shadow-[#6041BB]/10">
                        <FaUserTie className="h-10 w-10 text-[#6041BB]" />
                        <h2 className="mt-4 text-xl font-bold">
                            Expert Advice
                        </h2>
                        <p className="mt-1 text-base">
                            Our trained agents can answer any service related question and recommend the best options available in your area.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Why_ChooseUs