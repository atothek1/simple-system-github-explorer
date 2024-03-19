import { styled } from "styled-components";
import type { TextProps } from "./types";
import { StyledTransientProps } from "../types";

// transform clean props into styyled components transient props, to avoid passing them to the dom nodes
type StyledTextProps = StyledTransientProps<Omit<TextProps, "children" | "as">>;

export const StyledText = styled.span<StyledTextProps>`
    ${ props => ( props.$fontFamily ? `font-family: ${ props.$fontFamily };` : "" ) }
    ${ props => ( props.$fontSize ? `font-size: ${ props.$fontSize };` : "" ) }
    ${ props => ( props.$fontWeight ? `font-weight: ${ props.$fontWeight };` : "" ) }
    ${ props => ( props.$padding ? `padding: ${ props.$padding };` : "" ) }
    ${ props => ( props.$margin ? `margin: ${ props.$margin };` : "" ) }
    ${ props => ( props.$color ? `color: ${ props.$color };` : "" ) }
    ${ props => ( props.$backgroundColor ? `background-color: ${ props.$backgroundColor };` : "" ) }
    ${ props => ( props.$noWrap ? "white-space: noWrap" : "" ) }
`;
