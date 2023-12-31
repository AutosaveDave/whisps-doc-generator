import React from "react";
import { Typography, Paper, Stack } from "@mui/material";
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
        <Paper variant='outlined' sx={{ m:2, padding:2, backgroundColor:'primary.light' }}>
            <WhispsGroupString groupString={groupString} _index={_index}/>
            <Stack direction="column" spacing={1}>
                <WhispsCount count={count} _index={_index}/>
                <WhispsMods _index={_index}/>
                <WhispsScale scale={scale} _index={_index}/>
                <WhispsColor _index={_index}/>
                <WhispsBehaviors _index={_index}/>
                <WhispsSpawn spawnTop={spawnTop} spawnRight={spawnRight} spawnBottom={spawnBottom} spawnLeft={spawnLeft} />
                <RemoveWhispsGroupBtn _index={ _index }/>
            </Stack>
        </Paper>
    </> );
}