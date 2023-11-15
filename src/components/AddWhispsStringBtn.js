import React from "react";
import { Button, Typography, Box, Container } from "@mui/material";
import { useStrings } from "../context/StringsContext";

export default function AddWhispsStringBtn() {
    const { addGroup } = useStrings();
    return ( <>
    <Container m={2}>
        <Button variant="contained" color="success" onClick={ addGroup }>
            <Typography>Add Group</Typography> 
        </Button>
    </Container>
        
    </> );
}