import React from 'react';

const GameCardHoriz= ({title, logo, description, appleStoreLink, playStoreLink}) => {

    const alt_logo_text = `${title} logo`;
    const alt_appstore_text = `Download ${title} on App Store`
    const alt_playstore_text = `Download ${title} on Google Play`

    return (
        <div className="game">
            <img className="game-logo" src={logo} width="384" height="384" alt={alt_logo_text} />
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
                                <img className="google-badge" width="323" height="125" alt={alt_playstore_text}
                                     src="../assets/google-play-badge-125h.png"/>
                            </a>
                        </div>
                    </div>
                    }

                    {appleStoreLink && <div aria-label={alt_appstore_text}>
                        <div className="store-btn">
                            <a href={appleStoreLink} target="_blank" rel="noopener">
                                <img className="apple-badge" width="300" height="100" alt={alt_appstore_text}
                                     src="../assets/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917_100h.png" />
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