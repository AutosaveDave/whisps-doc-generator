export const defaultGroupProps = {
    count: 6,
    preset: 'none',
    presetSubmods: {},
    mods: [],
    scale: 3,
    isColorSet: true,
    color: 'mystic',
    behaviors: [],
    spawnTop: [ 0, 100 ],
    spawnRight: [ 0, 100 ],
    spawnBottom: [ 0, 100 ],
    spawnLeft: [ 0, 100 ],
}


const speedSubmods = [ 'none', 'slowest', 'slower', 'slow', 'slowish', 
    'fastish', 'fast', 'faster', 'veryfast', 'fastest' ];

// Each preset mod has an object containing categorized sets of subMods
const presetMods = {
    none: {},
    whisp: {
        speed: [ ...speedSubmods ],

    }
}

export const getPresetSubmods = ( _preset ) => {
    if( !_preset || presetMods[ _preset ] === 'none' ) {
        return null;
    }
    const catList =  Object.keys( presetMods[ _preset ] );
    return { catList: catList, obj: presetMods[ _preset ] };
}

export const getPresetModString = ( _preset, _submods ) => {
    let presetString = '';
    if( !( _preset === "none" ) ) {
        presetString = `${ _preset }`;
        if( Object.keys( _submods ).length > 0 ) {
            Object.values( _submods ).forEach( submod => {
                if( !( submod === 'none' ) && !( submod === '' ) )
                presetString += `-${ submod }`;
            } );
        }
    }
    return presetString;
}
export const getModsString = ( mods ) => {
    let modsString = '';
    if( mods.length > 0 ) {
        mods.forEach( mod => {
            modsString += ` ${ mod }`;
        } );
    }
    return modsString;
}
export const getScaleString = ( scale ) => {
    let scaleString = '';
    if( scale ) {
        scaleString += ` LS-${ scale }`;
    }
    return scaleString;
}
export const getColorString = ( color ) => {
    let colorString = '';
    if( color ) {
        colorString += ` LC-${ color }`;
    }
    return colorString;
}
export const getBehaviorsString = ( behaviors ) => {
    let bString = '';
    let result = '';
    if( behaviors.length > 0 )
    behaviors.forEach( ( behav ) => {
        bString = 'B';
        if( behav.hasOwnProperty( 'actions' ) && behav.actions.length > 0 ) {
            behav.actions.forEach( action => {
                bString += `-${ action.act }.${ action.target }`;
                action.args.forEach( arg => {
                    bString += `.${ arg }`;
                } );
            } );
        }
        if( behav.hasOwnProperty( 'conditions' ) && behav.conditions.length > 0 ) {
            behav.conditions.forEach( condition => {
                bString += `-if.${ condition.subject }.${ condition.type }`
                condition.args.forEach( arg => {
                    bString += `.${ arg }`;
                } );
            } );
        }
        result += ` ${ bString }`;
    } );
    return result;
}
export const getSpawnString = ( _top, _right, _bottom, _left ) => {
    let spawnArray = [ _top, _right, _bottom, _left ];
    let sideGroup = [ -1, -1, -1, -1 ];
    const sideArray = [ 't', 'r', 'b', 'l' ];
    let prefix = '';
    let spawnString = '';
    let groupIndex = 0;
    for( let a = 0; a < 4; a += 1 ) {
        prefix = '';
        if( sideGroup[ a ] < 0 ) {
            sideGroup[ a ] = groupIndex;
            prefix += sideArray[ a ];
            groupIndex += 1;
            for( let b = a + 1; b < 4 ; b += 1 ) {
                if( sideGroup[ b ] < 0 && spawnArray[a][0] === spawnArray[b][0] && spawnArray[a][1] === spawnArray[b][1] ) {
                    sideGroup[ b ] = sideGroup[ a ];
                    prefix += sideArray[ b ];
                }
            }
            spawnString += ` @-${ prefix }-${ spawnArray[a][0] }-${ spawnArray[a][1] }`;
        }
    } 
    return spawnString;
}
export const getGroupString = ( stringObj ) => {
    const { count, preset, presetSubmods, mods, scale, color, behaviors,
            spawnTop, spawnRight, spawnBottom, spawnLeft } = stringObj;
    const presetString = getPresetModString( preset, presetSubmods );
    const modsString = getModsString( mods );
    const scaleString = getScaleString( scale );
    const colorString = getColorString( color );
    const behavString = getBehaviorsString( behaviors );
    const spawnString = getSpawnString( spawnTop, spawnRight, spawnBottom, spawnLeft );
    return `${ count }x(${ presetString }${ modsString }${ scaleString }${ colorString }${ behavString }${ spawnString })`;
};