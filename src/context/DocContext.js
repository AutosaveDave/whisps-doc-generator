import { createContext, useContext, useState } from "react";

const docContext = createContext(null);

export function DocContextProvider( { children } ) {

  const [ whispDoc, setWhispDoc ] = useState('');
  const [ docName, setDocName ] = useState( 'w1' );
  const [ docAlpha, setDocAlpha ] = useState( 50 );
  const [ docZ, setDocZ ] = useState( 2 );

  return (
    <docContext.Provider
        value= {{ 
          whispDoc, setWhispDoc,
          docName, setDocName,
          docAlpha, setDocAlpha,
          docZ, setDocZ,
        }}
    >
      { children }
    </docContext.Provider>
  );
}

export function useDoc() {
  return useContext(docContext);
}