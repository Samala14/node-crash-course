const fs = require('fs');

const readStream = fs.createReadStream('./Docs/blog2.txt', { encoding: 'utf8'  }) 
const writeStream = fs.createWriteStream('./Docs/blog3.txt')

//  readStream.on('data', (chunk) => {
//     console.log('------New Chunk-------');
//     console.log(chunk);
//     writeStream.write('\n NEW CHUNK \n');
//     writeStream.write(chunk);

//  })

//piping

readStream.pipe(writeStream); 