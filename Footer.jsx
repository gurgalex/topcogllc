import * as React from 'react';

const Footer = () => {
    const adminEmail = "topcogllc@gmail.com";
    return (
        <>
            <footer>
                <a style={{color: "yellow"}} href={`mailto: ${adminEmail}`}>Contact us at {adminEmail}</a>
                <p>
                    Apple and App Store are trademarks of Apple Inc.
                </p>
                <p>
                    Google Play and the Google Play logo are trademarks of Google LLC.
                </p>
                <p>
                    Copyright © 2021 TopCog, LLC
                </p>
            </footer>
        </>
    )
}

export default Footer;