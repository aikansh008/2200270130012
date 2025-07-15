const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '../data/urls.json');

const readData = () => {
  if (!fs.existsSync(filePath)) return [];
  const data = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(data || '[]');
};

const writeData = (data) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

module.exports = { readData, writeData };
