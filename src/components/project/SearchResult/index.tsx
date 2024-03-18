import { searchTerm } from "../../../state/search";
import { Text } from "../../ui/Text";
import { Result } from "./Result";

export function SearchResult(){
    return ( <>
        <Text as="h1">Search Result</Text>
        { searchTerm.value !== "" ? <Result searchTerm={ searchTerm.value } /> : null }
    </> );
}
