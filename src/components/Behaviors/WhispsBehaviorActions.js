import React from "react";
import { Stack, Paper } from "@mui/material";
import { useStrings } from "../../context/StringsContext";
import BehaviorAction from "./BehaviorAction";
import AddActionBtn from "./AddActionBtn";

export default function WhispsBehaviorActions( { _index, _bIndex } ) {
    const { changeGroupProps, whispStrings } = useStrings();
    const { behaviors } = whispStrings[ _index ];
    const { actions } = behaviors[ _bIndex ];

    return ( <>
        <Paper sx={{ backgroundColor: 'secondary.light', p:1 }}>
            <Stack direction='column' spacing={1}>
                { actions.map( ( action, aIndex ) => (
                    <BehaviorAction _index={_index} _bIndex={_bIndex} _aIndex={aIndex} key={`wgroup-${ _index }-b-[${ _bIndex }]-action-${ aIndex }`} />
                ) ) }
                <AddActionBtn _index={ _index } _bIndex={ _bIndex } />
            </Stack>
        </Paper>
    </> );
}