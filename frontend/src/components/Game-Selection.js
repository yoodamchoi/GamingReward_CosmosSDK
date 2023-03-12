import React from 'react';
import { Link } from 'react-router-dom';

const games = [
  {
    id: 1,
    name: "Pool Payday",
    rewardAmount:"$100",
    image:"https://images.financebuzz.com/1455x768/filters:quality(70)/images/2022/02/24/adobestock_27580770.jpg",
    description: "Welcome to Pool Payday, the #1 pool game for cash. Compete 1-on-1 in live real-time games for fun, for profit, or both! Our cash prizes are redeemable via Paypal, Apple Pay, and more"
  },
  {
    id: 2,
    name: "Thetan Arena",
    rewardAmount: "10 Thetan",
    image:"https://thetanarena.com/thumbnail.webp",
    description: "Thetan Arena is an e-sport game based on Blockchain technology. You can gather your friends, form a team, battle with others and earn token rewards with just your skills. Thetan Arena's gameplay is designed to revolve around the combination of your personal skills and teamwork."
  },
  {
    id: 3,
    name: "Axie infinity",
    rewardAmount: "$300",
    image: "https://i.ytimg.com/vi/xKgV4V0aq7M/maxresdefault.jpg",
    description: "Axie Infinity is a digital pet community, in which you buy creatures – called Axies – and use them to battle, explore and breed with other Axies. It's developed by the gaming company Sky Mavis and runs through the cryptocurrency Ethereum"
  }
];

const GameSelection = () => {
  return (
    <div className="card mt-5">
    <div className="card-header">
        <h2>Select a game to play</h2>
    </div>
    <div className="card-body">
  
      <div className="row">
        {games.map((game) => (
          <div className="col-md-4 mb-4" key={game.id}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{game.name}</h5>
                <p className="card-text">Reward Amount: {game.rewardAmount}</p>
                <img src={game.image} className="card-img" alt="..." />
                <p className="card-text">{game.description}</p>
                <Link to={`/game/${game.id}`} className="btn btn-primary">Play Now</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default GameSelection;
