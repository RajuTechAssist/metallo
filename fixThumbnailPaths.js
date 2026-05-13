const fs = require('fs');

const files = [
    {
        path: 'e:/metallo-industrial/data/steelPipesTubesData.ts',
        dir: '/Steel/pipes-tubes'
    },
    {
        path: 'e:/metallo-industrial/data/steelPipeFittingsData.ts',
        dir: '/Steel/pipe-fittings'
    },
    {
        path: 'e:/metallo-industrial/data/steelSheetsPlatesData.ts',
        dir: '/Steel/sheets-plates'
    },
    {
        path: 'e:/metallo-industrial/data/steelFastenersBarsData.ts',
        dir: '/Steel/fasteners-bars'
    }
];

for (let file of files) {
    if (!fs.existsSync(file.path)) continue;
    let content = fs.readFileSync(file.path, 'utf8');
    
    // thumbnail: "filename.png" -> thumbnail: "/Steel/.../filename.png"
    // make sure it doesn't already start with /
    content = content.replace(/thumbnail:\s*"([^/"][^"]*)"/g, 'thumbnail: "' + file.dir + '/$1"');
    
    fs.writeFileSync(file.path, content);
}
console.log("Fixed thumbnail paths!");
