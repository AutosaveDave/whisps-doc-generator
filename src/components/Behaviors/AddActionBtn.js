import React from "react";
import { Button, Typography } from "@mui/material";
import { useStrings } from "../../context/StringsContext";

export default function AddActionBtn( { _index, _bIndex } ) {
    const { addAction } = useStrings();
    const handleClick = () => {
        addAction( _index, _bIndex );
    }
    return ( <>
        <Button variant="contained" color="success" onClick={ handleClick }>
            <Typography>Add Action</Typography> 
        </Button>
    </> );
}