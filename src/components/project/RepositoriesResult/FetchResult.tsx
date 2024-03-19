import { useCallback, useState } from "react";
import { useFetchRepositories } from "../../../hooks";
import { FetchDataStatus } from "../FetchDataStatus";
import { RepositoryList } from "../RepositoryList";

interface ResultProps {
    readonly name: string;
}

export function FetchResult( props: ResultProps ){
    const { name } = props;
    
    const [ page, setPage ] = useState( 1 );
    const result = useFetchRepositories( name, page );
    const hasData = !!( result && result.data && result.data.items.length > 0 );
  
    const handlePageChange = useCallback( ( newPage: number ) => {
        setPage( newPage );
    }, [] );
    
    const additionalProps = useCallback( () => {
        return {
            page,
            onPageChange: handlePageChange
        };
    }, [ page, handlePageChange ] );

    return (
        <FetchDataStatus<typeof result.data>
            result={ result }
            hasData={ hasData }
            component={ RepositoryList }
            additionalProps={ additionalProps }
        />
    );
}
