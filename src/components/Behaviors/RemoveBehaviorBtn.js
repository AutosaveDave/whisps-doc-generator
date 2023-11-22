import React from "react";
import { IconButton, Typography } from "@mui/material";
import { useStrings } from "../../context/StringsContext";
import DeleteIcon from "@mui/icons-material/Delete";

export default function RemoveBehaviorBtn( { _index, _bIndex, } ) {
    const { removeBehavior } = useStrings();
    const handleClick = () => {
        removeBehavior( _index, _bIndex );
    }
    return ( <>
        <IconButton 
            aria-label="delete" 
            variant='delete'
            onClick={ handleClick } 
            size='small'
            
        >
            <DeleteIcon fontSize="small"/>
        </IconButton>
    </> );
}