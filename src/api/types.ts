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

export interface Repository {
    readonly id: number;
    readonly name: string;
    readonly fullName: string;
    readonly description: string;
    readonly stars: number;
    readonly url: string;
}
export interface UserRepositoriesData {
    readonly total: number;
    readonly items: Repository[];
}
