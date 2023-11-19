export const colorHues = { red:0, orange:30, yellow:60, green:100, sea:150, cyan:180, 
    sky:200, blue:240, indigo:260, purple:280, pink:300, fuschia:335, white:-1 };
export const colorSets = {
    all: Object.values( colorHues ), any: Object.values( colorHues ),
    notWhite: Object.values( colorHues ).slice( 0, Object.values( colorHues ).length - 1 ),
    primary: [ colorHues.red, colorHues.blue, colorHues.yellow ],
    usa: [ colorHues.red, colorHues.white, colorHues.blue ],
    rgb: [ colorHues.red, colorHues.green, colorHues.blue ],
    eldritch: [ colorHues.fuschia, colorHues.purple, colorHues.indigo, colorHues.pink ],
    fire: [ colorHues.red, colorHues.orange, colorHues.yellow ],
    soulfire: [ colorHues.yellow, colorHues.green, colorHues.sea ],
    aquatic: [ colorHues.blue, colorHues.sky, colorHues.sea, colorHues.cyan ],
    seaweed: [ colorHues.blue, colorHues.sky, colorHues.sea, colorHues.cyan, colorHues.green, colorHues.indigo ],
    mystic: [ colorHues.white, colorHues.cyan, colorHues.sky, colorHues.yellow ],
    mythic: [ colorHues.yellow, colorHues.cyan, colorHues.fuschia ],
};

export const getIsColorSet = ( _color ) => {
    const colorsArray = [ 'none', ...Object.keys( colorHues ) ];
    const setsArray = [ 'none', ...Object.keys( colorSets ) ];
    if( setsArray.includes( _color ) ) {
        return true;
    } else if( colorsArray.includes( _color ) ) {
        return false;
    }
    return true;
}

export const getColorOptions = ( _isColorSet ) => {
    return ( _isColorSet ?
        [ 'none', ...Object.keys( colorSets ) ] :
        [ 'none', ...Object.keys( colorHues ) ]
    );
}