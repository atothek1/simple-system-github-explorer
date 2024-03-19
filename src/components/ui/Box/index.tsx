import React, { ForwardedRef } from "react";
import { BoxProps } from "./types";
import { StyledBox } from "./styled";

function InnerBox( props: BoxProps, ref: ForwardedRef<HTMLDivElement | null> ) {
    const {
        children,
        className,
        justifyContent,
        alignItems,
        padding,
        margin,
        backgroundColor,
        gap,
        as = "div",
        column = false,
        minWidth,
        width = "100%",
        minHeight,
        height = "100%",
        onClick = undefined
    } = props as ( BoxProps & { readonly className:string } );

    return (
        <StyledBox
            ref={ ref }
            as={ as }
            className={ className }
            onClick={ onClick }
            $justifyContent={ justifyContent }
            $alignItems={ alignItems }
            $column={ column }
            $minWidth={ minWidth }
            $width={ width }
            $minHeight={ minHeight }
            $height={ height }
            $padding={ padding }
            $margin={ margin }
            $backgroundColor={ backgroundColor }
            $gap={ gap }>
            {children}
        </StyledBox>
    );
}

export const Box = React.forwardRef( InnerBox );
export type { BoxProps };
