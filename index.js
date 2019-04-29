var _ = require( 'lodash' );

module.exports = function( data ) {

    if ( ! data ) {
        return;
    }

    data = JSON.parse( data );

    function getSCSS( chunk, initial ) {
        var scss = '';

        if ( typeof chunk === "object" && ! Array.isArray( chunk ) ) {
            _.mapKeys(chunk, function(value, key) {
                if (initial) {
                    scss += key + ': '
                } else {
                    scss += "'" + key + "': "
                }

                if (typeof value === "object") {
                    if ( Array.isArray( value ) ) {
                        scss += '(';
                        _.each(value, function( val1 ) {
                            if ( Array.isArray( val1 ) ) {
                                _.each(val1, function( val2 ) {
                                    scss += val2 + ' ';
                                });
                                scss = scss.slice(0, -1) + ', ';
                            } else {
                                scss += val1 + ', ';
                            }
                        });
                        scss = scss.slice(0, -2);
                        scss += ')';
                    } else {
                        scss += '(' + getSCSS( value ) + ')';
                    }
                } else {
                    scss += getSCSS( value );
                }
                scss += ', ';
            });
            scss = scss.slice(0, -2);
        } else {
            scss += chunk;
        }

        return scss;
    }

    return '$' + getSCSS( data, true ) + ';';
}
