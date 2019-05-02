import alt from 'alt';
import game from 'natives';

alt.onServer('youAreConnected', () => {

    alt.log('connectionComplete from clientside.');
    alt.emitServer('spawnPlayer');

    //alt.loadModel('mp_m_freemode_01');
    //alt.setModel('mp_m_freemode_01');

    game.setPedDefaultComponentVariation(game.playerPedId(), true);
});