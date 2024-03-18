import { useFormContext } from "react-hook-form";
import { StyledInput } from "./styled";

interface TextInputProps {
    readonly name: string;
    readonly placeholder: string;
    readonly onChange?: ( event: React.ChangeEvent<HTMLInputElement> ) => void;
}

export function TextInput( props: TextInputProps ) {
    const { name, onChange, placeholder } = props;
    const { register } = useFormContext();
    return (
        <StyledInput
            { ...register( name ) }
            placeholder={ placeholder }
            onChange={ onChange }
        />
    );
}
