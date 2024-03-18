import useSWR from "swr";

import { searchUsersFetcher } from "../api";

// https://api.github.com/users/atothek1/repos?per_page=5&page=2
// https://api.github.com/search/users?q=atothek
export function useSearchUsers( userName: string, page = 1, perPage = 5 ) {
    const queryStr = new URLSearchParams( {
        q: userName,
        page: page.toString(),
        per_page: perPage.toString(),
    } ).toString();
    //const url = `https://api.github.com/search/users?${queryStr}`;
    const url = "./data/usersSearch.json?" + queryStr;
    return useSWR( url, () =>
        searchUsersFetcher( url, { 
            userName,
            page,
            perPage 
        } )
    );
}
