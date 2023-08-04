import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreeting } from '../store/greeting/greetingSlice';

const Greeting = () => {
  const { message, loading } = useSelector((state) => state.greeting);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...!</p>;
  }

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};

export default Greeting;
