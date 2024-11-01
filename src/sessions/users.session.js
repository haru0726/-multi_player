import User from '../classes/models/user.class.js';
import { userSessions } from './session.js';

export const addUser = (socket, id, playerId, letency) => {
    const user = new User(socket, id, playerId, letency);
    return user;
};

export const removeUser = (socket) => {
    const index = userSessions.findIndex((user) => user.socket === socket);
    if (index != -1) {
        return userSessions.splice(index, 1)[0];
    }
};

export const getAllUser = () => {
    return userSessions;
};