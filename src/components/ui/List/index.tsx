import React from "react";

export interface ListItem {
    readonly id: number | string;
}

export interface ListItemComponentProps<TData = unknown> {
    readonly index: number;
    readonly data: TData;
}

interface ListProps<TData extends ListItem> {
    readonly data: TData[] | null;
    readonly additionalProps?: ( index:number ) => Record<string, unknown>;
    readonly component: React.ComponentType<ListItemComponentProps<TData>>;
}

export function List<TData extends ListItem>( props: ListProps<TData> ) {
    const { data, component, additionalProps = () => ( {} ) } = props;
    if ( data === null || ( data && data.length === 0 ) ) {
        return null;
    }
    const elements = data.map( ( item, index ) => {
        return React.createElement( component, {
            key: item.id,
            data: item,
            index,
            ...additionalProps( index ),
        } );
    } );
    return <>{elements}</>;
}
