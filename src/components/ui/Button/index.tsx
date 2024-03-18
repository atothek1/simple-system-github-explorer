import { StyledButton } from "./styled";

interface ButtonProps extends React.PropsWithChildren {
    readonly type?: "submit" | "button";
    readonly disabled?: boolean;
    readonly onClick?: ( event: React.MouseEvent<HTMLButtonElement> ) => void;
}
export function Button( props: ButtonProps ){
    const { children, onClick, type = "button", disabled = false } = props;

    return ( <StyledButton type={ type } disabled={ disabled } onClick={ onClick }>{children}</StyledButton> );
}
