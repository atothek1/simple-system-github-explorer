import { useSearchUsers } from "../../../hooks";
import { FetchDataStatus } from "../FetchDataStatus";
import { UserList } from "../UserList";

interface ResultProps {
    readonly searchTerm: string;
}

export function FetchResult( props: ResultProps ){
    const { searchTerm } = props;
    const result = useSearchUsers( searchTerm );
    const hasData = !!( result && result.data && result.data.items.length > 0 );
  
    return (
        <FetchDataStatus<typeof result.data>
            result={ result }
            hasData={ hasData }
            component={ UserList }
        />
    );
}
