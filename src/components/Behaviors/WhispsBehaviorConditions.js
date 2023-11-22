import React from "react";
import { Stack, Paper, Box } from "@mui/material";
import { useStrings } from "../../context/StringsContext";
import BehaviorCondition from "./BehaviorCondition";
import AddConditionBtn from "./AddConditionBtn";

export default function WhispsBehaviorConditions( { _index, _bIndex } ) {
    const { changeGroupProps, whispStrings } = useStrings();
    const { behaviors } = whispStrings[ _index ];
    const { conditions } = behaviors[ _bIndex ];

    return ( <>
        <Paper sx={{ backgroundColor: 'secondary.light', p:1 }}>
            <Stack direction='column' spacing={1}>
                { conditions.map( ( condition, cIndex ) => (
                    <BehaviorCondition _index={_index} _bIndex={_bIndex} _cIndex={cIndex} 
                        key={`wgroup-${ _index }-b-[${ _bIndex }]-condition-${ cIndex }`}
                    />
                ) ) }
                <Box xs={4} textAlign='end'>
                    <AddConditionBtn _index={ _index } _bIndex={ _bIndex } />
                </Box>
                
            </Stack>
        </Paper>
    </> );
}