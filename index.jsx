import * as React from 'react';
import Header from "./Header";
import GameList from "./GameList";
import ReactDOM from "react-dom";
import Footer from "./Footer";
import GameCard from "./GameCard";

import {gamesData} from "./app_descriptions.js";



const Home = () => {
    return (
        <>
            <Header />
            <GameList>
                    {gamesData.map(game => {
                            return <GameCard
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