import { Box } from "../../ui/Box";
import { SearchInput } from "../SearchInput";
import { SearchResult } from "../SearchResult";

export function App() {
    return (
        <Box column gap="8px">
            <SearchInput />
            <SearchResult />
        </Box>
    );
}
