import { createContext, useContext, useState } from "react";
import { getGroupString, defaultGroupProps } from "../utils/Strings";

const stringsContext = createContext(null);

export function StringsContextProvider( { children } ) {

    const [ stringsTrigger, setStringsTrigger ] = useState( false );

    const triggerStrings = () => {
        const ts = stringsTrigger;
        setStringsTrigger( !ts );
    }

    const [ whispStrings, setWhispStrings ] = useState( 
        [ { ...defaultGroupProps, groupString: getGroupString( defaultGroupProps ) }, ]
    );
    
    const addGroup = () => {
        const currentStrings = whispStrings;
        const newString = { ...defaultGroupProps, groupString: getGroupString( defaultGroupProps ) };
        setWhispStrings( [ ...currentStrings, newString ] );
        triggerStrings();
    };

    const removeGroup = ( index ) => {
        const currentStrings = whispStrings;
        currentStrings.splice( index, 1 );
        setWhispStrings( currentStrings );
    }

    const updateString = ( index ) => {
        const currentStrings = whispStrings;
        currentStrings[ index ].groupString = getGroupString( currentStrings[ index ] );
        setWhispStrings( currentStrings );
    }

    const updateStrings = () => {
        const currentStrings = whispStrings;
        for( let a = 0; a < currentStrings.length; a+=1 ) {
            currentStrings[ a ].groupString = getGroupString( currentStrings[ a ] );
        }
        setWhispStrings( currentStrings );
    }
        
    return (
        <stringsContext.Provider
            value= {{ 
                whispStrings, setWhispStrings,
                addGroup, removeGroup,
                updateString, updateStrings,
                triggerStrings,
            }} 
        >
        { children }
        </stringsContext.Provider>
    );
}

export function useStrings() {
  return useContext( stringsContext );
}