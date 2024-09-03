'use client'
import PageBanner from '@/components/pageBanner'
import React, { useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import PageHead from '@/components/metas/pagesmeta';
import Link from 'next/link';
import { FaEnvelope, FaMapPin } from 'react-icons/fa6';


function Contact_Us() {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm<any>()
    const [sending, setSending] = useState(false)

    const onSubmit: SubmitHandler<any> = (data: any) => {
        setSending(true)
        fetch('/api/email', {
            method: 'POST',
            headers: {
                Accept: 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then((res) => {
            console.log('Response received');
            if (res.status === 200) {
                console.log('Response succeeded!');
                alert('Message Successfully send.!');
                reset();
                setSending(false)
            }
        });
    }
    return (
        <>

            <div>
                <PageBanner title="Contact Us" />
                <section className="py-16">
                    <div className='container mx-auto px-4 grid md:grid-cols-3 grid-cols-1 gap-7'>
                        <div className='flex flex-col justify-center gap-5 h-full border bg-[#b6ffdd1a] px-6 py-10'>
                            <h3 className="text-xl font-bold leading-7">
                                Have question?
                            </h3>
                            <p className='text-base font-normal '>
                                We’re here to help. Send a message and we’ll get you an answer soon.
                            </p>
                            <ul className=' grid gap-3'>
                                {/* <li>
                                    <Link href="#" className='flex items-center gap-2 text-sm font-normal'>
                                        <FaPhoneAlt className="text-[#FECE2F] border w-7 h-7 p-1.5" /> (+1) 234-567-890
                                    </Link>
                                </li> */}
                                <li>
                                    <Link href="#" className='flex items-center gap-2 text-sm font-normal'>
                                        <FaEnvelope className="text-[#FECE2F] border w-7 h-7 p-1.5" /> contact@topproviders.net
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className='flex items-center gap-2 text-sm font-normal'>
                                        <FaMapPin className="text-[#FECE2F] border w-7 h-7 p-1.5" /> 784/A Zirtoli Bazar, Begumgonj, Noakhali-3800, BD
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="md:col-span-2">
                            <form className="bg-white grid gap-5" onSubmit={handleSubmit(onSubmit)}>
                                <h3 className="text-lg font-bold leading-7 pb-1 border-b">
                                    Get In Touch
                                </h3>
                                <div className="md:flex w-full gap-5 items-center">
                                    <div className="md:w-1/2 flex flex-col">
                                        <label className="text-base font-semibold leading-none hidden">Name</label>
                                        <input {...register("name", { required: true })} tabIndex={0} arial-label="Your Name" type="name" className="text-sm leading-none p-3 focus:outline-none focus:border-[#6041BB] bg-transparent border rounded border-[#F0F0F0] text-[#777777] placeholder:text-[#777777]" placeholder="Your Name" />
                                        {errors.name && <span className='text-xs text-red-500'>This field is required</span>}
                                    </div>
                                    <div className="md:w-1/2 flex flex-col md:mt-0 mt-7">
                                        <label className="text-base font-semibold leading-none hidden">Email</label>
                                        <input {...register("email", { required: true })} type="email" className="text-sm leading-none p-3 focus:outline-none focus:border-[#6041BB] bg-transparent border rounded border-[#F0F0F0] text-[#777777] placeholder:text-[#777777]" placeholder="E-mail address" />
                                        {errors.email && <span className='text-xs text-red-500'>This field is required</span>}
                                    </div>
                                </div>
                                <div className="md:flex w-full gap-5 items-center">
                                    <div className="md:w-1/2 flex flex-col">
                                        <label className="text-base font-semibold leading-none hidden">Telephone</label>
                                        <input {...register("phone")} type="tel" className="text-sm leading-none p-3 focus:outline-none focus:border-[#6041BB] bg-transparent border rounded border-[#F0F0F0] text-[#777777] placeholder:text-[#777777]" placeholder="Telephone" />
                                        {errors.phone && <span className='text-xs text-red-500'>This field is required</span>}
                                    </div>
                                    <div className="md:w-1/2 flex flex-col md:mt-0 mt-7">

                                        <label className="text-base font-semibold leading-none hidden">Subject</label>
                                        <input {...register("subject", { required: true })} type="text" className="text-sm leading-none p-3 focus:outline-none focus:border-[#6041BB] bg-transparent border rounded border-[#F0F0F0] text-[#777777] placeholder:text-[#777777]" placeholder="Subject" />
                                        {errors.subject && <span className='text-xs text-red-500'>This field is required</span>}
                                    </div>
                                </div>
                                <div className="w-full flex flex-col">
                                    <label className="text-base font-semibold leading-none hidden">Message</label>
                                    <textarea {...register("comment", { required: true })} tabIndex={0} aria-label="Write your message" role="textbox" className="text-sm leading-none p-3 focus:outline-none focus:border-[#6041BB] bg-transparent border rounded border-[#F0F0F0] text-[#777777] placeholder:text-[#777777] resize-none h-32" defaultValue={"Write your message"} />
                                    {errors.comment && <span className='text-xs text-red-500'>This field is required</span>}
                                </div>
                                <div className="flex items-center justify-start w-full">
                                    <input type='submit' className="mt-5 text-base font-semibold leading-none text-white py-4 px-10 bg-[#FECE2F] hover:bg-[#6041BB]" value={sending ? 'SENDING...' : `SUBMIT`} />
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Contact_Us
