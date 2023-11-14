import React from "react";
import { Typography, Box, Container, Grid } from "@mui/material";
import WhispsString from "./WhispsString";
import AddWhispsStringBtn from "./AddWhispsStringBtn";
import { useStrings } from "../context/StringsContext";

export default function WhispsStringsList() {
    const { whispStrings } = useStrings();
    return ( <>
        <Grid container>
            { whispStrings.map( ( wString, i ) =>
                <Grid item={true} xs={12} sm={6} lg={4} key={ `whisps-group-${i}-item` }>
                    <WhispsString key={ `whisps-group-${i}-component` } wString={wString}/>
                </Grid>
            ) }
            <AddWhispsStringBtn />
        </Grid>
        
    </> );
}