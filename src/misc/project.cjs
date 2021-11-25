function getJSON(fileURL) {
    const fs = require('fs');
    let newFileURL = fileURL.substr(0, fileURL.length - 3);
    fs.rename(fileURL, newFileURL.concat('zip'), () => {});
    return;
} 

getJSON("./src/testfile/LemonAttack v1.0.sb3")
