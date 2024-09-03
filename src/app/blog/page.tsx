import Blogpost from '@/components/blogpost'
import PageBanner from '@/components/pageBanner'
import { AllPosts } from '@/config/query'
import React from 'react'
import PageHead from '@/components/metas/pagesmeta'
import apolloClient from '@/config/client'



async function getData(){
    const [allposts] = await Promise.all([
        apolloClient.query({ query: AllPosts }),
    ]);
    const BlogPosts = allposts.data.posts.edges;
    return {
        BlogPosts
    }
}


async function Blog() {
    const { BlogPosts } = await getData()    

    return (
        <>

            
            <PageBanner title="Blog" />
            <main className="py-16 max-w-screen-lg mx-auto">

                <div className="grid md:grid-cols-3 grid-cols-1 gap-7">
                    {
                        BlogPosts.map((item: any, idx: number) => {
                            return (
                                <>

                                    <Blogpost key={idx} data={item} />

                                </>
                            )
                        })
                    }

                </div>
            </main>
        </>
    )
}

export default Blog

