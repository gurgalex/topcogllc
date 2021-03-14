import * as React from 'react';

const Header = () => {
    const activeLinkProps = {
        "aria-current": "page",
    };

    return (
        <>
            <header>
                <div id="logo">
                    <img width="238" height="100" src={"./assets/topcog-logos/TLOGO-100height-blue.png"} />
                </div>
            <nav>
                <a {...(window.location.pathname === "/" ? activeLinkProps : {})} className="nav-link" href="./">Home</a>
                <a className="nav-link" href="https://discord.gg/s8q4hZR" target="_blank">Discord</a>
                <a {...(window.location.pathname === "/newsletter" ? activeLinkProps : {})} className="nav-link" href="./newsletter">Newsletter</a>
            </nav>
            </header>
        </>
    );
}

export default Header;