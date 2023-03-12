import React from 'react';

const userStats = [
  { label: 'Games Played', value: '10' },
  { label: 'Wins', value: '7' },
  { label: 'Losses', value: '3' },
  { label: 'Rewards Earned', value: '50' },
];

const Dashboard = () => {
  return (
    <div className="card mt-5">
    <div className="card-header">
    <h2>Welcome back, Mehrnoosh!</h2>
    </div>
    <div className="card-body">
   
      <div className="row">
        <div className="col-md-6">
          <h5>User Stats</h5>
          <div className="list-group">
            {userStats.map((stat, index) => (
              <div key={index} className="list-group-item d-flex justify-content-between align-items-center">
                <span>{stat.label}</span>
                <span className="badge bg-primary rounded-pill">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-6">
          <h5>Recent Games</h5>
          <ul className="list-group">
            <li className="list-group-item">Pool Payday</li>
            <li className="list-group-item">Thetan Arena</li>
            <li className="list-group-item">Axie infinity</li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;

