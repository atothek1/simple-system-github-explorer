interface ResultProps {
    readonly searchTerm: string;
}

export function FetchResult( props: ResultProps ){
    const { searchTerm } = props;
    return ( <>
        Searching for 
        { searchTerm }
    </> );
}
