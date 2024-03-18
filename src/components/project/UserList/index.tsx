import { useSignals } from "@preact/signals-react/runtime";
import { SearchUsersData } from "../../../api";
import { openId } from "../../../state/collabsible";
import { Box } from "../../ui/Box";
import { List } from "../../ui/List";
import { FetchDataConsumerComponent } from "../FetchDataStatus";
import { UserListElement } from "./UserListElement";

interface UserListPorps extends FetchDataConsumerComponent<SearchUsersData | undefined> {}

export function UserList( props: UserListPorps ){

    const { data } = props;
    
    // NOTE: needed for preact signals making the component reactive    
    useSignals();

    if( data === undefined ) {
        return null;
    }

    const additionalProps = ( index: number ) => {
        return { 
            isOpen: openId.value === index
        };
    };

    return (
        <Box as="ul" padding="0" margin="0" width="auto" column>
            <List
                component={ UserListElement }
                data={ data.items }
                additionalProps={ additionalProps }
            />
        </Box>
    );
}
