'use strict';
var mode = 0;

module.exports = (robot) => {
    robot.hear(/hello>/i, (msg) => {
        const username = msg.message.user.name;
        if (mode === 0) {
        msg.send('Hello, ' + username);
        } else {
          msg.send('Good Bye, ' + username);
        }
    });

    robot.hear(/change>/i, (msg) => {
      if (mode === 0){
        mode = 1;
      } else {
        mode = 0;
      }
      msg.send('mode = ' + mode);
  });
};