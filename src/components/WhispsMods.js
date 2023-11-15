import React from "react";
import { Typography, Box, Container, Select, MenuItem } from "@mui/material";
import { useStrings } from "../context/StringsContext";

export default function WhispsMods( {_index, preset, presetSubmods, mods} ) {
    const { changeGroupProps } = useStrings();
    // const { preset, presetSubmods, mods } = whispStrings;
    const handleChange = ( e ) => {
        changeGroupProps( _index, { preset:e.target.value,} );
    }
    return ( <>
        <Select label='Preset Mod'
            value={ preset }
            variant="outlined"
            color="secondary"
            onChange={handleChange}
        >
            <MenuItem value='none'>none</MenuItem>
            <MenuItem value='whisps'>whisps</MenuItem>
        </Select>
    </> );
}