import { FetchRepositoriesData } from "..";
import { request } from "../request";
import { resolveFetchRepositoriesResponse } from "../resolver";

interface FetchRepositoriesParams {
    readonly userName: string;
    readonly page: number;
    readonly perPage: number;
}
export async function fetchRepositories(
    url: string,
    params: FetchRepositoriesParams
): Promise<FetchRepositoriesData> {
    // no username provided will result in an empty data set
    if ( params.userName === "" ) {
        return Promise.resolve( 
            { 
                total: 0, 
                items: [],
                meta: { 
                    rateLimit: Number.POSITIVE_INFINITY,
                    rateLimitRemaining: Number.POSITIVE_INFINITY,
                    rateLimitReset: new Date()
                }                
            } );
    }
    return request( url, { resolver: resolveFetchRepositoriesResponse } );
}
