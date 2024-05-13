import PageBanner from '@/components/pageBanner'
import Link from 'next/link'
import React from 'react'
import Head from 'next/head';
import PageHead from '@/components/metas/pagesmeta';

function Sell_Information() {
    return (
        <>
            <PageHead title="Do Not Sell My Information | Top Providers" description="" url="https://www.topproviders.net/do-not-sell-my-information" />
            <PageBanner title="Do Not Sell My Information" />
            <section className="py-16">
                <div className='container mx-auto px-4'>
                    <div className="">
                        <p className='text-xl mb-4 leading-relaxed'>
                            If you desire to refrain from having your personal information sold, kindly send an email to <Link href="mailto:contact@topproviders.net">contact@topproviders.net</Link>, providing your first and last name along with your phone number. An acknowledgment of your message will be sent within seven (7) business days. Once your identity is confirmed, we will process your request within thirty (30) days.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Sell_Information