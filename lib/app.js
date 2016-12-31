const { join } = require('path');

function arraypathjoin(arr) {
  let path = arr[0];

  for (var i = 1;arr.length > i; i++) {
    path = join(path, arr[i]);
  }

  return path;
}

module.exports = arraypathjoin;
