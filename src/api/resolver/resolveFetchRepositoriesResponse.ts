import { FetchRepositoriesData } from "..";

interface FetchRepositoriesResponse {
    readonly total_count: number;
    readonly items: Array<{
        readonly id: number;
        readonly name: string;
        readonly full_name: string;
        readonly description: string;
        readonly html_url: string;
        readonly stargazers_count: number;
    }>;
}

export function resolveFetchRepositoriesResponse(
    data: FetchRepositoriesResponse
): FetchRepositoriesData {
    const total = data.total_count;
    const items = data.items.map( ( item ) => {
        return {
            id: item.id,
            name: item.name,
            fullName: item.full_name,
            description: item.description,
            stars: item.stargazers_count,
            url: item.html_url,
        };
    } );
    return { total,
        items };
}
