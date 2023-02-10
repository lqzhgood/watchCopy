const chokidar = require('chokidar');
const fs = require('fs-extra');
const path = require('path');

const input = path.join(__dirname,'./input/';
const output = path.join(__dirname, './dist/');

// add, addDir, change, unlink, unlinkDir, ready, raw, error
chokidar.watch(input).on('all', (event, p, d2) => {
    const target = p.replace(input, output);
    switch (event) {
        case 'addDir':
        case 'add':
        case 'change':
        case 'ready':
            try {
                fs.copySync(p, target);
            } catch (error) {
                console.log(event, target, error.message);
            }
            break;
        default:
            console.log(event, target);
            break;
    }
});
