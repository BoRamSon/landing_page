import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Home Page 111</h1>
      <button onClick={() => navigate('/detail')}>Go to Detail Page</button>
    </div>
  );
};

export default Home;
