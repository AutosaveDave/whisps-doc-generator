import React from "react";
import { Typography, Paper, Stack, Box, Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { useStrings } from "../context/StringsContext";
import WhispsBehaviorActions from "./Behaviors/WhispsBehaviorActions";
import WhispsBehaviorConditions from "./Behaviors/WhispsBehaviorConditions";
import AddBehaviorBtn from "./Behaviors/AddBehaviorBtn";
import RemoveBehaviorBtn from "./Behaviors/RemoveBehaviorBtn";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function WhispsBehaviors( { _index } ) {
    const { whispStrings, changeGroupProps } = useStrings();
    const { behaviors } = whispStrings[ _index ];

    return ( <>
        <Accordion sx={{bgcolor:'secondary.light',}} key={`wgroup-${ _index }-b`}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
                <Typography variant='h5' 
                    color='tertiary.dark' 
                    sx={{ textAlign:'center' }}
                >Behaviors</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Stack direction='column' spacing={1}>
                    { behaviors.length > 0 &&
                        behaviors.map( ( behavior, i ) => (
                            <Paper sx={{bgcolor:'secondary.main', p:1}} 
                                key={`wgroup-${ _index }-b-paper-${ i }`}
                            >
                                <Stack direction='column' spacing={1}>
                                    <Stack direction='row' spacing={1} justifyContent='space-between' alignItems='center'>
                                        <Typography variant='h6' 
                                            color='tertiary.dark' 
                                        >Behavior {`${ i + 1 }`}</Typography>
                                        <Box maxHeight={0.8}>
                                            <RemoveBehaviorBtn _index={ _index } _bIndex={i} />
                                        </Box>
                                    
                                    </Stack>
                                    <WhispsBehaviorActions _index={_index} _bIndex={i} />
                                    <WhispsBehaviorConditions _index={_index} _bIndex={i} />
                                </Stack>
                                
                            </Paper>
                        ) )
                    }
                    <Box xs={5} textAlign='center'>
                        <AddBehaviorBtn _index={_index}  />
                    </Box>
                    
                </Stack>
            </AccordionDetails>
        </Accordion>
    </> );
}