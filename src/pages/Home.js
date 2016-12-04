import React from 'react';
import {Link} from 'react-router';

import Banner from '../components/Banner';
import ShowAllBanner from '../components/ShowAllBanner';
import MonsterPoints from '../components/MonsterPoints';
import WeeklySpecials from '../components/WeeklySpecials';
import MonsterMovies from '../components/MonsterMovies';

const Home = () => (
  <div className="content flex-container">
    <Banner/>
    <ShowAllBanner/>
    <div className="flex-row space-around">
      <MonsterPoints/>
      <WeeklySpecials/>
    </div>
    <MonsterMovies/>
    <div className="flex-row">
      <div className="side-spacer"></div>
      <div className="monster-game">
        <ol>
          <li className="monster-game-text"><Link to="/game" className="spacer-font"><h3>Monster Game</h3></Link></li>
          <li className="monster-game-text-small">Click to play the fun new monster game with your neighbors.</li>
          <li className="monster-game-text-small">Start with your neighborhood. Then your zip code. And then ...</li>
        </ol>
      </div>
      <div className="monster-gear">
        <ol>
          <li className="monster-gear-text"><Link to="/store" className="spacer-font"><h3>Monster Gear</h3></Link></li>
          <li className="monster-gear-text-small">Click to shop our online store for all the latest MonsterFaction styles.</li>
        </ol>
      </div>
      <div className="monster-gallery">
        <ol>
          <li className="monster-gallery-text"><Link to="/gallery" className="spacer-font"><h3>Monster Gallery</h3></Link></li>
          <li className="monster-gallery-text-small">Click to view all the latest Monster Art. Or even submit one of your own works of art!</li>
        </ol>
      </div>
      <div className="side-spacer"></div>
    </div>
  </div>
);

export default Home;
