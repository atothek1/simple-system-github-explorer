import { SearchUsersData } from ".";
import { request } from "./request";
import { resolveSearchUsersResponse } from "./resolver";

interface SearchUsersFetcherParams {
    readonly userName: string;
    readonly page: number;
    readonly perPage: number;
}
export async function searchUsersFetcher(
    url: string,
    params: SearchUsersFetcherParams
): Promise<SearchUsersData> {
    // no username provided will result in an empty data set
    if ( params.userName === "" ) {
        return Promise.resolve( { total: 0,
            items: [] } );
    }
    return request( url, { resolver: resolveSearchUsersResponse } );
}
