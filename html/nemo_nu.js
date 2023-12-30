// --- nemo data library - jae shin, jaeshin713+nemo@gmail.com  --- //
export const $nu = 
{
    version : '1.1',

    wid : -1,               // -- wait interval id
    wait_start : 0,
    wait_time : 0,
    wait_fps : 1000,

    socket : null,
    socket_connection_events : [],
}

// -- add clone convenience method to Array
Array.prototype.clone = function () { return this.slice ( 0 ); };

// -- add contains convenience method to Array
Array.prototype.contains = function ( test )
{
    if ( this == null ) {
          throw new TypeError( '"this" is null or not defined' );
    }

    var o = Object ( this );
    
    if ( o.indexOf ( test ) == -1 ) return false;
    else return true;
}

// -- add has function to String
String.prototype.has = function ( str )
{
    let found = false;

    chars = str.split( '' ).forEach ( function ( c )
    {
        idx = this.indexOf ( c );
        if ( idx != -1 ) found = true;
    }, this );

    return found;
}

// -- add left padding function to String
String.prototype.lpad = function ( pad_char, length )
{
    let s = this;
    while ( s.length < length ) s = pad_char + s ;
    return s;
}

// -- add right padding function to String
String.prototype.rpad = function ( pad_char, length )
{
    let s = this;
    while ( s.length < length ) s = s + pad_char ;
    return s;
}

// --
// -- execute function after delay t, in seconds
// -- 
$nu.next = function ( t, f )
{
    this.wait_time = t * 1000 ; 
    this.wait_start = Date.now ();

    // let _this = this ;
    this.wid = setInterval ( function ()
    {
        if ( this.has_wait_elapsed () ) 
        {
            clearInterval ( this.wid );
            f ();
        }
    }.bind ( this ), 1000 / this.wait_fps );

    return this.wid;
}

$nu.has_wait_elapsed = function ()
{
    return ( ( Date.now () - this.wait_start ) >= this.wait_time );
}


$nu.log_to_server = function ( data, time, _socket )
{
    let socket = _socket || this.socket ;
    let line = { clientid : clientID, event: data, clientTS: time };
    if ( socket ) socket.emit( 'log', line );
}


$nu.search_params = function ( _url )
{
    url = _url ;
    if ( ! _url && document ) url = document.location; 

    return ( new URL ( url ) ).searchParams;
}


// --
// -- get random integer, range inclusive 
// -- 
$nu.rand_int = function ( min, max )
{
    return Math.floor ( Math.random() * ( max - min + 1 )) + min;
}

// --
// -- get random float, range inclusive
// -- max is 20 for digits*
// -- digits = 0 makes this upper bound exclusive
// --
$nu.rand_float = function ( min, max , digits = 3 )
{
    if ( digits != 0 )
    {
        return Number.parseFloat(( Math.random () * ( max - min ) + min ).toFixed( digits ));
    }
    
    return ( Math.random () * ( max - min ) + min );
}

// --
// -- get a random element 
// --
$nu.choice = function ( list )
{
    return list [ randInt ( 0, list.length-1 ) ];
}

// coin flip basically, alternative to using choice ( [ 0, 1 ] )
$nu.flip = function ()
{
    return Date.now () % 2 ;
}

$nu.zeropad = function ( num, length )
{
    return ( '' + num ).lpad ( '0', length );
}    

$nu.local_timestamp = function ( millis )
{
    let d = new Date ( millis );

    return d.getFullYear() + '-' + 
        this.zeropad ( d.getMonth () + 1, 2) + '-' + 
        this.zeropad ( d.getDate (), 2) + 'T' +  
        this.zeropad ( d.getHours (), 2) + ':' + 
        this.zeropad ( d.getMinutes (), 2) + ':' + 
        this.zeropad ( d.getSeconds (), 2 );
}

