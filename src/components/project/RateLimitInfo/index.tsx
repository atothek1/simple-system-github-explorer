import { Box, Text } from "../..";

interface RateLimitInfoProps {
    readonly limit: number;
    readonly remaining: number;
    readonly reset: Date;
}
export function RateLimitInfo( props: RateLimitInfoProps ){
  
    const { limit, remaining, reset } = props;

    // no ratelimiting meta data, no information
    if( limit === Number.POSITIVE_INFINITY ) {
        return null;
    }
    const formatOptions = { 
        hour: "numeric",
        minute: "numeric",
        second: "numeric" 
    } as const;
    const rateLimit = `Ratelimit: ${ remaining } / ${ limit } remaining.`;
    const resetTime = `Next Reset: ${ new Intl.DateTimeFormat( "de-DE", formatOptions ).format( reset ) }`;
    return (
        <Box padding="8px" column width="auto" gap="8px" backgroundColor="rgba(44,157,219,.5)">
            <Text color="#1f709c">{ rateLimit }</Text>
            <Text color="#1f709c">{ resetTime }</Text>
        </Box>
    );
}
