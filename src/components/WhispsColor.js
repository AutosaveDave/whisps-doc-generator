import React, { useState } from "react";
import { Stack, Select, Box, MenuItem, FormControl, FormLabel, FormControlLabel, Radio, RadioGroup } from "@mui/material";
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
        <Box>
            <FormControl>
                <FormLabel >Color</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue={ true }
                    value={ isColorSet }
                    name="radio-buttons-group"
                    onChange={ handleRadioChange }
                >
                    <FormControlLabel value={false} control={<Radio />} label="Single Color" />
                    <FormControlLabel value={true} control={<Radio />} label="Color Set" />
                </RadioGroup>
            </FormControl>
            <Select label={ ( isColorSet ? 'Color Set' : 'Color' ) }
                defaultValue={ 'none' }
                value={ color }
                onChange={handleColorChange}
            >
                { getColorOptions( isColorSet ).map( ( colorOption, colorIndex ) => (
                    <MenuItem value={ colorOption }
                        key={ `color-menu-item-${ colorIndex }` }
                    >{ colorOption }</MenuItem>
                ) ) }
                
                <MenuItem value='whisp'>whisp</MenuItem>
            </Select>
        </Box>
    </> );
}