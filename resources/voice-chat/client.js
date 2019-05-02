import alt from 'alt';
import game from 'natives';

alt.initVoice();
alt.setMicGain(4);

alt.on('update', () => {
    if(game.isControlJustPressed(0, 249)) {
        alt.enableVoiceInput();
    }
    else if(game.isControlJustReleased(0, 249)) {
        alt.disableVoiceInput();
    }
});
