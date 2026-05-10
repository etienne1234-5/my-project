import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard!</p>
      <Link to="/" style={{ margin: '10px', padding: '10px 20px', backgroundColor: '#007bff', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>
        Back to Home
      </Link>
    </div>
  );
};

export default Dashboard;