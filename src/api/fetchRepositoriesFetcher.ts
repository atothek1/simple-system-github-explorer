import { UserRepositoriesData } from ".";
import { request } from "./request";
import { resolveFetchRepositoriesResponse } from "./resolver";

interface FetchRepositoriesFetcherParams {
    readonly userName: string;
    readonly page: number;
    readonly perPage: number;
}
export async function fetchRepositoriesFetcher(
    url: string,
    params: FetchRepositoriesFetcherParams
): Promise<UserRepositoriesData> {
    // no username provided will result in an empty data set
    if ( params.userName === "" ) {
        return Promise.resolve( { total: 0,
            items: [] } );
    }
    return request( url, { resolver: resolveFetchRepositoriesResponse } );
}
