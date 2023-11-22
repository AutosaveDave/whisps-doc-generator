import { createContext, useContext, useState } from "react";
import { getGroupString, defaultGroupProps } from "../utils/Strings";
import { defaultBehavior, defaultCondition } from "../utils/Behaviors";

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
        triggerStrings();
    }

    const changeGroupProps = ( _i, propObj ) => {
        let currentStrings = whispStrings;
        Object.entries( propObj ).forEach( ( [ key, val ] ) => {
            currentStrings[_i][ `${key}` ] = val;
        } );
        setWhispStrings( currentStrings );
        triggerStrings();
        updateString( _i );
        triggerStrings();
    }

    const updateString = ( index ) => {
        const currentStrings = whispStrings;
        currentStrings[ index ].groupString = getGroupString( currentStrings[ index ] );
        setWhispStrings( currentStrings );
        triggerStrings();
    }

    const updateStrings = () => {
        const currentStrings = whispStrings;
        for( let a = 0; a < currentStrings.length; a+=1 ) {
            currentStrings[ a ].groupString = getGroupString( currentStrings[ a ] );
        }
        setWhispStrings( currentStrings );
        triggerStrings();
    }

    const addBehavior = ( _i ) => {
        const currentStrings = whispStrings;
        currentStrings[ _i ].behaviors.push( defaultBehavior ); 
        setWhispStrings( currentStrings );
        triggerStrings();
        updateString( _i );
        triggerStrings();
    }

    const removeBehavior = ( _i, _bIndex ) => {
        const currentStrings = whispStrings;
        currentStrings[ _i ].behaviors.splice( _bIndex, 1 ); 
        setWhispStrings( currentStrings );
        triggerStrings();
        updateString( _i );
        triggerStrings();
    }

    const addAction = ( _i, _bIndex ) => {
        const currentStrings = whispStrings;
        currentStrings[ _i ].behaviors[ _bIndex ].actions.push( defaultBehavior.actions[0] ); 
        setWhispStrings( currentStrings );
        triggerStrings();
        updateString( _i );
        triggerStrings();
    }
    
    const removeAction = ( _i, _bIndex, _aIndex ) => {
        let currentStrings = whispStrings;
        if( currentStrings[ _i ].behaviors[ _bIndex ].actions.length > 1 ) {
            currentStrings[ _i ].behaviors[ _bIndex ].actions.splice( _aIndex, 1 );
        } 
        setWhispStrings( currentStrings );
        triggerStrings();
        updateString( _i );
        triggerStrings();
    }

    const addCondition = ( _i, _bIndex ) => {
        const currentStrings = whispStrings;
        currentStrings[ _i ].behaviors[ _bIndex ].conditions.push( defaultCondition ); 
        setWhispStrings( currentStrings );
        triggerStrings();
        updateString( _i );
        triggerStrings();
    }
    const removeCondition = ( _i, _bIndex, _cIndex ) => {
        const currentStrings = whispStrings;
        currentStrings[ _i ].behaviors[ _bIndex ].conditions.splice( _cIndex, 1 ); 
        setWhispStrings( currentStrings );
        triggerStrings();
        updateString( _i );
        triggerStrings();
    }
        
    return (
        <stringsContext.Provider
            value= {{ 
                whispStrings, setWhispStrings,
                addGroup, removeGroup,
                updateString, updateStrings,
                triggerStrings, changeGroupProps,
                addBehavior, removeBehavior,
                addAction, removeAction,
                addCondition, removeCondition
            }} 
        >
        { children }
        </stringsContext.Provider>
    );
}

export function useStrings() {
  return useContext( stringsContext );
}