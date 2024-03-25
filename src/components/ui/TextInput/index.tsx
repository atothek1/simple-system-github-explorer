import { useFormContext } from "react-hook-form";
import { StyledInput } from "./styled";
import { Box, Text } from "..";

interface TextInputProps {
    readonly name: string;
    readonly placeholder: string;
    readonly description?: string;
    readonly onChange?: ( event: React.ChangeEvent<HTMLInputElement> ) => void;
}

export function TextInput( props: TextInputProps ) {
    const { description, name, onChange, placeholder } = props;
    const { register } = useFormContext();
    const hasDescription = !!description;
    return (
        <Box column gap="4px">
            <StyledInput
                { ...register( name ) }
                placeholder={ placeholder }
                onChange={ onChange }
            />
            { hasDescription && <Text fontSize="12px" color="gray">{ description }</Text> }
        </Box>
    );
}
