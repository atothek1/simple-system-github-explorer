import { searchTerm } from "../../../state/search";
import { Text } from "../../ui/Text";
import { FetchResult } from "./FetchResult";

export function SearchResult(){
    const str = `"${ searchTerm.value }"`;
    
    if( searchTerm.value === "" ) {
        return null;
    }

    return ( <>
        <Text as="h1">
            Search Result for 
            { str }
        </Text>
        { searchTerm.value !== "" ? <FetchResult searchTerm={ searchTerm.value } /> : null }
    </> );
}
