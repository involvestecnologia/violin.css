'use strict';

const path = require('path');
const fractal = module.exports = require('@frctl/fractal').create();
const hbs = require('@frctl/handlebars')({
  helpers: {
    ternary: (test, yes, no) => test ? yes : no
  }
});

// Project
fractal.set('project.title', 'Violin.css');
fractal.set('project.version', 'v0.1');

// Components
fractal.components.engine(hbs);
fractal.components.set('default.preview', '@preview');
fractal.components.set('path', path.join(__dirname, '/src/components'));

// Docs
fractal.docs.engine(hbs);
fractal.docs.set('ext', '.md');
fractal.docs.set('path', path.join(__dirname, '/src/docs'));

// Web
fractal.web.set('static.path', path.join(__dirname, '/public'));
fractal.web.set('builder.dest', __dirname + '/docs');
