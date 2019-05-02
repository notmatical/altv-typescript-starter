import alt from 'alt';
import game from 'natives';

const weapons = [
    "WEAPON_REVOLVER", "WEAPON_SMG", "WEAPON_COMBATPDW",
    "WEAPON_ASSAULTRIFLE", "WEAPON_CARBINERIFLE",
    "WEAPON_PUMPSHOTGUN", "WEAPON_STUNGUN", "WEAPON_RPG"
];

alt.onServer('giveAllWeapons', () => {
    giveWeapons();
});

function giveWeapons() {
    alt.log('giving player weapons');

    for (const weapon of weapons) {
        game.giveWeaponToPed(game.playerPedId(), game.getHashKey(weapon), 9999, false, false);
    }
}