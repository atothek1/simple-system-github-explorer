import { searchTerm } from "../../../state/search";
import { Text } from "../../ui/Text";
import { FetchResult } from "./FetchResult";

export function SearchResult(){
    
    if( searchTerm.value === "" ) {
        return null;
    }
    const str = `"${ searchTerm.value }"`;
    return ( <>
        <Text as="h1">
            Search Result for 
            { str }
        </Text>
        <FetchResult searchTerm={ searchTerm.value } />
    </> );
}
