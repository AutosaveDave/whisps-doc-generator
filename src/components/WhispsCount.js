import React from "react";
import { Stack, Container, TextField } from "@mui/material";

export default function WhispsCount( count ) {
    return ( <>
        <Container>
            <Stack direction="row" alignItems={'center'}>
                <TextField label="Count" variant="standard" />
            </Stack>
        </Container>
    </> );
}