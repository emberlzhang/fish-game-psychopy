import { $nu } from './nemo_nu.js'
// --- nemo data library - jae shin, jaeshin713+nemo@gmail.com  --- //
// -- requires nemo util library ( $nu )
// --
export const $nd = 
{
    version : '1.1',

    name : '',
    description : '',
    role : 'default' ,
    cohortid : '',
    subjectid : '',
    sessionid : '',
    nemoid : '',
    token : '',
    practice : false,
    fullscreen : false,
    status : 'incomplete',

    events : [],
    text_log : [],

    metadata : { 'nemo_data_version' : this.version },

    console_logging : false,
    client_logging : true
}

$nd.init = function ( role )
{
    this.role = role || 'default' ;

    let params = ( new URL ( document.location )).searchParams;
    let qp = {};

    params.forEach ( ( v, k ) => { qp [ k ] = v; });

    this.port = location.port || ( location.protocol === 'https:' ? '443' : '80' );
    this.uri = ( document.location.pathname ).split ( '/' ).pop ();
    this.url = location.href;

    this.millis = Date.now ();
    this.end_millis = 0;

    this.iso_timestamp = new Date( this.millis ).toISOString ();
    this.local_timestamp = $nu.local_timestamp ( this.millis );

    // -- for backwards compatibility
    this.endMillis = this.end_millis;
    this.isoTimestamp = this.iso_timestamp;
    this.localTimestamp = this.local_timestamp;

    if ( qp.cohortid ) this.cohortid = qp.cohortid;
    if ( qp.subjectid ) this.subjectid = qp.subjectid;
    if ( qp.token ) this.token = qp.token;
    if ( qp.nemoid ) this.nemoid = qp.nemoid;
    if ( qp.subjectid ) this.subjectid = qp.subjectid;
    if ( qp.sessionid ) this.sessionid = qp.sessionid;

    // check if instructions should be skipped //
    if ( qp.skipinstr && 
            ( 'tyTY'.indexOf ( qp.skipinstr ) != -1 
                        || qp.skipinstr.toLowerCase().includes ( 'true' ) 
                        || qp.skipinstr.toLowerCase().includes ( 'yes' ) )) this.skipinstr = true;

    // check if this a practice run
    if ( qp.practice && 
            ( 'tyTY'.indexOf ( qp.practice ) != -1 
                        || qp.practice.toLowerCase().includes ( 'true' ) 
                        || qp.practice.toLowerCase().includes ( 'yes' ) )) this.practice = true;

    // check if fullscreen requested
    if ( qp.fullscreen && 
        ( 'tyTY'.indexOf ( qp.fullscreen ) != -1 
                   || qp.fullscreen.toLowerCase().includes ( 'true' ) 
                   || qp.fullscreen.toLowerCase().includes ( 'yes' ) )) this.fullscreen = true;							

    // debug info
    if ( qp.debug && 
            ( 'tyTY'.indexOf ( qp.debug ) != -1 
                        || qp.debug.toLowerCase().includes ( 'true' ) 
                        || qp.debug.toLowerCase().includes ( 'yes' ) )) this.debug = true;


    if ( qp.consoleoutput && 
        [ 'yes', 'y', 'true', 't' ].includes ( $nc.queryParams.consoleoutput.toLowerCase () )) {

            this.console_logging = true;
    }

    this.allowQuit = true;
    this.allowOptions = false;

    // check override for allowQuit
    if ( qp.allowquit  
             && ( 'tyTY'.indexOf ( qp.allowquit ) != -1 
                        || qp.allowquit.toLowerCase().includes ( 'true' ) 
                        || qp.allowquit.toLowerCase().includes ( 'yes' ) )) this.allowQuit = true;


    // check override for allowOptions
    if ( ( qp.allowoptions ) 
             && ( 'tyTY'.indexOf ( qp.allowoptions ) != -1 
                        || qp.allowoptions.toLowerCase().includes ( 'true' ) 
                        || qp.allowoptions.toLowerCase().includes ( 'yes' ) )) this.allowOptions = true;


    this.query_params = qp;
    
    let md = this.metadata;

    md.port = this.port ;
    md.uri = this.uri ;
    md.url = this.url ;
    md.query_params = this.query_params ;
    md.role = this.role ;

    if ( this.debug ) md.debug_info = [];
    
    $nu.open_socket ( { secure : location.protocol === 'https:' ? true : false } );

    console.log ( 'debug? ' + this.debug );
}

$nd.log = function ( data, time )
{
    let ts = time || Date.now ();
    let event = ts + ';' + data;
    let tabbed_line = ts + '\t' + data + '\n'; 

    if ( this.console_logging ) console.log ( event );
    if ( this.client_logging )
    {
        this.events.push ( event );
        this.text_log.push ( tabbed_line );
    }

    return { timestamp: ts };
}

$nd.add_metadata = function ( key, value )
{
    this.metadata [ key ] = value;
}

$nd.start_game = function ()
{
    this.status = 'started' ;
}

$nd.end_game = function ( end_status )
{
    // -- set end time for game
    this.end_millis = Date.now(); 
    this.status = ( end_status ? end_status : 'complete' ) ;
    this.events.sort();
    this.text_log.sort();

    this.add_metadata ( 'socket_connection_events', $nu.socket_connection_events );
    this.add_metadata ( 'nodejs', $nu.nodejs );

    // -- for backwards compatibility
    this.endMillis = this.end_millis;
    this.json = this.events;
    this.text = this.text_log;
}


$nd.init ();