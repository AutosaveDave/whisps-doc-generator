import React from "react";
import { Typography, Box, Container, Select, MenuItem } from "@mui/material";

export default function WhispsMods( preset, presetSubmods, mods ) {
    return ( <>
        <Select label='Preset Mod'
            value='none'
            
        >
            <MenuItem value='none' >none</MenuItem>
            <MenuItem value='whisps'>whisps</MenuItem>
        </Select>
    </> );
}