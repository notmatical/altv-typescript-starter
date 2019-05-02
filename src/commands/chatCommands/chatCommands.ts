import alt, { Player } from 'alt';
import chat from 'chat';

chat.registerCmd('pos', (player: Player, args: any) => {
    return chat.send(player, `X: ${player.pos.x}, Y: ${player.pos.y}, Z: ${player.pos.z}`);
});

chat.registerCmd('tp', (player: Player, x: number, y: number, z: number) => {
    if (isNaN(x) || isNaN(y) || isNaN(z)) {
        chat.send(player, `{E24A5A}USAGE:{FFFFFF} /tp [x] [y] [z]`);
        chat.send(player, `{E24A5A}[ ! ]{FFFFFF} Don't seperate coords with commas.`);
        return;
    }
    if (x === undefined || y === undefined || z === undefined) return chat.send(player, `{E24A5A}USAGE:{FFFFFF} /tp [x] [y] [z]`);

    player.pos = { x, y, z };
    return chat.send(player, `* You've been teleported to: {E24A5A}${x}{FFFFFF}, {E24A5A}${y}{FFFFFF}, {E24A5A}${z}{FFFFFF}.`);
});

chat.registerCmd('veh', (player: Player, model: string) => {
    if (model.toString().trim().length <= 0) return chat.send(player, `{E24A5A}USAGE:{FFFFFF} /veh [model]`);

    let vehicle = alt.createVehicle(model.toString(), player.pos.x, player.pos.y, player.pos.z, 180);
    vehicle.numberPlateText = "MATICAL";

    return chat.send(player, `You've spawned a temporary {E24A5A}${model}{FFFFFF}.`);
});

chat.registerCmd('weapons', (player: Player, args: any) => {
    return alt.emitClient(player, 'giveAllWeapons');
});

chat.registerCmd('online', (player: Player, args: any) => {
    let playersOnline = alt.players.length;

    if (playersOnline > 1) {
        return chat.send(player, `There are currently {49E298}${alt.players.length}{FFFFFF} players online.`);
    } else {
        return chat.send(player, `There is currently {49E298}${alt.players.length}{FFFFFF} player online.`);
    }
})