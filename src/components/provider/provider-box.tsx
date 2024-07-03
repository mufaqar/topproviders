"use client";
import { GlobalContext } from "@/context/globalContext";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { BiGitCompare } from "react-icons/bi";
import { toast } from "react-toastify";


export const ProviderBox = ({ item }: any) => {
  const {ProviderOne, setProviderOne, ProviderTwo, setProviderTwo} = useContext(GlobalContext)

  const addToCompare = (props: any) => {
        if(ProviderOne){
          setProviderTwo(props)
        }else{
          setProviderOne(props)
        }
        toast.info(`${props.title} Provider Added Into Compare List`)
  };

  
  return (
    <>
      <div className="relative group">
        <Link
          href={`/providers/${item.slug}`}
          className="flex flex-col justify-center items-center border border-gray-100 p-3 h-56 rounded-tl-[80px] rounded-tr-[3px] rounded-bl-[3px] rounded-br-[80px] shadow-xl transition hover:border-[#6041BB]/10 hover:shadow-[#6041BB]/10 bg-white"
        >
          <Image
            src={item.featuredImage?.node.mediaItemUrl}
            alt="Feature"
            width={140}
            height={50}
            className="mx-auto"
          />
          <h2 className="mt-4 text-lg  text-center">{item.title}</h2>
        </Link>
        <button
          onClick={() => addToCompare(item)}
          title="compare"
          className="bg-[#FECE2F] hidden group-hover:block text-xl p-2 rounded-full absolute top-4 right-4 hover:scale-105"
        >
          <BiGitCompare />
        </button>
      </div>
      
    </>
  );
};
