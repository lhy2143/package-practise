import * as r from 'react';
import * as e from 'react-dom/server';
let o = () => r.createElement('h1', null, 'Hello, world!');
console.log(e.renderToString(r.createElement(o, null)));
