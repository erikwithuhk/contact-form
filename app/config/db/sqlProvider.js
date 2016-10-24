const QueryFile = require('pg-promise').QueryFile;
const path = require('path');

function sql(file) {
  const fullPath = path.join(__dirname, file);
  return new QueryFile(fullPath, { minify: true });
}

const sqlProvider = {
  messages: {
    all: sql('./sql/message/all.sql'),
    find: sql('./sql/message/find.sql'),
  },
};

module.exports = sqlProvider;
