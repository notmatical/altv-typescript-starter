import alt, { Player } from 'alt';
import chat from 'chat';

alt.on('playerDeath', (player: Player, killer: Player, weapon: any) => {
    chat.broadcast(`{49E298}${player.name}{FFFFFF} was killed by {49E298}${killer.name}{FFFFFF}.`);

    alt.log(`playerDeath has been called for ${player.name}`);

    return player.spawn(813, -279, 66, 5000);
});