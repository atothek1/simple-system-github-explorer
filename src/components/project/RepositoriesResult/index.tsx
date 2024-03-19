import { Box } from "../../ui/Box";
import { FetchResult } from "./FetchResult";

interface RepositoriesResultProps {
    readonly name: string;
}

export function RepositoriesResult( props: RepositoriesResultProps ){
    const { name } = props;

    return ( 
        <Box>
            <FetchResult name={ name } />
        </Box>
    );
}
