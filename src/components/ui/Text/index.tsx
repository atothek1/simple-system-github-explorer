import { StyledText } from "./styled";
import { TextProps } from "./types";

export function Text( props: TextProps ){
    const { 
        children,
        as = "span",
        fontFamily = "Helvetica",
        fontSize = "16px",
        fontWeight,
        padding,
        margin,
        color
    } = props;

    return ( <StyledText 
        as={ as }
        $fontFamily={ fontFamily }
        $fontSize={ fontSize }
        $fontWeight={ fontWeight }
        $padding={ padding }
        $margin={ margin }
        $color={ color }
    >
        {children}
    </StyledText> );
}
