import type { AlignItems, JustifyContent } from "../types";

export type BoxAllowedAsValues =
    | "div"
    | "header"
    | "main"
    | "footer"
    | "aside"
    | "section"
    | "article"
    | "nav"
    | "ul"
    | "li";

export interface BoxProps {
    readonly children: React.ReactNode;
    readonly as?: BoxAllowedAsValues;
    readonly column?: boolean;
    readonly justifyContent?: JustifyContent;
    readonly alignItems?: AlignItems;
    readonly minWidth?: string;
    readonly maxWidth?: string;
    readonly width?: string;
    readonly minHeight?: string;
    readonly maxHeight?: string;
    readonly height?: string;
    readonly padding?: string;
    readonly margin?: string;
    readonly border?: string;
    readonly backgroundColor?: string;
    readonly gap?: string;
    readonly onClick?: ( event: React.MouseEvent ) => void;
}
