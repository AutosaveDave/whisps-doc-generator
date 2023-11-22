import React from "react";
import { Stack, Paper } from "@mui/material";
import { useStrings } from "../../context/StringsContext";
import BehaviorCondition from "./BehaviorCondition";
import AddConditionBtn from "./AddConditionBtn";

export default function WhispsBehaviorConditions( { _index, _bIndex } ) {
    const { changeGroupProps, whispStrings } = useStrings();
    const { behaviors } = whispStrings[ _index ];
    const { conditions } = behaviors[ _bIndex ];

    return ( <>
        <Paper sx={{ backgroundColor: 'secondary.light' }}>
            <Stack direction='column' spacing={1}>
                { conditions.map( ( condition, cIndex ) => (
                    <BehaviorCondition _index={_index} _bIndex={_bIndex} _cIndex={cIndex} 
                        key={`wgroup-${ _index }-b-[${ _bIndex }]-condition-${ cIndex }`}
                    />
                ) ) }
                <AddConditionBtn _index={ _index } _bIndex={ _bIndex } />
            </Stack>
        </Paper>
    </> );
}