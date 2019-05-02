import alt, { Player } from 'alt';
import chat from 'chat';

alt.on('playerDisconnect', (player: Player, reason: any) => {
    alt.log(`playerDisconnect has been called for ${player.name}.`);

    chat.broadcast(`{49E298}${player.name}{FFFFFF} has left the server.`);
});