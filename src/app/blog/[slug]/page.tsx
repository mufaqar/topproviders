
import PageBanner from '@/components/pageBanner'
import apolloClient from '@/config/client'
import { GET_POST_SLUG } from '@/config/query'
import Image from 'next/image'
import React from 'react'
import PageHead from '@/components/metas/pagesmeta'



async function getData(slug:any){
  const response = await apolloClient.query({
    query: GET_POST_SLUG,
    variables: {
      slug
    },
  });
  const SinglePost = response.data.postBy;
  return {
    SinglePost
  }
}


const Blog = async (props:any) => {
  
  const { SinglePost } = await getData(props.params.slug)    

  

  return (
    <>

      <PageHead title={SinglePost?.title} description={SinglePost?.excerpt} url={SinglePost?.slug} />

      <PageBanner title={SinglePost?.title} />
      <main className="py-16 max-w-screen-lg mx-auto">
        <div className="p-4">
          <Image src={SinglePost?.featuredImage?.node?.mediaItemUrl} alt="technology" className="rounded-lg" width={1280} height={853} />
          <div className="p-5 single-blog">
            <div className="text-gray-700 mt-2 text-justify text-sm" dangerouslySetInnerHTML={{ __html: SinglePost?.content }} />
          </div>
        </div>
      </main>
    </>
  )
}

export default Blog

