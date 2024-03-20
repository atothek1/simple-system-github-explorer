export function delay( ms: number ) {

    if( process.env.NODE_ENV === "development " ) {
        return Promise.resolve();
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return new Promise( ( resolve, _reject ) => setTimeout( () => resolve( true ), ms ) );
}
