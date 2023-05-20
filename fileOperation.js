const fs = require("fs");
const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);

const renameFile = (oldpath,newpath) =>{
    fs.rename(oldpath,newpath,(err)=>{
        if(err){
             console.log(err);
        }
        else{
            console.log("File Renamed Successfully.");
        }
        rl.close();
    })
}

const deleteFile = (filePath) => {
    fs.unlink(filePath, (err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log('File Deleted Successfully.');
        }
        rl.close();
    })
}

const copyFile = (sourcepath, despath) => {
    fs.copyFile(sourcepath, despath, (err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log("File Copied Successfully");
        }
        rl.close();
      })
}

const searchFile = (dir, searchString) => {
    fs.readdir(dir, (err, files) => {
        if (err) {
            console.log('Error While Searching File');
            rl.close();
            return;
        }
        const matchedFile = files.filter(file => file.toLowerCase().includes(searchString.toLowerCase()));
        if (matchedFile.length > 0) {
            console.log('Matched Files');
            matchedFile.forEach(file => console.log(file));
        }
        else {
            console.log('No files matched the search criteria.');
        }
        rl.close();    
    })
}

const fileRecords = (dirpath) =>{
    fs.readdir(dirpath,(files,err)=>{
        if(err){
             console.log(err);
        }
        else{
            console.log(files.toSting());
        }
        rl.close();
    })
}

module.exports = { renameFile , copyFile , deleteFile , searchFile , fileRecords , rl}