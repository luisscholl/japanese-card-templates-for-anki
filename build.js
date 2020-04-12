const fs = require('fs');
const webpack = require ('webpack');
const sources = require('./sources.json');
const decks = require('./decks.json');
const template = require('./development-template.webpack.config.js')
const fetch = require('node-fetch');

let mode = process.argv[2] || 'development';

fs.rmdirSync('./dist', {
  recursive: true
});

fs.mkdirSync('./dist');

let styles = fs.readFileSync('./src/styles/base.css');
styles += fs.readFileSync('./src/styles/left-handed.css');
fs.writeFileSync('./dist/styles.css', styles);
console.log('Processed stylsheets.');

webpack(template, (err, stats) => {
  if (err || stats.hasErrors()) {
    if (err) console.log(err);
    if (stats.hasErrors()) console.log(stats);
  } else {
    console.log('Processed modules.');
    if (mode === 'production') uploadToAnki();
  }
});

async function uploadToAnki() {
  for (let deck of Object.keys(decks)) {

    let templates = {};
    for (let cardName of decks[deck].cards) {
      let frontTemplate = fs.readFileSync(`./dist/${cardName}Front.js`);
      frontTemplate = `<script>${frontTemplate}</script>`;
      let backTemplate = fs.readFileSync(`./dist/${cardName}Back.js`);
      backTemplate = `<script>${backTemplate}</script>`;
      templates[cardName] = {
        Front: frontTemplate,
        Back: backTemplate
      }
    }

    await fetch('http://localhost:8765', {
      method: 'POST',
      body: JSON.stringify({
        action: 'updateModelTemplates',
        version: 6,
        params: {
          model: {
            name: deck,
            templates: templates
          }
        }
      })
    });

    let styles = '';
    for (let styleFile of decks[deck].stylesheets) {
      styles += fs.readFileSync(`./src/styles/${styleFile}.css`);
    }

    await fetch('http://localhost:8765', {
      method: 'POST',
      body: JSON.stringify({
        action: 'updateModelStyling',
        version: 6,
        params: {
          model: {
            name: deck,
            css: styles
          }
        }
      })
    });

    await fetch('http://localhost:8765', {
      method: 'POST',
      body: JSON.stringify({
        action: 'sync',
        version: 6
      })
    });
  }

  console.log('Uploaded to Anki.');

  for (source of Object.keys(sources)) {
    fs.unlinkSync(`./dist/${source}.js`);
  }
}
