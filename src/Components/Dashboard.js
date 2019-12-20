import React from 'react';

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <h3>Dashboard</h3>
        <h4 className='account'>Choose Account</h4>
        <div className='card' style={{ width: '18rem' }}>
          <div className='card-body'>
            <h2 className='card-title'>Farmers</h2>
          </div>
        </div>
        <div className='card' style={{ width: '18rem' }}>
          <div className='card-body'>
            <h2 className='card-title'>Buyers</h2>
          </div>
        </div>
        <div className='card' style={{ width: '18rem', float: 'right' }}>
          <div className='card-body'>
            <h2 className='card-title'>Farming Experts</h2>
          </div>
        </div>
      </div>
    );
  }
}
export default Dashboard;
