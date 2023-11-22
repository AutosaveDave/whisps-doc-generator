import React from "react";
import { IconButton } from "@mui/material";
import { useStrings } from "../../context/StringsContext";
import DeleteIcon from '@mui/icons-material/Delete';

export default function RemoveConditionBtn( { _index, _bIndex, _cIndex } ) {
    const { removeCondition } = useStrings();
    const handleClick = () => {
        removeCondition( _index, _bIndex, _cIndex );
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