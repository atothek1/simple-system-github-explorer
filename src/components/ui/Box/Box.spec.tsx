import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import { Box } from "./index";

describe( "Box", () => {
    it( "renders div element with text", () => {
        render( <Box>Test</Box> );

        expect( screen.getByText( "Test" ) ).toHaveTextContent( "Test" );
    } );

    it( "renders section element with text", () => {
        render( <Box as="section">Test</Box> );

        expect( screen.getByText( "Test" ).nodeName ).toBe( "section".toUpperCase() );
    } );
} );
