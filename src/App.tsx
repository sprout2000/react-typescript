import React, { useState } from 'react';

const useAuth = () => {
  const [auth, setAuth] = useState(false);
  const handleClick = () => setAuth(!auth);

  return { auth, handleClick };
};

export const App: React.FC = () => {
  const { auth, handleClick } = useAuth();

  return (
    <div>
      {auth ? (
        <React.Fragment>
          <h1>Welcome!</h1>
          <button onClick={handleClick}>Sign out</button>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <h1>Please sign in...</h1>
          <button onClick={handleClick}>Sign in</button>
        </React.Fragment>
      )}
    </div>
  );
};
