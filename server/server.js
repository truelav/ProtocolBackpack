require('babel-core/register'); //this will enable ES6 on the back end side
if(process.env.NODE_ENV !== 'production') {
    require('./server.dev');
} else {
    require('./server.prod')
}