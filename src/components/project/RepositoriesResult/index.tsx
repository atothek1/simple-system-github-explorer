import { useCallback, useState } from "react";
import { FetchDataStatus } from "../FetchDataStatus";
import { RepositoryList } from "../RepositoryList";
import { useFetchRepositories } from "../../../hooks";

interface RepositoriesResultProps {
    readonly name: string;
}

export function RepositoriesResult( props: RepositoriesResultProps ){
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
