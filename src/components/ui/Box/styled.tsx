import { styled } from "styled-components";
import type { BoxProps } from "./types";
import { StyledTransientProps } from "../types";

// transform clean props into styyled components transient props, to avoid passing them to the dom nodes
type StyledBoxProps = StyledTransientProps<Omit<BoxProps, "children" | "className" | "onClick" | "as">>;

export const StyledBox = styled.div<StyledBoxProps>`
    display: flex;
    ${ props => ( props.$column ? "flex-direction: column;" : "" ) }
    ${ props => ( props.$justifyContent ? `justify-content: ${ props.$justifyContent };` : "" ) }
    ${ props => ( props.$alignItems ? `align-items: ${ props.$alignItems };` : "" ) }
    ${ props => ( props.$minWidth ? `min-width: ${ props.$minWidth };` : "" ) }
    ${ props => ( props.$width ? `width: ${ props.$width };` : "" ) }
    ${ props => ( props.$minHeight ? `min-height: ${ props.$minHeight };` : "" ) }
    ${ props => ( props.$height ? `height: ${ props.$height };` : "" ) }
    ${ props => ( props.$padding ? `padding: ${ props.$padding };` : "" ) }
    ${ props => ( props.$margin ? `margin: ${ props.$margin };` : "" ) }
    ${ props => ( props.$backgroundColor ? `background-color: ${ props.$backgroundColor };` : "" ) }
    ${ ( props ) => {
       
        if ( !props.$gap ) {
            return "";
        }
        return `
        & > *:not(:last-child) {
            ${ props.$column ? "margin-bottom: " + props.$gap : "margin-right: " + props.$gap };
        }
        `;
    } }
    list-style: none;
`;
