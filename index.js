const Mustache = require('mustache');
const fs = require('fs');
const MUSTACHE_MAIN_DIR = './main.mustache';

let DATA = {
  name: 'Adeete',
  role: 'Fullstack Developer',
  yoe: 'two',
  degreeName: 'B.Tech',
  major: 'Computer Science Engineering',
  technologies: ['Javascript', 'Angular', 'Node.js', 'Typescript', 'Java', 'Golang', 'Python',
                'Hyperledger Fabric', 'HTML', 'CSS', 'SASS', 'OOP', 'Data Structure', 'REST'],
  gender: "She/Her",
  genderIcon: "woman",
  emailId: "adeete09@gmail.com",
  linkedIn: "https://www.linkedin.com/in/adeete-kashyap-656b57126",
  portfolio: "https://adeete.herokuapp.com/"
};

function generateReadMe() {
  fs.readFile(MUSTACHE_MAIN_DIR, (err, data) =>  {
    if (err) throw err;
    const output = Mustache.render(data.toString(), DATA);
    fs.writeFileSync('README.md', output);
  });
}
generateReadMe();