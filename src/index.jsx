import './style';

import Header from "./Header";
import GameList from "./GameList";
import Footer from "./Footer";
import GameCardHoriz from "./GameCardHoriz";

import {gamesData} from "./app_descriptions.js";


const Home = () => {
    return (
        <>
            <Header />
            <h1 >TopCog Indie Game Studio</h1>
            <p style={{marginTop: 0}} id="company-desc"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur</p>
            <h2 id="games-header">Our Games ▼</h2>
            <hr />
            <GameList>
                    {gamesData.map(game => {
                            return <GameCardHoriz
                                key={game.title}
                                title={game.title}
                                logo={game.logo}
                                description={game.description}
                                appleStoreLink={game.appleStoreLink}
                                playStoreLink={game.playStoreLink}
                            />
                        })}
            </GameList>
            <Footer />
        </>
    )
}

export default Home