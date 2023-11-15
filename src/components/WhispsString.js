import React from "react";
import { Typography, Paper, Container } from "@mui/material";
import WhispsMods from "./WhispsMods";
import WhispsScale from './WhispsScale';
import WhispsColor from './WhispsColor';
import WhispsBehaviors from "./WhispsBehaviors";
import WhispsSpawn from "./WhispsSpawn";
import WhispsCount from "./WhispsCount";
import WhispsGroupString from "./WhispsGroupString";
import RemoveWhispsGroupBtn from "./RemoveWhispsGroupBtn";
import { useStrings } from "../context/StringsContext";

export default function WhispsString( {wString, _index} ) {
    const { count, preset, presetSubmods, mods, scale, color, behaviors,
        spawnTop, spawnRight, spawnBottom, spawnLeft, groupString } = wString;
    console.log(`whispsString[ ${ _index } ] :`)
    console.log(wString);
    return ( <>
        <Paper variant='outlined' sx={{ m:2, padding:3, backgroundColor:'primary.light' }}>
            <WhispsCount count={count}/>
            <WhispsMods _index={_index} preset={preset} presetSubmods={presetSubmods} mods={mods} />
            <WhispsScale scale={scale}/>
            <WhispsColor color={color}/>
            <WhispsBehaviors behaviors={behaviors}/>
            <WhispsSpawn spawnTop={spawnTop} spawnRight={spawnRight} spawnBottom={spawnBottom} spawnLeft={spawnLeft} />
            <WhispsGroupString groupString={groupString}/>
            <RemoveWhispsGroupBtn _index={ _index }/>
        </Paper>
    </> );
}