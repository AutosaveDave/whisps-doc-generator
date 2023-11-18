import React from "react";
import { Typography, Box, Container, TextField } from "@mui/material";
import { useStrings } from "../context/StringsContext";
export default function WhispsScale( {scale, _index } ) {
    const { changeGroupProps } = useStrings();
    const handleChange = ( e ) => {
        changeGroupProps( _index, { scale: Number(e.target.value),} );
    }
    return ( <>
        <TextField 
            label='Scale' 
            variant="standard" 
            value={scale}
            onChange={ handleChange }
        />
    </> );
}