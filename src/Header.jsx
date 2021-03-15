import * as React from 'react';
import { Link } from 'preact-router/match';

const Header = () => {
    const activeLinkProps = {
        "aria-current": "page",
    };

    return (
        <>
            <header>
                <div id="logo">
                    <img width="238" height="100" src={"./assets/topcog-logos/TLOGO-250height-blue.webp"}  alt="TopCog Logo"/>
                </div>
            <nav>
                <Link class="nav-link" activeClassName="active" href="/">Home</Link>
                <a className="nav-link" href="https://discord.gg/s8q4hZR" target="_blank" rel="noopener">Discord</a>
                <Link class="nav-link" activeClassName="active" href="/newsletter">Newsletter</Link>
            </nav>
            </header>
        </>
    );
}

export default Header;