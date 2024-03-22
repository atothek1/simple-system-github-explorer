import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import * as matchers from "@testing-library/jest-dom/matchers";
import "cross-fetch/polyfill";

expect.extend( matchers );

afterEach( () => {
    cleanup();
} );
