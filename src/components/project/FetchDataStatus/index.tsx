import React from "react";
import type { FetchDataResult } from "../types";
import { LoadingIcon } from "../LoadingIcon";
import { Box } from "../../ui";

export interface FetchDataConsumerComponent<TData> {
    readonly data: TData;
}

interface FetchDataStatusProps<TData> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    readonly component: React.ComponentType<FetchDataConsumerComponent<TData> & any>;
    readonly result: FetchDataResult<TData>;
    readonly hasData: boolean;
    readonly additionalProps?: ( data:TData ) => Record<string, unknown>;
}

export function FetchDataStatus<TData>( props: FetchDataStatusProps<TData> ) {
    const { result, component, hasData, additionalProps = () => ( {} ) } = props;

    const { isLoading, error } = result;

    if ( isLoading ) {
        return <Box margin="0 auto" width="auto"><LoadingIcon /></Box>;
    }

    if ( error ) {
        return (
            <>
                <p>Something went wrong. Please try again later.</p>
                <pre>{error.toString()}</pre>
            </>
        );
    }

    if ( !hasData ) {
        return <p>No Data found.</p>;
    }

    const children =
    component !== undefined
        ? React.createElement( component, { 
            data: result.data,
            ...additionalProps( result.data ) 
        } )
        : null;

    return <>{children}</>;
}
