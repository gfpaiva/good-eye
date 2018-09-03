import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './Components/App/App';
import registerServiceWorker from './registerServiceWorker';

console.log('💻 Development by: Guilherme Fernandes de Paiva <gf.paiva@yahoo.com.br> \n🎨 Design by: Agnes Pinhanelli <angespinhanelli@gmail.com>');

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
