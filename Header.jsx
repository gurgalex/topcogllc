import * as React from 'react';
import ReactDOM from 'react-dom';

const Header = () => {
    return (
        <>
            <header>
                <div id="logo">
                    <img width="100%" src={"./assets/topcog-logos/TLOGO-large-blue-whitespace-removed.png"} />
                </div>
            <nav>
                <a className="nav-link" href="index.html">Home</a>
                <a className="nav-link" href="https://discord.gg/s8q4hZR" target="_blank">Discord</a>
                <a className="nav-link" href="newsletter.html">Newsletter</a>
            </nav>
            </header>
        </>
    );
}

export default Header;