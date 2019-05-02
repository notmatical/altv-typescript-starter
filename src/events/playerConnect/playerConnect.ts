import alt, { Player } from 'alt';
import chat from 'chat';

alt.on('playerConnect', (player: Player) => {
    alt.emitClient(player, 'youAreConnected');
    alt.log(`playerConnect called for ${player.name}`);
});

alt.onClient('spawnPlayer', (player: Player) => {
    chat.broadcast(`{49E298}${player.name}{FFFFFF} has joined the server.`);

    player.pos = { x: 813, y: -279, z: 66 };
});