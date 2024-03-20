import { useSignals } from "@preact/signals-react/runtime";
import { FetchUsersData } from "../../../api";
import { openId } from "../../../state/collabsible";
import { Box } from "../../ui/Box";
import { List } from "../../ui/List";
import { FetchDataConsumerComponent } from "../FetchDataStatus";
import { UserListElement } from "./UserListElement";
import { Text } from "../../ui/Text";

interface UserListPorps extends FetchDataConsumerComponent<FetchUsersData | undefined> {}

export function UserList( props: UserListPorps ){

    const { data } = props;
    
    // NOTE: needed for preact signals making the component reactive    
    useSignals();

    if( data === undefined ) {
        return null;
    }

    const { items, total } = data;
    
    const info = `Showing first 5 of ${ total }`;
    const additionalProps = ( index: number ) => {
        return { 
            isOpen: openId.value === index
        };
    };

    return (
        <Box column gap="8px">
            <Text>{ info }</Text>
            <Box as="ul" padding="0" margin="0" width="auto" column>
                <List
                    component={ UserListElement }
                    data={ items }
                    additionalProps={ additionalProps }
                />
            </Box>
        </Box>
    );
}
