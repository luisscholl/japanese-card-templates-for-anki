const fs = require('fs');
const webpack = require ('webpack');
let titles = require('./titles.json');
let templates = {
  development: require('./development-template.webpack.config.js'),
  production: require('./production-template.webpack.config.js')
}

let mode = process.argv[2] || 'production';

let template = templates[mode];

titles = titles.map(e => [e + 'Back', e + 'Front']).flat();

let title;
let titleIndex = 0;

fs.rmdirSync('./dist', {
  recursive: true
});

fs.mkdirSync('./dist');

fs.copyFile('./src/styles.css', './dist/styles.css', () => { console.log('Copied stylesheet') });

runWebpack();

function runWebpack() {

  title = titles[titleIndex];
  titleIndex++;

  template.entry = './src/' + title + '.tsx';
  template.output.filename = title + '.js';
  template.plugins[0].options.filename = mode === 'production' ? title + '.txt' : title + '.html';
  template.plugins[0].options.templateParameters.title = title.split('-').map(e => e.split('')[0].toUpperCase() + e.substr(1)).join(' ');

  webpack(template,
    (err, stats) => {
      if (err || stats.hasErrors()) {
        console.log('Encountered a problem while processing ' + title);
        console.log(err);
        console.log('___');
        console.log(stats.compilation.errors);
        console.log('___');
      } else {
        console.log('Processed ' + title);
      }
      if (titleIndex < titles.length) runWebpack();
      else cleanUpDist();
  });
}

function cleanUpDist() {
  for (title of titles) {
    //fs.unlink(`./dist/${title}.js`, () => {});
  }
}