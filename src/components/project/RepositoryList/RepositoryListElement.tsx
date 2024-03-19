import { Repository } from "../../../api";
import { Box } from "../../ui/Box";
import { Text } from "../../ui/Text";
import { StarIcon } from "./StarIcon";

interface RepositoryListElementProps {
    readonly index: number;
    readonly data: Repository;
}
export function RepositoryListElement( props: RepositoryListElementProps ) {
    const { data } = props;
    return (
        <Box as="li" backgroundColor="#E0E0E0" padding="12px" width="auto" minHeight="100px" margin="0 0 0 24px" column>
            <Box justifyContent="space-between">
                <Text as="h3" padding="0" margin="0">{ data.name }</Text>
                <Box alignItems="center" width="auto" gap="8px">
                    <StarIcon width="18px"/>
                    <Text>{ data.stars }</Text>
                </Box>
            </Box>
            <Text as="p">{ data.description }</Text>
        </Box>
    );
}

