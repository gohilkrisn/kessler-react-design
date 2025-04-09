import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Home from './Home';

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // If we're on the index route, we want to render Home component
    if (window.location.pathname === '/') {
      return;
    } else {
      // Otherwise redirect to home
      navigate('/');
    }
  }, [navigate]);

  return <Home />;
};

export default Index;
