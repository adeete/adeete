const Mustache = require('mustache');
const fs = require('fs');
const MUSTACHE_MAIN_DIR = './main.mustache';

let DATA = {
  name: 'Adeete',
  role: 'Fullstack Developer',
  yoe: '2',
  degreeName: 'B.Tech',
  major: 'Computer Science Engineering',
  technologies: ['Javascript', 'Angular', 'Node.js', 'Typescript', 'Java', 'Golang', 'Python',
                'Hyperledger Fabric', 'HTML', 'CSS', 'SASS', 'OOP', 'Data Structure', 'REST']
};

function generateReadMe() {
  fs.readFile(MUSTACHE_MAIN_DIR, (err, data) =>  {
    if (err) throw err;
    const output = Mustache.render(data.toString(), DATA);
    fs.writeFileSync('README.md', output);
  });
}
generateReadMe();