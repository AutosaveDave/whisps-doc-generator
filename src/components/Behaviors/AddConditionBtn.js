import React from "react";
import { Button, Typography } from "@mui/material";
import { useStrings } from "../../context/StringsContext";

export default function AddConditionBtn( { _index, _bIndex } ) {
    const { addCondition } = useStrings();
    const handleClick = () => {
        addCondition( _index, _bIndex );
    }
    return ( <>
        <Button variant="contained" color="success" onClick={ handleClick } >
            <Typography>Add Condition</Typography> 
        </Button>
    </> );
}