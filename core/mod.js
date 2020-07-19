/*
 * notion-enhancer
 * (c) 2020 dragonwocky <thedragonring.bod@gmail.com>
 * (https://dragonwocky.me/) under the MIT license
 */

const defaults = {
  openhidden: false,
  maximized: false,
  close_to_tray: false,
  frameless: true,
  hotkey: 'CmdOrCtrl+Shift+A',
};

module.exports = {
  id: '0f0bf8b6-eae6-4273-b307-8fc43f2ee082',
  type: 'core',
  name: 'notion-enhancer core',
  desc:
    'the modloader itself, including: the CLI, the menu, and enabling/disabling/insertion/updating of mods.',
  version: require('../../package.json').version,
  author: 'dragonwocky',
  thumb:
    'https://camo.githubusercontent.com/5c5bca9e987d986b8cc7e51066f90c6f8a84af08/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f6174746163686d656e74732f3733313634373938343332333931393933332f3733313732373235393239353032333132342f494d475f323137302e6a7067',
  options: [],
  hacks: {
    'main/main.js': require('./tray.js')(defaults),
    'main/createWindow.js': require('./window.js')(defaults),
    'renderer/preload.js': function (store, __exports) {
      const window = require('electron').remote.getCurrentWindow();
      document.defaultView.addEventListener('keyup', (event) => {
        if (event.code === 'F5') window.reload();
        // if (event.code === 'F4' && event.altKey) window.close();
      });
    },
  },
};
