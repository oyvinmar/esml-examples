import './index.html';
import './normalize.css';
import './main.css';

import { render } from 'esml';
import example1 from './example1';
import example2 from './example2';

(function () {
  render(example1, document.getElementById('example-one-container'));
  render(example2, document.getElementById('example-two-container'));
}());
