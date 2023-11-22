import React from "react";
import { Typography, Box, Container, Grid } from "@mui/material";
import WhispsString from "./WhispsString";
import AddWhispsStringBtn from "./AddWhispsStringBtn";
import { useStrings } from "../context/StringsContext";

export default function WhispsStringsList() {
    const { whispStrings } = useStrings();
    return ( <>
        <Grid container spacing={1.5}>
            { whispStrings.map( ( wString, i ) =>
                <Grid item key={ `whisps-group-${i}-item` } xs={12} sm={6} lg={4}>
                    <WhispsString key={ `whisps-group-${i}-component` } wString={wString} _index={ i }/>
                </Grid>
            ) }
            <Grid item xs={12} sm={6} lg={4} textAlign='center' sx={{mt:4}}>
                <AddWhispsStringBtn />    
            </Grid>
            
        </Grid>
        
    </> );
}