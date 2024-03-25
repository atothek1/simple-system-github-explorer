import React from "react";
import { User } from "../../../api";
import { Box } from "../../ui/Box";
import { Text } from "../../ui/Text";
import { ArrowIcon } from "./ArrowIcon";
import { setOpen } from "../../../state/collabsible";
import { RepositoriesResult } from "../RepositoriesResult";

interface UserListElementProps {
    readonly index: number;
    readonly data: User;
    readonly isOpen?: boolean;
}
function InnerUserListElement( props: UserListElementProps ) {
    const { data, index, isOpen = false } = props;

    return (
        <Box as="li" column>
            <Box
                padding="16px" 
                margin="4px 0px" 
                width="auto" 
                backgroundColor="#F2F2F2"
                justifyContent="space-between"
                onClick={ () => ( setOpen( index ) ) }
            >
                <Text fontSize="14px">{ data.name }</Text>
                <ArrowIcon rotation={ isOpen ? "-180deg" : "0deg" } />
            </Box>
            { isOpen && <RepositoriesResult name={ data.name } /> }
        </Box>
    );
}

export const UserListElement = React.memo( InnerUserListElement );
