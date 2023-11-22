import React from "react";
import { Button, Typography } from "@mui/material";
import { useStrings } from "../../context/StringsContext";

export default function AddBehaviorBtn( { _index } ) {
    const { addBehavior } = useStrings();
    const handleClick = () => {
        addBehavior( _index );
    }
    return ( <>
        <Button variant="contained" color="success" onClick={ handleClick } sx={{mt:3}}>
            <Typography>Add Behavior</Typography> 
        </Button>
    </> );
}