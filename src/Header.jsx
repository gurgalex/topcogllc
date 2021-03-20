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
                    <img width="760" height="235" src={"./assets/topcog-logos/TClogo-trimmed-250h.webp"}  alt="TopCog Logo"/>
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