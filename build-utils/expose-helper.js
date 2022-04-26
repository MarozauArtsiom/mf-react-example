const fs = require('fs');

const getExposedFiles = (pathToExposedFolder) => {
    const files = fs.readdirSync(pathToExposedFolder);
    return files.reduce((acc, file) => {
        let result = acc;
        const [name, ext] = file.split('.');
        if (ext === 'js' || ext === 'jsx') {
            result = {
                ...acc,
                [`./${name}`]: `${pathToExposedFolder}/${file}`
            };
        }
        return result;
    }, {});
}

module.exports = {
    getExposedFiles,
}