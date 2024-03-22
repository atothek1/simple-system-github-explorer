import { Box, Text } from "../..";

export function ErrorResponse(){
    return (
        <Box justifyContent="center" border="1px solid #b40404">
            <Text as="p" color="#b40404" fontWeight="bold">Something went wrong. Please try again later.</Text>
        </Box>
    );
}
