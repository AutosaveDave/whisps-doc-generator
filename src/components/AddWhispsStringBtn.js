import React from "react";
import { Button, Typography, Box, Container } from "@mui/material";
import { useStrings } from "../context/StringsContext";

export default function AddWhispsStringBtn() {
    const { addGroup } = useStrings();
    return ( <>
    <Box>
        <Button onClick={ addGroup }>
            <Typography>Add Group</Typography> 
        </Button>
    </Box>
        
    </> );
}