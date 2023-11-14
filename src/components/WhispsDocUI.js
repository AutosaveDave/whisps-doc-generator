import React, { useState } from "react";
import { Typography, Box, Container } from "@mui/material";
import WhispsStringsList from './WhispsStringsList';
import { DocContextProvider } from "../context/DocContext";
import { StringsContextProvider } from "../context/StringsContext";

export default function WhispsDocUI() {
    return ( <>
        <StringsContextProvider>
            <DocContextProvider>
                <Box className='whispsDocUI'>
                    <Container>
                        <Typography variant='h3'>Whisps Doc Generator</Typography>
                    </Container>
                    <WhispsStringsList/>
                </Box>
            </DocContextProvider>
        </StringsContextProvider>
    </> );
}