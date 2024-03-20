import { FetchUsersData } from "..";
import { request } from "../request";
import { resolveFetchUsersResponse } from "../resolver";

interface FetchUsersParams {
    readonly userName: string;
    readonly page: number;
    readonly perPage: number;
}
export async function fetchUsers(
    url: string,
    params: FetchUsersParams
): Promise<FetchUsersData> {
    // no username provided will result in an empty data set
    if ( params.userName === "" ) {
        return Promise.resolve( 
            { 
                total: 0,
                items: [] 
            } );
    }
    return request( url, { resolver: resolveFetchUsersResponse } );
}
