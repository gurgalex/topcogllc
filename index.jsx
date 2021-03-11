import * as React from 'react';
import ReactDOM from "react-dom";
import Header from "./Header";
import GameList from "./GameList";
import Footer from "./Footer";
import GameCard from "./GameCard";
import GameCardHoriz from "./GameCardHoriz";

import {gamesData} from "./app_descriptions.js";


const Home = () => {
    return (
        <>
            <Header />
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
ReactDOM.render(<Home />, document.body);

export default Home