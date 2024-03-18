import { FormProvider, useForm } from "react-hook-form";
import { Box } from "../../ui/Box";
import { Button } from "../../ui/Button";
import { TextInput } from "../../ui/TextInput";
import { useState } from "react";

interface SearchFormData { readonly userName: string }

export function SearchInput(){
    const [ isButtonDisabled, setIsButtonDisabled ] = useState( true );
    const formConfig = useForm<SearchFormData>();

    const handleChange = ( event: React.ChangeEvent<HTMLInputElement> ) => {
        setIsButtonDisabled( event.target.value.length < 3 );
    };

    const handleSubmit = ( data: SearchFormData ) => {
        console.log( data );
        setIsButtonDisabled( true );
        formConfig.reset();
    };

    return ( 
        <FormProvider { ...formConfig }>
            <form onSubmit={ formConfig.handleSubmit( handleSubmit ) }>
                <Box column gap="8px">
                    <TextInput name="userName" placeholder="Enter username" onChange={ handleChange } />
                    <Button type="submit" disabled={ isButtonDisabled }>Search</Button>
                </Box>
            </form>
        </FormProvider>
    );
}
