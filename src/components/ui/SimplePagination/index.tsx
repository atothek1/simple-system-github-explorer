import { Text } from "..";
import { Box } from "../Box";
import { Button } from "../Button";

interface SimplePaginationProps {
    readonly total: number;
    readonly size: number;
    readonly page: number;
    readonly onPrev: ( page: number ) => void;
    readonly onNext: ( page: number ) => void;
}

export function SimplePagination( props: SimplePaginationProps ){
    const { total, page, size, onPrev, onNext } = props;
    const prevEnabled = total > size && page > 1;
    const nextEnabled = total > size * page;
    const maxPages = Math.ceil( total / size );

    const infoText = `Showing page ${ page } / ${ maxPages } with a total of ${ total } entries.`;
    return (
        <Box gap="8px" column>
            <Text>{ infoText }</Text>
            <Box gap="8px">
                <Button disabled={ !prevEnabled } onClick={ () => onPrev( Math.max( 1, page - 1 ) ) }>Previous</Button>
                <Button disabled={ !nextEnabled } onClick={ () => onNext( page + 1 ) }>Next</Button>
            </Box>
        </Box>
    );
}
