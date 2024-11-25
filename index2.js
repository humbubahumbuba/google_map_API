const fs = require('fs');

const data = fs.readFileSync('./ServiceStops.json', 'utf8');
let serviceStops = JSON.parse(data);
console.log(serviceStops);
