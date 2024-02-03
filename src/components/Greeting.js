import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchGreeting } from '../redux/features/greetingSlice';

function Greeting() {
  const {
    phrase,
    language,
    isLoading,
    isError,
  } = useSelector(
    (state) => state.greeting,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  const getRandomGreeting = () => {
    dispatch(fetchGreeting());
  };

  if (isLoading) {
    return <div className="wrapper">Loading...</div>;
  }

  if (isError) {
    return (
      <div className="wrapper">
        Something went wrong. Please try reloading the page...
      </div>
    );
  }

  return (
    <div className="wrapper">
      <p className="language">
        <span>&quot;Hello&quot; in</span>
        <span className="language_name">{language}</span>
      </p>
      <div className="greeting">{phrase}</div>
      <button type="button" className="btn" onClick={getRandomGreeting}>
        Randomize
      </button>
    </div>
  );
}

export default Greeting;
