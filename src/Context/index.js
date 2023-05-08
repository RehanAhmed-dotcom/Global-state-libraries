import React, {useContext, createContext, useState} from 'react';

const CounterContext = createContext(0);

// const useCounter = () => useContext(CounterContext);

const CounterContextProvider = ({children}) => {
  const [counted, setCount] = useState(0);

  const increments = () => setCount(c => c + 1);
  const decrements = () => {
    counted > 0 && setCount(c => c - 1);
  };

  return (
    <CounterContext.Provider value={{counted, increments, decrements}}>
      {children}
    </CounterContext.Provider>
  );
};
export {CounterContextProvider, CounterContext};
