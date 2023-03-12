
import React from "react";

const Game = () => {
    // const Game = ({ game, walletAddress }) => {
    //   const [score, setScore] = useState(0);
    //   const [gameOver, setGameOver] = useState(false);

    //   const handleScoreIncrease = () => {
    //     setScore(score + 1);
    //   };

    //   const handleGameOver = () => {
    //     setGameOver(true);

    //     // TODO: Send transaction to Cosmos blockchain with walletAddress and score
    //   };
  const gameData = {
    title: "Super Mario Bros",
    description:
    "Super Mario is a platform game series created by Nintendo starring their mascot, Mario. It is the central series of the greater Mario franchise. At least one Super Mario game has been released for every major Nintendo video game console. There are more than 20 games in the series",
    image:
      "https://upload.wikimedia.org/wikipedia/en/0/03/Super_Mario_Bros._box.png",
    reward: 10,
    howToPlay:"Before jumping, run up to the object with B or Y on the Direction Pad. Hit blocks. The levels in Super Mario have loads of blocks. Some blocks have question marks, which either have a coin, a red mushroom, a green 1UP mushroom, or a fire flower."
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h2 className="text-center mb-4">{gameData.title}</h2>
          <div className="card mb-3">
            <div className="row no-gutters">
              <div className="col-md-4">
                <img src={gameData.image} className="card-img" alt="..." />
                
                
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <p className="card-text">{gameData.description}</p>
                  <p className="card-text">
                    <small className="text-muted">
                      Reward: {gameData.reward} COSM
                    </small>
                  </p>
                  <p className="card-text"><b>How To Play: </b>{gameData.howToPlay}</p>
                  <button className="btn btn-primary btn-block">
                    Play Game
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
