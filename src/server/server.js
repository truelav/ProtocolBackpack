// const server = require('http').createServer();
// const io = require('socket-io')(server);

// const ChatroomManager = require('./ChatroomManager');
// const ClientManager = require('./ClientManager');
// const makeHandlers = require('./handlers');

// const clientManager = ClientManager();
// const chatroomManager = ChatroomManager();

// io.on('connection', function(client) {
//     const {
//         handleRegister,
//         handleJoin,
//         handleLeave,
//         handleMessage,
//         handleGetChatroom,
//         handleGetAvailableUsers,
//         handleDisconnect,
//     } = makeHandlers(client, clientManager, chatroomManager)

//     console.log('client connected...', client.id)
//     clientManager.addClient(client)

//     client.on('register', handleRegister);

//     client.on('join', handleJoin);

//     client.on('leave', handleLeave);

//     client.on('message', handleMessage);

//     client.on('chatrooms', handleGetChatroom);

//     client.on('availableUsers', handleGetAvailableUsers);

//     client.on('disconnect', function() {
//         console.log('user disconnected..', client.id)
//         handleDisconnect();
//     })

//     client.on('error', function(error) {
//         console.log('received error from client .. ', client.id);
//         console.log(error)
//     })

// })

// server.listen(3000, function(error) {
//     if (error) {
//         throw Error
//     }
//     console.log('listening on port 3000')
// })