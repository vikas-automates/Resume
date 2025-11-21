const fs = require('fs');
const path = require('path');

const filesToDelete = [
    'e2e-tests/home.spec.ts',
    'e2e-tests/network.spec.ts',
    'e2e-tests/responsive.spec.ts'
];

const dirsToDelete = ['tests'];

filesToDelete.forEach(file => {
    try {
        if (fs.existsSync(file)) {
            fs.unlinkSync(file);
            console.log(`Deleted file: ${file}`);
        } else {
            console.log(`File not found: ${file}`);
        }
    } catch (err) {
        console.error(`Error deleting ${file}:`, err);
    }
});

dirsToDelete.forEach(dir => {
    try {
        if (fs.existsSync(dir)) {
            fs.rmSync(dir, { recursive: true, force: true });
            console.log(`Deleted directory: ${dir}`);
        } else {
            console.log(`Directory not found: ${dir}`);
        }
    } catch (err) {
        console.error(`Error deleting ${dir}:`, err);
    }
});
