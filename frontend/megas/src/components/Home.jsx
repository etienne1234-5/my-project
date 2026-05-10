import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Welcome to Our Application</h1>
      <p>Please choose an option below:</p>
      <div style={{ marginTop: '30px' }}>
        <Link to="/login" style={{ margin: '10px', padding: '10px 20px', backgroundColor: '#007bff', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>
          Login
        </Link>
        <Link to="/register" style={{ margin: '10px', padding: '10px 20px', backgroundColor: '#28a745', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>
          Register
        </Link>
      </div>
    </div>
  );
};

export default Home;