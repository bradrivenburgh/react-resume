'use strict'

const appRoot = document.querySelector('#application-root');
const helloWorldH1 = React.createElement('h1', null, 'Hello, world!')
ReactDOM.render(helloWorldH1, appRoot);