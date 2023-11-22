import React from "react";
import { Typography, Paper, Stack } from "@mui/material";
import { useStrings } from "../context/StringsContext";
import WhispsBehaviorActions from "./Behaviors/WhispsBehaviorActions";
import WhispsBehaviorConditions from "./Behaviors/WhispsBehaviorConditions";
import AddBehaviorBtn from "./Behaviors/AddBehaviorBtn";



export default function WhispsBehaviors( { _index } ) {
    const { whispStrings, changeGroupProps } = useStrings();
    const { behaviors } = whispStrings[ _index ];

    return ( <>
        <Paper sx={{backgroundColor:'secondary.light'}} key={`wgroup-${ _index }-b`}>
            <Stack direction='column' spacing={1}>
                { behaviors.length > 0 &&
                    behaviors.map( ( behavior, i ) => (
                        <div key={`wgroup-${ _index }-b-div-${ i }`}>
                            <WhispsBehaviorActions _index={_index} _bIndex={i} />
                            <WhispsBehaviorConditions _index={_index} _bIndex={i} />
                        </div>
                    ) )
                }
                <AddBehaviorBtn _index={_index} />
            </Stack>
        </Paper>
    </> );
}