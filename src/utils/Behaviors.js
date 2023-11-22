const degToRad = deg => 2 * Math.PI * deg / 360; 
const followArgs = { // if property array values are numbers, value = [min, max]
    target: [ 'cursor', 'nearest' ],
    speed: [ 0, 1200 ],
    acceleration: [ 0, 600 ],
    rotation: [ 0, degToRad( 500 ) ],
}

export const actionTypeProps = {
    follow: {
        ...followArgs
    },
    flee: {
        ...followArgs
    },
};
export const conditionTypeArgNames = {
    in: [ 'Min Distance', 'Max Distance' ],
    out: [ 'Min Distance', 'Max Distance' ],
}

export const conditionProps = {
    subject: [ 'cursor', 'nearest'],
    type: [ 'in', 'out' ],
}

export const defaultBehavior = {
    actions: [ { 
        act: 'follow',
        target: 'cursor',
        args: [ 500, 100, 300 ], 
    } ], 
    conditions: [],
}

export const defaultCondition = {
    subject: 'cursor',
    type: 'in',
    args: [ 0, 800 ],
}

export const getActionArgNames = ( act ) => {
    const propKeyArray = Object.keys( actionTypeProps[ act ] );
    return ( propKeyArray.length > 0 ? 
        propKeyArray.slice( 1, propKeyArray.length ) :
        [] );
}