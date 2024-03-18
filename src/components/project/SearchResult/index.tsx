import { searchTerm } from "../../../state/search";
import { Text } from "../../ui/Text";
import { FetchResult } from "./FetchResult";

export function SearchResult(){
    return ( <>
        <Text as="h1">Search Result</Text>
        { searchTerm.value !== "" ? <FetchResult searchTerm={ searchTerm.value } /> : null }
    </> );
}