// --
// -- shuffle algorithm by mike bostock
// --
$nu.shuffle = function ( list )
{
    let m = list.length, t, i;

    // while there remain elements to shuffle…
    while ( m ) {

        // pick a remaining element…
        i = Math.floor ( Math.random () * m-- );

        // and swap it with the current element.
        t = list [ m ];
        list [ m ] = list [ i ];
        list [ i ] = t;
    }

    return list;
}

$nu.gauss = function ( mu, sigma )
{
    twopi = 2.0 * Math.PI;
    x2pi = Math.random () * twopi;
    g2rad = Math.sqrt ( -2.0 * Math.log ( 1.0 - Math.random() ));
    z = Math.cos ( x2pi ) * g2rad;
    
    return mu + z * sigma;
}

$nu.which_browser = function ()
{

    if ( ! navigator ) return 'unknown';

    let ua = navigator.userAgent.toLowerCase() ;
    
    if ( ua.includes ( 'chrome' )) return 'chrome';
    else if ( ua.includes ( 'opera' )) return 'safari';
    else if ( ua.includes ( 'edge' )) return 'safari';
    else if ( ua.includes ( 'firefox' )) return 'firefox';
    else if ( ua.includes ( 'safari' )) return 'safari';
    else if ( ua.includes ( 'msie' ) || ua.includes ( 'trident' )) return 'ie';

}

// -- if socket.io lib available use provided socket
// -- make socket lib switchable later
// -- using only websockets protocol for now

$nu.open_socket = function ( _options )
{
    this.log_socket_connection_event ( 'establishing web socket connection, https = ' + _options.secure + ' ... ' )

    this.nodejs = false;

    if ( typeof io === "undefined" ) return;

    if ( io ) 
    {
        this.socket_type = 'io';
        this.nodejs = true ;
        this.socket = io.connect( { transports: [ 'websocket' ], reconnection: true } );
    }

    if ( this.socket )
    {
        
        this.init_socket_connect_event_logging ();
    }
}

$nu.close_socket = function ( )
{
    socket.close ();
}

$nu.cleanup_socket = function ( )
{
    console.log ( 'closing web socket' );
    this.close_socket ();
}
    
$nu.init_socket_connect_event_logging = function ()
{

    this.socket_connection_events = [];

    this.socket.on ( 'connect', () =>
    {
        this.log_socket_connection_event ( 'ws connected', true );
    });

    this.socket.on ( 'connect_timeout', ( timeout ) =>
    {
        this.log_socket_connection_event ( 'ws connection timeout for timeout value: ' + timeout );
    });

    this.socket.on ( 'disconnect', ( reason ) =>
    {
        this.log_socket_connection_event ( 'ws disconnected, because: ' + reason , true );
    });

    this.socket.on ( 'reconnect', ( attempt_num ) =>
    {
        this.log_socket_connection_event ( 'ws reconnect, attempt num: ' + attempt_num, true );
    });

    this.socket.on ( 'reconnecting', ( attempt_num ) =>
    {
        this.log_socket_connection_event ( 'ws reconnecting, attempt num: ' + attempt_num );
    });

}

$nu.log_socket_connection_event = function ( msg, extended_format )
{
    let msnow = Date.now ();
    let log_line = '[ ' + msnow + ', ' + this.local_timestamp ( msnow ) + ' ] ' + msg ;

    if ( extended_format )
        log_line += ' | connected status flag: ' + this.socket.connected + ', socket opts: ' + JSON.stringify ( this.socket.io.opts )

    console.log ( log_line );
    this.socket_connection_events.push ( log_line ) ;
}


$nu.send_instance = function ( _nemodata, _f )	// f optional callback function
{
    if ( ! this.socket ) return; 

    this.socket.on ( 'data saved', function ( data ) // data in this case is the instance returned as a json string
    {	
        var inst = JSON.parse ( data );
        if ( _f ) _f ( inst );
    });

    console.log ( '[' + this.local_timestamp ( Date.now () )  +'] emitting instance' );
    this.socket.emit ( 'save instance', _nemodata );
    
}



