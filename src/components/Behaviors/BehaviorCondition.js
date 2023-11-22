import React from "react";
import { Select, MenuItem, Paper, TextField, Stack, Typography, Box } from "@mui/material";
import { useStrings } from "../../context/StringsContext";
import { conditionProps, conditionTypeArgNames } from "../../utils/Behaviors";
import RemoveConditionBtn from './RemoveConditionBtn';

export default function BehaviorCondition( { _index, _bIndex, _cIndex } ) {
    const { changeGroupProps, whispStrings } = useStrings();
    const { behaviors } = whispStrings[ _index ];
    const { conditions } = behaviors[ _bIndex ];
    const condition = conditions[ _cIndex ];
    const { subject, type, args } = condition;

    const handleSubjectChange = ( e ) => {
        const _behaviors = behaviors;
        _behaviors[ _bIndex ].conditions[_cIndex].subject = e.target.value;
        changeGroupProps( _index, { behaviors: _behaviors } );
    }
    const handleTypeChange = ( e ) => {
        const _behaviors = behaviors;
        _behaviors[ _bIndex ].conditions[_cIndex].type = e.target.value;
        changeGroupProps( _index, { behaviors: _behaviors } );
    }
    const handleArgChange = ( e, i ) => {
        const _behaviors = behaviors;
        _behaviors[ _bIndex ].conditions[ _cIndex ].args[ i ] = Number( e.target.value );
        changeGroupProps( _index, { behaviors: _behaviors } );
    }

    return ( <>
        <Paper sx={{ backgroundColor:'secondary.main', p:1 }} >
            <Stack direction="column" spacing={1}>
                <Stack direction='row' justifyContent='space-between' sx={{alignContent:'start'}}>
                    <Typography variant='h6'>Condition</Typography>
                    <Box maxHeight={0.8} >
                        <RemoveConditionBtn _index={_index} _bIndex={_bIndex} _cIndex={_cIndex} />
                    </Box>
                    
                </Stack>
                <Stack direction="row" spacing={1} xs={2}>
                    <Select label='Subject'
                        value={ subject }
                        onChange={ handleSubjectChange }
                    >
                        { conditionProps.subject.map( _subject => (
                            <MenuItem value={ _subject } 
                                key={`wgroup-${ _index }-b-[${ _bIndex }]-cond-${ _cIndex }-subjectmenu-${ _subject }`}
                            >{ _subject }</MenuItem>
                        ) ) }
                    </Select>

                    <Select label='Type'
                        value={ type }
                        onChange={ handleTypeChange }
                    >
                        { conditionProps.type.map( arg => (
                            <MenuItem value={ arg } 
                                key={`wgroup-${ _index }-b-[${ _bIndex }]-cond-${ _cIndex }-typemenu-${ arg }`}
                            >{ arg }</MenuItem>
                        ) ) }
                    </Select>
                </Stack>
                <Stack direction="row" spacing={1}>
                    { conditionTypeArgNames[type].map( ( argName, argNameIndex ) => (
                        <TextField 
                            label={ argName }
                            key={`wgroup-${ _index }-b-[${ _bIndex }]-cond-${ _cIndex }-arg-${ argNameIndex }-input`}
                            value={ args[ argNameIndex ] }
                            onChange={ ( e ) => { handleArgChange( e, argNameIndex ) } }
                        />
                    ) ) }
                </Stack>
            </Stack>
        </Paper>
    </> );
}