import * as React from 'react'

const GameList = (props) => {
        const children = props.children;
        return (
            <ul className="game-list">
                {React.Children.map(children, (child, index) => {
                    return (
                        <>
                            <li>
                            {child}
                            </li>
                            <hr />
                        </>
                    );
                })}
            </ul>
        )
}

export default GameList;