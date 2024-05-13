import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { BsDownload, BsUpload } from "react-icons/bs";

export const ProviderCard = ({ item, type, offer, count }: any) => {
    var features = item?.summery?.features?.split(', ');

    const progressRef = useRef(null);

    useEffect(() => {
        const progressBar: any = progressRef.current;
        const bar = progressBar.querySelector('.bar');
        const val = progressBar.querySelector('span');
        const perc = parseInt(val.textContent, 10);

        let animation = { p: 0 };
        const duration = 3000;

        const animateProgress = () => {
            const startTime = Date.now();
            const animateFrame = () => {
                const currentTime = Date.now() - startTime;
                const progress = Math.min(currentTime / duration, 1);

                const p = Math.floor(perc * progress);
                bar.style.transform = `rotate(${45 + p * 1.8}deg)`;
                val.textContent = p;

                if (progress < 1) {
                    requestAnimationFrame(animateFrame);
                }
            };

            requestAnimationFrame(animateFrame);
        };

        animateProgress();
    }, []);

    return (
        <>

            <div className="border rounded-lg shadow-2xl group p-5">
                <figure className="w-[150px] h-[150px] bg-white border rounded-full p-3 flex flex-col items-center justify-center mx-auto -mt-20">
                    <Image src={item.logo} alt={item.provider} width={140} height={50} className="transition-all duration-200 ease-in-out group-hover:scale-105" />
                </figure>
                <h2 className="text-xl font-bold text-center px-5 pt-3">{item.provider}</h2>
                <section className="w-full flex justify-center mt-4">
                    <div className="progress" ref={progressRef}>
                        <div className="barOverflow">
                            <div className="bar"></div>
                        </div>
                        <span className="text-white">80%</span>
                        <div className="text-center -mt-16 mb-6">
                            <p className="tch text-[#FECE2F]">
                                {type === "tv" ? (
                                    "Channels"
                                ) : type === "internet-tv" ? (
                                    "Speeds from "
                                ) : (
                                    "Speeds from "
                                )}
                            </p>
                            {type === "tv" ? (
                                <>  <p className="tcd">{item?.summery?.speed} </p> </>
                            ) : type === "internet-tv" ? (
                                <> <p className="tcd">{item?.summery?.speed} Mbps </p>
                                </>
                            ) : (
                                <>   <p className="tcd">{item?.summery?.speed} Mbps</p></>
                            )}
                        </div>
                    </div>
                </section>
                <div className="flex max-w-[230px] mx-auto pb-6 items-center justify-center gap-20 mt-4 border-b-[1px]">
                    <div className="flex flex-col items-center">
                        <BsDownload className="text-2xl mb-1" />
                        <span className="text-sm">300 Mbps</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <BsUpload className="text-2xl mb-1" />
                        <span className="text-sm">150 Mbps</span>
                    </div>
                </div>
                <p className="flex flex-col justify-center items-center mt-6 mb-8">
                    <span className="font-extrabold text-[#FECE2F] text-3xl"> ${item?.price} <sup className="font-light text-gray-800">/Month</sup></span>
                    <span className="font-mono mt-1">With ex VAT</span>
                </p>
                <Link href={`/providers/${item.slug}`}>
                    <button className="text-base text-white hover:scale-105 uppercase !w-full rounded-sm px-5 py-3 bg-[#FECE2F] hover:bg-[#6041BB]">View Plans</button>
                </Link>
            </div>
            {/* <div className="w-full h-auto shadow-xl border rounded-t-md rounded-b-md flex flex-col">
                <div className="md:w-full min-w-fit  bg-[#6041BB] flex justify-between items-center ">
                    <h2 className="text-base font-bold text-center text-white p-5"> <span> {count+1} </span>-  {item.provider}</h2>
                    <h2 className="text-base font-bold text-center text-white p-5">{offer}</h2>
                </div>
              
                <div className={`md:w-full w-full grid grid-cols-1 dtable ${type === 'internet-tv' ? ' md:grid-cols-6' : ' md:grid-cols-5'} flex flex-col`}>
                    <div className="md:border-r border-r-0 md:border-b-0 border-b grid items-center justify-center p-5">
                    <Link href={`/providers/${item.slug}`} target="_blank" >  <Image src={item.logo} alt="Feature Image" width={140} height={50} /></Link>
                    </div>
                    <div className="md:border-r border-r-0 md:border-b-0 border-b grid items-center justify-center p-5">
                        <div className="text-center">
                            <p className="tch">
                                {type === "tv" ? (
                                    "Channels"
                                ) : type === "internet-tv" ? (
                                    "Speeds from "
                                ) : (
                                    "Speeds from "
                                )}
                            </p>
                            {type === "tv" ? (
                                <>  <p className="tcd">{item?.summery?.speed} </p> </>
                            ) : type === "internet-tv" ? (
                              <> <p className="tcd">{item?.summery?.speed} Mbps </p>
                                    </>
                            ) : (
                                <>   <p className="tcd">{item?.summery?.speed} Mbps</p></>
                            )}
                        </div>
                    </div>

                    {type === "internet-tv"  &&
                    <div className="md:border-r border-r-0 md:border-b-0 border-b grid items-center justify-center p-5">
                        <div className="text-center">
                        <p className="tch"> Channels</p>
                        <p className="tcd"> {item?.summery?.summaryChannel}  </p>
                        </div>
                    </div>

                            }


                    <div className="md:border-r border-r-0 md:border-b-0 border-b grid items-center justify-center p-5 px-3">
                        <ul className="grid items-center justify-center ">
                            {
                                features?.map((feature: any, idx: number) => (
                                    <li className="flex gap-2 items-center" key={idx}>
                                        <svg className="min-w-[1rem] h-4  text-[#FECE2F] font-extrabold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" ></path>
                                        </svg>
                                        <span className="text-sm">
                                            {feature}
                                        </span>
                                    </li>
                                ))
                            }
                        


                        </ul>
                    </div>
                    <div className="md:border-r border-r-0 md:border-b-0 border-b grid items-center justify-center p-5">
                        <div>
                        <p className="tch">Pricing starts from</p>
                        <p className="tcd">
                                <span className="font-extrabold text-[#6041BB] font-[Roboto] text-xl"> ${item?.price} </span> /mo.
                            </p>
                        </div>
                    </div>
                    <div className="grid gap-3 items-center justify-center p-5">                        
                        <Link href={`/providers/${item.slug}`} className="text-base text-white font-[Roboto] uppercase px-5 py-2.5 bg-[#FECE2F] hover:bg-[#6041BB]">View Plans</Link>
                    </div>
                </div>
            </div> */}

        </>
    )
}