import Image from "next/image";
import Link from "next/link";
export const ProviderBox = ({ item }: any) => {
    //console.log(item);
    return (
        <>
            <Link href={`/providers/${item.slug}`} className="flex flex-col justify-center items-center border border-gray-100 p-3 h-56 rounded-tl-[80px] rounded-tr-[3px] rounded-bl-[3px] rounded-br-[80px] shadow-xl transition hover:border-[#215690]/10 hover:shadow-[#215690]/10 bg-white">
                <Image src={item.featuredImage?.node.mediaItemUrl} alt="Feature" width={140} height={50} className='mx-auto' />
                <h2 className="mt-4 text-lg  text-center">
                    {item.title}
                </h2>
            </Link>
        </>
    )
}