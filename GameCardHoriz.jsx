import React from 'react';

const GameCardHoriz= ({title, logo, description, appleStoreLink, playStoreLink}) => {

    const alt_logo_text = `${title} logo`;
    const alt_appstore_text = `Download ${title} on App Store`
    const alt_playstore_text = `Download ${title} on Google Play`

    return (
        <div className="game">
            <img className="game-logo" src={logo} alt={alt_logo_text} />
            <div className="details">
                <div className="content">
                    <h3 className="title">
                        {title}
                    </h3>
                    <p>
                        {description}
                    </p>
                    <hr style={{backgroundColor: "lightgray", height: 2, marginTop: "1.5em"}} />
                    <h3 className="download">Available on</h3>
                </div>

                <div className="controls">
                    {playStoreLink && <div aria-label={alt_playstore_text }>
                        <div className="store-btn">
                            <a href={playStoreLink} target="_blank" rel="noopener">
                                <img className="google-badge" alt={alt_playstore_text}
                                     src="./assets/google-play-badge.png"/>
                            </a>
                        </div>
                    </div>
                    }

                    {appleStoreLink && <div aria-label={alt_appstore_text}>
                        <div className="store-btn">
                            <a href={appleStoreLink} target="_blank" rel="noopener">
                                <img className="apple-badge" alt={alt_appstore_text}
                                     src="./assets/Apple-download-on-the-app-store-badge.png" />
                            </a>
                        </div>
                    </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default GameCardHoriz;