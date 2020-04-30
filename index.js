const fs = require( 'fs' )
const http = require( 'http' )
const url = require( 'url' )

const json = fs.readFileSync( `${__dirname}/data/data.json`, 'utf-8')

const laptopData = JSON.parse( json )

// console.log( __dirname )
// console.log( laptopData )

const server = http.createServer( ( req, res) => {
    // console.log( 'Someone did access the server!')

    // 
    // console.log( req.url, true )
    const pathName = url.parse( req.url, true  ).pathname
    // console.log( pathName )

    const id = url.parse( req.url, true  ).query.id
    // console.log( query )

    if ( pathName === '/products' || pathName === '/') {
        res.writeHead( 200, { 'Content-type': 'text/html'} )
        res.end( 'This is the PRODUCTS page' )
    } 
    else if( pathName === '/laptop' && id < laptopData.length ){
        res.writeHead( 200, { 'Content-type': 'text/html'} )
        res.end( `This is the LAPTOP ${id}` )
    }
    else {
        res.writeHead( 404, { 'Content-type': 'text/html'} )
        res.end( 'The URL was not found in the SERVER!' )
    }
})

server.listen( 1337, '127.0.0.1', () =>{
    console.log( 'Listening for requesting now' )
})

