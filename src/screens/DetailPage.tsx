import React from 'react';
import { useNavigate } from 'react-router-dom';

const DetailPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Detail Page</h1>
      <button onClick={() => navigate('/')}>Go to Home Page</button>
    </div>
  );
};

export default DetailPage;
