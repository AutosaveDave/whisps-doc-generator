import React from "react";
import { IconButton } from "@mui/material";
import { useStrings } from "../../context/StringsContext";
import DeleteIcon from '@mui/icons-material/Delete';

export default function RemoveActionBtn( { _index, _bIndex, _aIndex } ) {
    const { removeAction, whispStrings } = useStrings();
    const _disabled = ( whispStrings[_index].behaviors[_bIndex].actions.length <= 1 );
    const handleClick = () => {
        removeAction( _index, _bIndex, _aIndex );
    }
    return ( <>
        <IconButton 
            aria-label="delete" 
            disabled={_disabled}
            onClick={ handleClick }
            size='small' 
        >
            <DeleteIcon fontSize='small'/>
        </IconButton>
    </> );
}