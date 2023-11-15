import React from "react";
import { Stack, Container, TextField } from "@mui/material";
import { useStrings } from "../context/StringsContext";
export default function WhispsCount( {count, _index} ) {
    const { changeGroupProps } = useStrings();
    const handleChange = ( e ) => {
        changeGroupProps( _index, { count: Number(e.target.value),} );
    }
    return ( <>
        <Container>
            <Stack direction="row" alignItems={'center'}>
                <TextField 
                    label="Count" 
                    variant="standard" 
                    value={count} 
                    onChange={ handleChange }
                />
            </Stack>
        </Container>
    </> );
}