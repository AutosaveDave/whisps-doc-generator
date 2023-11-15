import React from "react";
import { Button, Typography, Box, Container } from "@mui/material";
import { useStrings } from "../context/StringsContext";

export default function RemoveWhispsGroupBtn( {_index} ) {
    const { removeGroup } = useStrings();
    return ( <>
        <Container m={2}>
            <Button variant="contained" color='error' onClick={ () => { removeGroup( _index ) } } >
                <Typography color='black'>DELETE</Typography>
            </Button>
        </Container>
    </> );
}