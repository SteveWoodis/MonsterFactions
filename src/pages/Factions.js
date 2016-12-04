import React from 'react';

const Factions = ({routeParams}) => (
    <div className="content">
        <h1>Factions: {routeParams.faction}</h1>
    </div>
);

export default Factions;
