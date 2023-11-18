import React from "react";
import { Typography, Box, Container } from "@mui/material";

export default function WhispsGroupString( {groupString} ) {
    return ( <>
        <Typography variant="body1" color='black' textAlign='center' sx={{ pb: 1 }}>{groupString}</Typography>
    </> );
}