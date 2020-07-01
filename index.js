'use strict'

const appRoot = document.querySelector('#application-root');

function App(props) {
    return (
    <header>
        {props.children}
    </header>
    );
}

ReactDOM.render(
    <App className='my-class'>
        <div><h1><span>Current Page Title!</span></h1></div>
    </App>,
    appRoot);