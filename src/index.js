// Importing React
import React from 'react';
import ReactDOM from 'react-dom';

// Import styling
import './styles/index.css';

// Import Service Working
import registerServiceWorker from './registerServiceWorker';

// Import Components
import App from './components/App';
import PageOne from './components/page_one';
import PageTwo from './components/page_two';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
