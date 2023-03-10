'use strict';

let buildGraphMessage = () => {
  let f = {
    filename: './syntheticData1.json',
    command: 'LoopCheckData',
  };
  return JSON.stringify(f);
};

let sendCursorMessage = () => {
  let cursorObject = {
    cursors: [
      {
        time: 31000,
        unit: 'ns',
        comment: 'example comment',
        color: 'g',
        expId: 'experiment_221012030001',
      },
      {
        time: 31007,
        unit: 'ns',
        comment: 'example comment',
        color: 'r',
        expId: 'experiment_221012030001',
      },
    ],
    command: 'cursorsUpdate',
  };
  return JSON.stringify(cursorObject);
};

module.exports = { buildGraphMessage, sendCursorMessage };
