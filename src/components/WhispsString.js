import React from "react";
import { Typography, Paper, Container } from "@mui/material";
import WhispsMods from "./WhispsMods";
import WhispsScale from './WhispsScale';
import WhispsColor from './WhispsColor';
import WhispsBehaviors from "./WhispsBehaviors";
import WhispsSpawn from "./WhispsSpawn";
import WhispsCount from "./WhispsCount";
import WhispsGroupString from "./WhispsGroupString";

export default function WhispsString( wString ) {
    const { count, preset, presetSubmods, mods, scale, color, behaviors,
        spawnTop, spawnRight, spawnBottom, spawnLeft, groupString } = wString;
    return ( <>
        <Paper variant='outlined'>
            <WhispsCount count={count}/>
            <WhispsMods preset={preset} presetSubmods={presetSubmods} mods={mods} />
            <WhispsScale scale={scale}/>
            <WhispsColor color={color}/>
            <WhispsBehaviors behaviors={behaviors}/>
            <WhispsSpawn spawnTop={spawnTop} spawnRight={spawnRight} spawnBottom={spawnBottom} spawnLeft={spawnLeft} />
            <WhispsGroupString groupString={groupString}/>
        </Paper>
    </> );
}