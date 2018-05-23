// const passportSocketIo = require('passport.socketio');

// const debug = require('debug')('chat');

// const events = require('../common/events');
// const models = require('../models');

// const joinSavedChannels = (nick, socket) => {
//     models.User.findOne(
//         {'local.username': socket.request.user},
//         {'local.channels': 1},      
//     )
//     .exec()
//     .then( (user) => {
//         user.local.channels.forEach(channel => {
//             socket.join(channel)
//         });
//     })
// };

// const handleJoin = (socket, connectedClientsForUser) => channelToJoin => {
//     if (!channelToJoin) {
//         debug('error joining channel: channel doesnt exist!')
//         return
//     }

//     channelToJoin = channelToJoin.toLowerCase()

//     models.Channel.findOne
// }