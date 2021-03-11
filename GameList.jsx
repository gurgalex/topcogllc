import * as React from 'react'

class GameList extends React.Component {
    render() {
        const children = this.props.children
        return (
            <ul className="game-list">
                {React.Children.map(children, (child, index) => {
                    return (
                        <>
                            <li>
                            {child}
                            <hr />
                            </li>
                        </>
                    );
                })}
            </ul>
        )
    }
}

export default GameList;