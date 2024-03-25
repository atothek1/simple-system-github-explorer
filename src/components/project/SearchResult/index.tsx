import { searchTerm } from "../../../state/search";
import { Text } from "../../ui/Text";
import { FetchResult } from "./FetchResult";

export function SearchResult(){
    
    if( searchTerm.value === "" ) {
        return null;
    }
    const infoStr = `Search Result for "${ searchTerm.value }"`;
    return ( <>
        <Text as="h1">{ infoStr }</Text>
        <FetchResult searchTerm={ searchTerm.value } />
    </> );
}
