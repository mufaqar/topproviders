import apolloClient from "@/config/client";
import { GET_ALL_PROVIDERS } from "@/config/query";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    const [providers] = await Promise.all([
        apolloClient.query({ query: GET_ALL_PROVIDERS }),
    ]);
    const allProviders = providers.data.allProviders.nodes;

    return NextResponse.json({ 
        status: 'ok',
        data: allProviders
     })
}