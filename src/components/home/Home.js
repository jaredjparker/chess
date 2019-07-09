import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Home.css';

export default class Home extends Component {
    render() {
        return (
            <div id='home-page'>
                <h1>Thank you for Visiting</h1>
                <p>This is a personal project that I built because it seemed really interesting.  I'm not an avid chess player, but I do enjoy playing an occassional game of chess.</p>
                <p>The current functionality is simple. Pieces can be moved around the board. The player controlling the white pieces goes first and after a piece is moved, the game state switches to the next player. Pieces can be captured and if you pick up a piece and realize that you do not want to move that piece you can click the same square and the piece will be replaced and the game will not switch the player turn.</p>
                <p>I plan to build on this project, adding features like graveyards for any pieces that have been captured, piece logic to prevent illegal moves, and potentially make it so users can login and enter games with other users.</p>
                <p>If you enjoyed this app then you can take a look at my <a href='https://github.com/VIISilver' target='_blank' rel="noopener noreferrer">Github profile</a> or my <a href='https://www.linkedin.com/in/jared-jones-parker/' target='_blank' rel="noopener noreferrer">LinkedIn profile</a> to see my other projects.</p>
                <Link to='/chess'><button>Check It Out!</button></Link>
                <p><strong>DO NOT</strong> use this app for actual games of chess. Illegal moves are allowed and cannot be undone, therefore, this app is <strong>NOT</strong> the best choice for actual games of chess.</p>
            </div>
        )
    }
}
