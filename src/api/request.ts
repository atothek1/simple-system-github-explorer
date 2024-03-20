import { delay } from "./utils";

interface RequestOptions<TIn, TOut> {
    readonly delayTime?: number;
    readonly resolver?: ( data:TIn ) => TOut; 
}

export async function request<TIn, TOut>( url: string, options: RequestOptions<TIn, TOut> ): Promise<TOut> {
    
    // NOTE: quirky casting for default resolver value
    const { delayTime = 1000, resolver = ( o: TIn ): TOut => ( o as unknown as TOut ) } = options;
    
    await delay( delayTime );

    const response = await fetch( url );
    
    if ( !response.ok ) {
        throw new Error( response.statusText );
    }
    
    const data = await response.json();
    return Promise.resolve( resolver( data ) );
}
