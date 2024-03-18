export interface User {
    readonly id: number;
    readonly name: string;
    readonly avatarUrl: string;
    readonly url: string;
    readonly type: string;
}
export interface SearchUsersData {
    readonly total: number;
    readonly items: User[];
}
