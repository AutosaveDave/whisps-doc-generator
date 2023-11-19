import React, { useState } from "react";
import { Stack, Select, Paper, MenuItem, FormControl, FormLabel, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { useStrings } from "../context/StringsContext";
import { getColorOptions } from "../utils/Colors";

export default function WhispsColor( { _index } ) {
    const { changeGroupProps, whispStrings } = useStrings();
    const { color, isColorSet } = whispStrings[ _index ];
    
    const handleRadioChange = ( e ) => {
        const ics = ( e.target.value === 'true' ? true : false );
        changeGroupProps( _index, { isColorSet: ics , color: 'none' } );
        console.log(typeof e.target.value)
    }
    const handleColorChange = ( e ) => {
        changeGroupProps( _index, { color: e.target.value } );
    }
    return ( <>
        <Paper sx={{backgroundColor:'secondary.light'}}>
            <Stack direction='column'>
                <FormControl>
                    <FormLabel sx={{ml:2, mt:1}}>Color</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue={ true }
                        value={ isColorSet }
                        name="radio-buttons-group"
                        onChange={ handleRadioChange }
                    >
                        <Stack direction='row' justifyContent={'space-around'}>
                            <FormControlLabel value={false} control={<Radio />} label="Single Color" />
                            <FormControlLabel value={true} control={<Radio />} label="Color Set" />
                        </Stack>
                    </RadioGroup>
                </FormControl>
                <Select label={ ( isColorSet ? 'Color Set' : 'Color' ) }
                    defaultValue={ 'none' }
                    value={ color }
                    onChange={handleColorChange}
                    sx={{mx:2, mb:2}}
                >
                    { getColorOptions( isColorSet ).map( ( colorOption, colorIndex ) => (
                        <MenuItem value={ colorOption }
                            key={ `color-menu-item-${ colorIndex }` }
                        >{ colorOption }</MenuItem>
                    ) ) }
                    
                    <MenuItem value='whisp'>whisp</MenuItem>
                </Select>
            </Stack>
        </Paper>
    </> );
}