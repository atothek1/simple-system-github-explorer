import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import { Box } from "./index";

describe( "Box", () => {
    it( "renders div element", () => {
        render( <Box>Test</Box> );

        expect( screen.getByText( "Test" ) ).toHaveTextContent( "Test" );

    // check if App components renders headline
    } );
} );
