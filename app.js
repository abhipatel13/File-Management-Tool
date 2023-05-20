const { renameFile, copyFile, deleteFile, searchFile , fileRecords , rl } = require("./fileOperation");

rl.question("Enter a operation (Delete/Copy/Search/Rename/Records): ", (command) => {
    switch (command.toLowerCase()) {
        case 'delete':
            rl.question('Enter the File Path to Delete: ', (path) => {
                deleteFile(path);
            })
            break;
        case 'copy':
            rl.question('Enter Source File Path: ', (sourcepath) => {
                rl.question('Enter Destination Path: ', (despath) => {
                    copyFile(sourcepath, despath);
                })
            })
            break;
        case 'rename':
            rl.question('Enter the Current File Path: ', (oldpath) => {
                rl.question('Enter the New File Path: ', (newpath) => {
                    renameFile(oldpath, newpath);
                })
            })
            break;
        case 'search':
            rl.question('Enter Directory Path to Search a File :', (dir) => {
                rl.question('Enter File Name to Search :', (searchstring) => {
                    searchFile(dir, searchstring);
                })
            })
            break;
        case 'records':
            rl.question('Enter Directory Path : ',(dirpath)=>{
                fileRecords(dirpath);
            })
            break;
        default : console.log("Please Enter a Valid Operation"); rl.close();
    }
})

