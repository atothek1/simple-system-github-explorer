export function delay( ms: number ) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return new Promise( ( resolve, _reject ) => setTimeout( () => resolve( true ), ms ) );
}
