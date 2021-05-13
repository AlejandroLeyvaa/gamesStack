const fs = require('fs');

fs.writeFileSync('./dist/.env', `API=${process.env.CLIENT_ID}\n`)