'use strict';

module.exports = {
  parseInt(str) {
    if (typeof str === 'number') return str;
    if (!str) return 0;
    return parseInt(str) || 0;
  },

  parseOffset(num, size) {
    return (num - 1) * size;
  },
};
