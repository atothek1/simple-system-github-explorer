import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";

import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";

import responseData from "../../../../public/data/repositories-1.json";
import { SearchResult } from ".";
import { searchTerm } from "../../../state/search";

const handlers = [
    //http.get( /\/data\/usersSearch\.json/i, () => {
    http.get( /\/search\/users/i, () => {
        return HttpResponse.json( responseData ); } 
    )
];
const server = setupServer( ...handlers );

beforeAll( () => server.listen() );
afterEach( () => server.resetHandlers() );
afterAll( () => server.close() );

describe( "SearchResult", () => {
    it( "should render empty dom element.", async () => {
        const { container } = render( <SearchResult /> );

        expect( container ).toBeEmptyDOMElement();
    } );

    it( "should render heading", async () => {
        searchTerm.value = "test";
        const { getByRole } = render( <SearchResult /> );
        const headingValue = "Search Result for\"test\"";

        expect( getByRole( "heading" ) ).toHaveTextContent( headingValue );
    } );

    it( "should render list of users", async () => {
        searchTerm.value = "test";
        const { findByRole } = render( <SearchResult /> );
        const element = await findByRole( "list" );

        expect( element ).toBeInTheDocument();
        expect( element.children.length ).toBe( 5 );
    } );
} );
