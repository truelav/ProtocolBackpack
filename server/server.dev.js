import express from 'express';
import path from 'path';
import mongoose from 'mongoose';

import React from 'react';
import passport from 'passport';
import { renderToString } from 'react-dom/server';
import cors from 'cors';
//import { Provider } from 'react-redux'    
// import configureStore from '../common/store/configureStore';
// import { RouteContext, match } from 'react-router';
// import routes from '../common/routes';
// import createHistory from 'history/createMemoryHistory';
// import DevTools from '../common/containers/DevTools';
// import User from './modes/User.js';
import SocketIo from 'socket.io';

require('../../config/passport')(passport);
const app = express();

//setting env variables
process.env.MONGOLAB_URI = process.env.MONGOLAB_URI || 'mongodb://localhost/chat_dev';
process.env.PORT = process.env.PORT || 3000;


//connecting to our Mongo DB
mongoose.connect(process.env.MONGOLAB_URI);

process.on('uncaughtException', function(error) {
    console.log(error)
});
app.use(cors());
app.use(passport.initialize());

//loading our routers
// const messageRouter = express.Router();
// const usersRouter = express.Router();
// const channelRouter = express.Router();
// require('./routes/message_routes')(messageRouter);
// require('./routes/channel_routes')(channelRouter);
// require('./routes/user_routes')(usersRouter, passport);
// app.use('./api', messageRouter);
// app.use('./api', usersRouter);
// app.use('./api', channelRouter);

// app.use('/', express.static(path.join(__dirname, '..', 'static')));

// app.get('/*', function(req, res) {
//     const history = createHistory()
//     const location = history.location
//     match({ routes, location }, (error, redirectLocation, renderProps) => {

//         const initialState = {
//             auth: {
//                 user: {
//                     username: 'tester123',
//                     id: 0,
//                     socketID: null
//                 }
//             }
//         }

//         const store = configureStore(initialState);

//         if(error) {
//             console.log(error);
//             return res.status(500).end('internal server error');
//         }

//         if(!renderProps) {
//             return res.status(404).end('Not found');
//         }

//         const InitialView = (
//             <Provider className="root" store={store}>
//               <div style={{height: '100%'}}>
//                 <RouterContext {...renderProps} />
//                 {process.env.NODE_ENV !== 'production' && <DevTools />}
//               </div>
//             </Provider>
//         );

//         const finalState = store.getState();
//         const html = renderToString(InitialView)
//         res.status(200).end(renderFullPage(html, finalState));

//     })
// })

const server = app.listen(process.env.PORT, 'localhost', function(err) {
    if (err) {
      console.log(err);
      return;
    }
    console.log('server listening on port: %s', process.env.PORT);
});

const io = new SocketIo(server, {path: '/api/chat'})
const socketEvents = require('./socketEvents')(io);

// function renderFullPage(html, initialState) {
//   return `
//     <!doctype html>
//     <html lang="en">
//       <head>
//         <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" />
//         <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css" />
//         <link rel="icon" href="./favicon.ico" type="image/x-icon" />
//         <meta charset="utf-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
//         <title>React Redux Socket.io Chat</title>
//       </head>
//       <body>
//         <container id="react">${html}</container>
//         <script>
//           window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
//         </script>
//         <script src="/dist/bundle.js"></script>
//       </body>
//     </html>
//   `
// }