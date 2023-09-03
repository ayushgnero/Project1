import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <p>
        Go back to <Link to="/">the main page</Link>.
      </p>
    </div>
  );
};

export default NotFoundPage;
