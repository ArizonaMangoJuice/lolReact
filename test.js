'use strict';
const json = require('./src/lolData');
// console.log([json.data]);
const arr = json.data.map(item => {
  console.log(item.id);
});
