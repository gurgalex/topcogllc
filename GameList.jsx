import * as React from 'react'

class GameList extends React.Component {
    render() {
        const children = this.props.children
        return (
            <ul className="game-list">
                {React.Children.map(children, (child, i) => {
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
}

export default GameList;