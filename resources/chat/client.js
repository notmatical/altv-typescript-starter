import alt from 'alt';

let buffer = [];

let loaded = false;
let opened = false;
let enabled = true;

let view = new alt.WebView('http://resources/chat/html/index.html');

function addMessage(name, text) {
  if (name) {
    view.emit('addMessage', name, text);
  } else {
    view.emit('addString', text);
  }
}

view.on('chatloaded', () => {
  for (const msg of buffer) {
    addMessage(msg.name, msg.text);
  }

  alt.log('loaded');
  loaded = true;
})

view.on('chatmessage', (text) => {
  alt.emitServer('chatmessage', text);

  opened = false;
  alt.toggleGameControls(true);
})

export function pushMessage(name, text) {
  if (!loaded) {
    buffer.push({ name, text });
  } else {
    addMessage(name, text);
  }
}

export function pushLine(text) {
  pushMessage(null, text);
}

export function toggleChat(enable) {
  enabled = enable === true;
}

alt.onServer('chatmessage', pushMessage);

alt.on('keyup', (key) => {
  if (!loaded || !enabled)
    return;

  if (!opened && key === 0x54 && alt.gameControlsEnabled()) {
    opened = true;
    view.emit('openChat', false);
    alt.toggleGameControls(false);
  } else if (!opened && key === 0xBF && alt.gameControlsEnabled()) {
    opened = true;
    view.emit('openChat', true);
    alt.toggleGameControls(false);
  }
  else if (opened && key == 0x1B) {
    opened = false;
    view.emit('closeChat');
    alt.toggleGameControls(true);
  }
})

export default { pushMessage, pushLine, toggleChat };

function timeoutPromise(callback, time) {
  return new Promise((resolve, reject) => {
    alt.setTimeout(() => {
      resolve(callback());
    }, time);
  });
}

function intervalPromise(callback, time) {
  return new Promise((resolve, reject) => {
    let interval = alt.setInterval(() => {
      if(callback() === true) {
        alt.clearInterval(interval);
        resolve();
      }
    }, time);
  });
}

alt.setTimeout(() => {
  alt.setTimeout(() => {
    alt.log('Если вы видите это сообщение, то Вадик лох');
  }, 1000000)
}, 1)
