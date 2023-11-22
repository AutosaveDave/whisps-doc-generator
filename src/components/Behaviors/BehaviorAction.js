import React from "react";
import { Select, MenuItem, Paper, Stack, TextField, Typography, Box } from "@mui/material";
import { useStrings } from "../../context/StringsContext";
import { actionTypeProps, getActionArgNames } from "../../utils/Behaviors";
import RemoveActionBtn from './RemoveActionBtn';

export default function BehaviorAction( { _index, _bIndex, _aIndex } ) {
    const { changeGroupProps, whispStrings } = useStrings();
    const { behaviors } = whispStrings[ _index ];
    const { actions } = behaviors[ _bIndex ];
    const action = actions[ _aIndex ];
    const { act, target, args } = action;
    const actionArgNames = getActionArgNames( act )

    const handleActChange = ( e ) => {
        const _behaviors = behaviors;
        _behaviors[ _bIndex ].actions[_aIndex].act = e.target.value;
        changeGroupProps( _index, { behaviors: _behaviors } );
    }
    const handleTargetChange = ( e ) => {
        const _behaviors = behaviors;
        _behaviors[ _bIndex ].actions[_aIndex].target = e.target.value;
        changeGroupProps( _index, { behaviors: _behaviors } );
    }
    const handleArgChange = ( e, i ) => {
        const _behaviors = behaviors;
        _behaviors[ _bIndex ].actions[ _aIndex ].args[ i ] = Number( e.target.value );
        changeGroupProps( _index, { behaviors: _behaviors } );
    }

    return ( <>
        <Paper sx={{ backgroundColor:'secondary.main', p:1, m:1 }} >
            <Stack direction="column" spacing={1}>
                <Stack direction='row' justifyContent='space-between' sx={{alignContent:'start'}}>
                    <Typography variant='h6'>Action</Typography>
                    <RemoveActionBtn _index={_index} _bIndex={_bIndex} _aIndex={_aIndex} />
                </Stack>
                <Stack direction="row" spacing={1}>
                    <Select label='Action'
                        value={ act }
                        onChange={ handleActChange }
                    >
                        { Object.keys( actionTypeProps ).map( type => (
                            <MenuItem value={ type } 
                                key={`wgroup-${ _index }-b-[${ _bIndex }]-action-type-${ type }`}
                            >{ type }</MenuItem>
                        ) ) }
                    </Select>
                    <Select label='Target'
                        value={ target }
                        onChange={ handleTargetChange }
                    >
                        { actionTypeProps[ act ].target.map( _target => (
                            <MenuItem value={ _target }  
                                key={`wgroup-${ _index }-b-[${ _bIndex }]-action-type-${ _target }`}
                            >{ _target }</MenuItem>
                        ) ) }
                    </Select>
                </Stack>
                <Stack direction="row" spacing={1}>
                    { actionArgNames.map( ( argName, argNameIndex ) => (
                        <TextField 
                            label={ argName }
                            key={`wgroup-${ _index }-b-[${ _bIndex }]-action-${ _aIndex }-arg-${ argNameIndex - 1 }-input`}
                            value={ args[ argNameIndex ] }
                            onChange={ ( e ) => { handleArgChange( e, argNameIndex ) } }
                        />
                    ) ) }
                </Stack>
            </Stack>
        </Paper>
    </> );
}