import React from "react";
import { Grid, Paper, Stack, Select, MenuItem, Container } from "@mui/material";
import { useStrings } from "../context/StringsContext";
import { presetMods, getPresetSubmods } from "../utils/Strings";

export default function WhispsMods( {_index } ) {
    const { changeGroupProps, whispStrings } = useStrings();
    const thisGroup = whispStrings[ _index ];
    const { preset, presetSubmods, mods } = thisGroup;
    const { catList, obj } = getPresetSubmods( preset );
    const handlePresetChange = ( e ) => {
        const _preset = e.target.value;
        const psmObj = getPresetSubmods( _preset );
        const _catList = psmObj.catList;
        const _obj = psmObj.obj;
        let psm = {};
        for( let a = 0 ; a < _catList.length ; a += 1 ) {
            psm[ _catList[a] ] = _obj[ _catList[a] ][0];
            console.log(_obj[ _catList[a] ][0])
        }
        changeGroupProps( _index, { preset: _preset, presetSubmods: psm } );
    }
    const handleSubmodChange = ( e, _cat ) => {
        const psm = presetSubmods;
        psm[ _cat ] = e.target.value
        changeGroupProps( _index, { presetSubmods: psm } );

    }
    
    return ( <>
        <Paper variant="outlined" >
            <Stack direction="column" >
                <Select label='Preset Mod'
                    value={ preset }
                    variant="outlined"
                    color="secondary"
                    onChange={handlePresetChange}
                >
                    <MenuItem value='none'>none</MenuItem>
                    <MenuItem value='whisp'>whisp</MenuItem>
                </Select>
                { catList.length > 0 && 
                    catList.map( ( cat ) => {
                        return (
                            <Select label={ `${ cat }` }
                                value={ presetSubmods[ cat ] }
                                variant="filled"
                                onChange={ ( e ) => { handleSubmodChange( e, cat ) } }
                                color='primary'
                                sx={{ ml:'3em' }}
                                key={`wGroup-${ _index }-submod-select-${ cat }`}
                            >
                                { obj[ cat ].map( ( submod ) => {
                                    return (
                                        <MenuItem value={ submod } 
                                            key={`wGroup-${ _index }-submod-select-${ cat }-${ submod }`}
                                        >{ submod }</MenuItem>
                                    );
                                } ) }
                                
                            </Select>
                        );
                    } )
                }
            </Stack>
        </Paper>
    </> );
}