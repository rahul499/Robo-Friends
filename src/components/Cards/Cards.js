import React from 'react';
import './Cards.css';

const Cards = (props) => {
    return (
    <div className="grid-container">
    {
    props.data.map( (item) => {
    return <div className="card blue" key = {item.id}>
     <img src={`https://robohash.org/${item.id}`} alt="Avatar" />
     <div className="cardheader tc">
     <h4><b> {item.name} </b></h4>
     <p>{ item.email }</p>
     </div>
     </div>
     }) }
     </div>
    );
}

export default Cards;