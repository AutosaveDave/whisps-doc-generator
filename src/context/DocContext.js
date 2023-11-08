import { createContext, useContext, useState } from "react";
import { getWhispsDoc } from "../utils/Docs";
import { useStrings } from "./StringsContext";

const docContext = createContext(null);

export function DocContextProvider( { children } ) {

  const { whispStrings } = useStrings();

  const [ whispsDoc, setWhispsDoc ] = useState('');
  const [ docName, setDocName ] = useState( 'w1' );
  const [ docAlpha, setDocAlpha ] = useState( 50 );
  const [ docZ, setDocZ ] = useState( 2 );

  const updateWhispsDoc = () => {
    setWhispsDoc( getWhispsDoc( docName, docAlpha, docZ, whispStrings ) );
  }

  return (
    <docContext.Provider
        value= {{ 
          whispsDoc, setWhispsDoc,
          docName, setDocName,
          docAlpha, setDocAlpha,
          docZ, setDocZ,
          updateWhispsDoc,
        }}
    >
      { children }
    </docContext.Provider>
  );
}

export function useDoc() {
  return useContext(docContext);
}