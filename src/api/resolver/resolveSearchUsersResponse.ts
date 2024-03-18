import { SearchUsersData } from "..";

interface SearchUsersResponse {
    readonly total_count: number;
    readonly items: Array<{
        readonly id: number;
        readonly login: string;
        readonly avatar_url: string;
        readonly html_url: string;
        readonly type: string;
    }>;
}

export function resolveSearchUsersResponse(
    data: SearchUsersResponse
): SearchUsersData {
    const total = data.total_count;
    const items = data.items
        .map( ( item ) => {
            return {
                id: item.id,
                name: item.login,
                avatarUrl: item.avatar_url,
                url: item.html_url,
                type: item.type,
            };
        } )
        .splice( 0, 5 );
    return { total,
        items };
}
