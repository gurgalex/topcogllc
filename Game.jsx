import * as React from "react"

const Game = ({title, logo, description, appleStoreLink, playStoreLink}) => {
    const alt_logo_text = `${title} logo`;
    const alt_appstore_text = `Download ${title} on App Store`
    const alt_playstore_text = `Download ${title} on Google Play`
    return (
        <div className="game">
            <div>
            <img className="appLogo" src={logo} alt={alt_logo_text} />
            </div>
            <h2 className="appTitle">{title}</h2>
            <p className="appText">{description}</p>

            <div className="app-store-links">
                <hr className="store-divider" />
                <h3><b>Available On</b></h3>
                {appleStoreLink &&
                <div className="store-btn">
                <a href={appleStoreLink} target="_blank" rel="noopener">
                <img className="apple-badge" alt={alt_appstore_text}
                     src="./assets/Apple-download-on-the-app-store-badge.png" />
                </a>
                    </div>
                }

                { playStoreLink &&
                <div className="store-btn">
                    <a href={playStoreLink} target="_blank" rel="noopener">
                        <img className="google-badge" alt={alt_playstore_text}
                             src="./assets/google-play-badge.png"/>
                    </a>
                </div>
                }
            </div>
        </div>
    );
};

export default Game;