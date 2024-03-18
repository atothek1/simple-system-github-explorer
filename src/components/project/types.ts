export interface FetchDataResult<TData = unknown> {
    readonly data: TData;
    readonly error: unknown;
    readonly isLoading: boolean;
}
