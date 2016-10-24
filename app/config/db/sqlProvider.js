const QueryFile = require('pg-promise').QueryFile;
const path = require('path');

function sql(file) {
  const fullPath = path.join(__dirname, file);
  return new QueryFile(fullPath, { minify: true });
}

const sqlProvider = {
  messages: {
    all: sql('./sql/message/all.sql'),
  },
};

module.exports = sqlProvider;
