import useSWR from "swr";
import { fetchRepositoriesFetcher } from "../api/fetchRepositoriesFetcher";

// https://api.github.com/search/repositories?q=user:atothek1&per_page=5&page=1
export function useFetchRepositories( userName: string, page = 1, perPage = 5 ) {
    const queryStr = new URLSearchParams( {
        q: `user:${ userName }`,
        page: page.toString(),
        per_page: perPage.toString(),
    } ).toString();
    //const url = `https://api.github.com/search/repositories?${queryStr}`;
    const url = `./data/repositories-${ page }.json?${ queryStr }`;
    return useSWR( url, () =>
        fetchRepositoriesFetcher( url, { userName,
            page,
            perPage } )
    );
}
