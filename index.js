'use strict'

const appRoot = document.querySelector('#application-root');

function App(props) {
    return (
    <main>
        <header>
            {props.children}
        </header>
        <section>
            <h2>Employment History</h2>
            <h3>Microworks</h3>
            <p>Junior Web Developer, 2011-2013</p>
            <p>Worked mostly on the front-end in a startup environment primarily using 
                React to build web apps for clients in the healthcare industry.
            </p>
            <h3>Pearson Education</h3>
            <p>Editorial Assistant, 2009-2011</p>
            <p>Provided editors managing lists in the psychology and sociology disciplines
                with logistical, editorial, and production support.
            </p>
            <h3>Safari Adventures</h3>
            <p>Assistant Wildlife Guide, 2008-2009</p>
            <p>Provided top quality concierge services to high-end clients during their time on safari.</p>

        </section>
        <section>
            <h2>Education</h2>
            <h3>Thinkful</h3>
            <p>Engineering Flex, 2011</p>
            <h3>New York University</h3>
            <p>BA History, 2003-2007</p>
        </section>
        <section>
            <h2>Contact me</h2>
            <img src="https://ia.media-imdb.com/images/M/MV5BMTY5NzE3NzU3MF5BMl5BanBnXkFtZTgwMjg0NTQ5MDE@._V1_UX214_CR0,0,214,317_AL_.jpg" />
            <address>
                <p>Sally Student</p>
                <p>20 W 34th St</p>
                <p>New York, NY 10001</p>
                <p>sallystudent@thinkful.com</p>
                <p>123-456-7891</p>
            </address>
        </section>
    </main>
    );
}

ReactDOM.render(
    <App>
        <h1>Sally Student</h1>
    </App>,
    appRoot);