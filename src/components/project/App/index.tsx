import { Box } from "../../ui/Box";
import { SearchInput } from "../SearchInput";
import { SearchResult } from "../SearchResult";

export function App() {
    return (
        <Box column gap="8px" padding="15px" width="auto" maxWidth="640px" margin="0 auto">
            <SearchInput />
            <SearchResult />
        </Box>
    );
}
