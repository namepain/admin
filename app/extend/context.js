'use strict';

module.exports = {
  success(data, tips) {
    if (isListData(data)) {
      data = {
        total: data.count,
        list: data.rows,
      };
    }

    this.body = {
      status: '1001',
      tips,
      data,
    };
  },

  fail(tips, status) {
    this.body = {
      status: status || '1002',
      tips,
    };
  },
};


function isListData(obj) {
  if (!obj) return false;
  const keys = Object.keys(obj);
  const props = [ 'count', 'rows' ];
  return keys.length === 2 && keys.every(item => props.includes(item));
}
