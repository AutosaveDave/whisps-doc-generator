export const getWhispsDoc = ( docName, docAlpha, docZ, wStrings ) => {
    let wDoc = '';
    if( docName && !( docName === '' ) ) {
        wDoc += `:${ docName } `;
    }
    if( docAlpha ) {
        wDoc += `${ docAlpha }% `;
    }
    if( docZ ) {
        wDoc += `Z${ docZ } `;
    }
    if( wStrings && wStrings.length > 0 ) {
        wStrings.forEach( stringObj => {
            wDoc += `${ stringObj.groupString } `;
        } );
    }
    wDoc.trimEnd();
    return wDoc;
}