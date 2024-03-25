import { FetchRepositoriesData } from "../../../api";
import { Box, List, SimplePagination } from "../../ui";
import { FetchDataConsumerComponent } from "../FetchDataStatus";
import { RateLimitInfo } from "../RateLimitInfo";
import { RepositoryListElement } from "./RepositoryListElement";

interface RepositoryListPorps extends FetchDataConsumerComponent<FetchRepositoriesData | undefined> {
    readonly onPageChange: ( page: number ) => void;
    readonly page: number;
}

export function RepositoryList( props: RepositoryListPorps ){

    const { data, page, onPageChange = () => ( {} ) } = props;

    if( data === undefined ) {
        return null;
    }

    const handlePrev = ( page:number )=>{
        onPageChange( page );
    };
    const handleNext = ( page:number )=>{
        onPageChange( page );
    };
    
    const { items, total, meta } = data;

    return (
        <Box gap="8px" column>
            <RateLimitInfo limit={ meta.rateLimit } remaining={ meta.rateLimitRemaining } reset={ meta.rateLimitReset } />
            <Box as="ul" padding="0" margin="0" gap="8px" column>
                <List
                    component={ RepositoryListElement }
                    data={ items }
                />
            
            </Box>
            { total > 5 ? <SimplePagination 
                total={ total } 
                page={ page } 
                size={ 5 } 
                onPrev={ handlePrev }
                onNext={ handleNext }
            /> : null}
        </Box>
    );
}
