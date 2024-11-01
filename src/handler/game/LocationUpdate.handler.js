import { getGameSession } from '../../sessions/game.session.js';

const LocationUpdateHandler = ({ socket, userId, payload }) => {
    try {
        const { x, y } = payload;
        const gameSession = getGameSession();

        if (!gameSession) {
            console.error('Game session not found');
            return; 
        }

        const user = gameSession.getUser(userId);
        if (!user) {
            //console.error('User not found for ID:', userId);
            return; 
        }

        user.updatePosition(x, y); 

        const locationData = gameSession.getAllLocation(userId); 
        socket.write(locationData); 
    } catch (e) {
        console.error('Error in LocationUpdateHandler:', e);
    }
};

export default LocationUpdateHandler;
