//reading files
const fs = require('fs');

// fs.readFile('./Docs/blog.txt', (err, data) => {
//     if (err) {
//         console.log(err);
// }
//         console.log(data.toString());
// });

// console.log('last line in code');


//writing files

// fs.writeFile('./Docs/blog.txt', 'hello world', () => {
//     console.log('file is written');
// });

// fs.writeFile('./Docs/blog1.txt', 'hello again', () => {
//     console.log('file is written');
// });

//directories

// if(!fs.existsSync('./assests')){
//     fs.mkdir('./assests', (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log('folder is created');
    
//     });
// } else {
//     fs.rmdir('./assests',  (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log('folder deleted');
//     }
// )};


//deleting files
if(fs.existsSync('./Docs/deleteme.txt')) {
fs.unlink('./Docs/deleteme.txt', (err) => {
    if (err) {
        console.log(err)
    }
    console.log('file deleted');

})
}
