
var db = require('./index');
var data = require('../seed.json');
var Promise = require('bluebird');

const seedDatabase = () => {
  const keys = Object.keys(data);
  return Promise.each(keys, (name) => {
    let promises = [];
    data[name].forEach(obj => {
      promises.push(db.model(name).create(obj))
    });
    return Promise.all(promises);
  });
};

db.didSync
  .then(() => db.sync({force: true}))
  .then(seedDatabase)
  .then(() => console.log('done'))
  .catch(error => console.error(error))
  .finally(() => db.close())
