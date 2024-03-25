import { ResponseMeta } from ".";

export function delay( ms: number ) {

    if( process.env.NODE_ENV === "development " ) {
        return Promise.resolve();
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return new Promise( ( resolve, _reject ) => setTimeout( () => resolve( true ), ms ) );
}
// X-Ratelimit-Limit:, X-Ratelimit-Remaining, X-Ratelimit-Reset:
export function extractResponseMetaData( response: Response ): ResponseMeta {
    const rateLimit = response.headers.get( "X-Ratelimit-Limit" );
    const rateLimitRemaining = response.headers.get( "X-Ratelimit-Remaining" );
    const rateLimitReset = response.headers.get( "X-Ratelimit-Reset" );

    return { 
        rateLimit: ( typeof rateLimit === "string" ) ? parseInt( rateLimit ) : Number.POSITIVE_INFINITY,
        rateLimitRemaining: ( typeof rateLimitRemaining === "string" ) ? parseInt( rateLimitRemaining ) : Number.POSITIVE_INFINITY,
        rateLimitReset: ( typeof rateLimitReset === "string" ) ? new Date( parseInt( rateLimitReset ) * 1000 ) : new Date(),
    };    
}
