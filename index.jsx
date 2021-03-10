import * as React from 'react';
import Header from "./Header";
import GameList from "./GameList";
import Game from "./Game";
import ReactDOM from "react-dom";
import Footer from "./Footer";

const Home = () => {
    return (
        <>
            <Header />
            <GameList>
                <Game
                    title='Grim RPG'
                    description='A unique "Everything is an Item" incremental - even the options are items that must be found or crafted!'
                    logo="./assets/Grim_RPG_128_orig.png"
                    playStoreLink="https://play.google.com/store/apps/details?id=com.topcog.grim.rpg"
                />

                <Game
                    title='Simple RPG'
                    description='Embark on the epic quest of good VS. evil in this refreshingly simple RPG Idle Clicker Incremental!'
                    logo="./assets/SRPG_128.png"
                    playStoreLink="https://play.google.com/store/apps/details?id=com.topcog.simplerpg&hl=en_US&gl=US"
                    appleStoreLink="https://apps.apple.com/us/app/simple-rpg-idle-tap-tapper/id1489959334"
                />
            </GameList>

            <Footer />
        </>
    )
}
ReactDOM.render(<Home />, document.body);

export default Home