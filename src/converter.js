export function convertToJSON(fileURL) {
    const fs = require('fs');
    let newFileURL = fileURL.substr(0, fileURL.length - 3);
    newFileURL.concat('zip');
    fs.rename(fileURL, newFileURL);
} 