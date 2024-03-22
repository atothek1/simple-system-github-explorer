import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";

import responseData1 from "../../../../public/data/repositories-1.json";
import responseData2 from "../../../../public/data/repositories-2.json";

import { RepositoriesResult } from ".";

const handlers = [
    //http.get( /\/data\/repositories-1\.json/i, () => {
    http.get( /\/search\/repositories/i, ( { request } ) => {        
        const url = new URL( request.url );
        const page = url.searchParams.get( "page" );
        return HttpResponse.json( page === "1" ? responseData1 : responseData2 ); } 
    ),
];
const server = setupServer( ...handlers );

beforeAll( () => server.listen() );
afterEach( () => server.resetHandlers() );
afterAll( () => server.close() );

describe( "RepositoriesResult", () => {
    const name = "test";
    it( "should render loading svg.", async () => {
        const { queryByText } = render( <RepositoriesResult name={ name } /> );

        expect( queryByText( "Loading animation" ) ).toBeInTheDocument();
    } );

    it( "should render list of repositories", async () => {
        const { findByRole } = render( <RepositoriesResult name={ name } /> );
        const element = await findByRole( "list" );

        expect( element ).toBeInTheDocument();
        expect( element.children.length ).toBe( 5 );
    } );

    // NOTE: a to big test case, should be splitted to seperated test, just want to showcase testing possibilities
    it( "should fetch next page and render result", async () => {
        const { findByRole } = render( <RepositoriesResult name={ name } /> );
        const firstPage = await findByRole( "list" );

        expect( firstPage ).toBeInTheDocument();
        expect( firstPage.children.length ).toBe( 5 );

        let nextBtn = screen.getByText( "Next" );
        let prevBtn = screen.getByText( "Previous" );

        expect( nextBtn ).toBeEnabled();
        expect( prevBtn ).toBeDisabled();

        await userEvent.click( nextBtn );

        nextBtn = screen.getByText( "Next" );
        prevBtn = screen.getByText( "Previous" );

        expect( nextBtn ).toBeDisabled();
        expect( prevBtn ).toBeEnabled();

        const secondPage = await findByRole( "list" );

        expect( secondPage ).toBeInTheDocument();
        expect( secondPage.children.length ).toBe( 4 );

    } );
} );
