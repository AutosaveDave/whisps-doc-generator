import React from "react";
import { Button, Typography } from "@mui/material";
import { useStrings } from "../../context/StringsContext";

export default function RemoveConditionBtn( { _index, _bIndex, _cIndex } ) {
    const { removeCondition } = useStrings();
    const handleClick = () => {
        removeCondition( _index, _bIndex, _cIndex );
    }
    return ( <>
        <Button variant="contained" color="warning" onClick={ handleClick } sx={{mt:3}}>
            <Typography>Remove Condition</Typography> 
        </Button>
    </> );
}