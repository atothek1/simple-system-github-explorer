interface ResultProps {
    readonly searchTerm: string;
}

export function Result( props: ResultProps ){
    const { searchTerm } = props;
    return ( <>
        Searching for 
        { searchTerm }
    </> );
}
