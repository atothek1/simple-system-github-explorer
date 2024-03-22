import { delay } from "./utils";

interface RequestOptions<TIn, TOut> {
    readonly delayTime?: number;
    readonly resolver?: ( data:TIn ) => TOut; 
}

export async function request<TIn, TOut>( url: string, options: RequestOptions<TIn, TOut> ): Promise<TOut> {
    
    // NOTE: quirky casting for default resolver value
    const { delayTime = 1000, resolver = ( o: TIn ): TOut => ( o as unknown as TOut ) } = options;
    
    //await delay( delayTime );

    const response = await fetch( url );
    const data = await response.json();
    if ( !response.ok || "errors" in data ) {
        throw new Error(  );
    }
    
    return Promise.resolve( resolver( data ) );
}
