const fs = require('fs');

function saveData(path, data, cb){
    fs.open(path, 'w', (openErr, fd) => {
        if(openErr) return cb(openErr);

        fs.write(fd, data, (writeErr) => {
       
            fs.close(fd, (closeErr) => {
                return cb(writeErr || closeErr);
            });
        });
    });
}

const filePath =  'Files vs Database/Text/example.txt';
const data = 'Hello World';

saveData(filePath, data, (err) => {
    if(err){
        console.log(`Error saving data to ${filePath}`, err);
    }
    else {
        console.log(`Data successfully saved to ${filePath}`);
    }
})