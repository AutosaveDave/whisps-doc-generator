import React from "react";
import { Select, MenuItem, Paper } from "@mui/material";
import { useStrings } from "../../context/StringsContext";
import { actionTypeProps } from "../../utils/Behaviors";

export default function BehaviorCondition( { _index, _bIndex, _cIndex } ) {
    const { changeGroupProps, whispStrings } = useStrings();
    const { behaviors } = whispStrings[ _index ];
    const { conditions } = behaviors[ _bIndex ];
    const condition = conditions[ _cIndex ];
    const { subject, type, args } = condition;

    const handleActChange = ( e ) => {
        
    }
    const handleTargetChange = ( e ) => {
        
    }

    return ( <>
        <Paper sx={{ backgroundColor:'green' }} >
            <Select label='Subject'
                value={ subject }
                onChange={ handleActChange }
            >
                { Object.keys( actionTypeProps ).map( _type => (
                    <MenuItem value={ _type } >{ _type }</MenuItem>
                ) ) }
            </Select>

            <Select label='Target'
                value={ type }
                onChange={ handleTargetChange }
            >
                { actionTypeProps[ subject ].target.map( _target => (
                    <MenuItem value={ _target } >{ _target }</MenuItem>
                ) ) }
            </Select>
        </Paper>
    </> );
}