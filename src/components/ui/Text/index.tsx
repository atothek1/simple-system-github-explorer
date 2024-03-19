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
    } = props;

    return ( <StyledText 
        as={ as }
        $fontFamily={ fontFamily }
        $fontSize={ fontSize }
        $fontWeight={ fontWeight }
        $padding={ padding }
        $margin={ margin }
    >
        {children}
    </StyledText> );
}
