import React, {useContext, useEffect, createContext, useState} from 'react';
// import AsyncStorage from '@react-native-community/async-storage';
const CounterContext = createContext(0);
import AsyncStorage from '@react-native-async-storage/async-storage';
// const useCounter = () => useContext(CounterContext);

const CounterContextProvider = ({children}) => {
  const [counted, setCount] = useState(0);

  const increments = () => setCount(c => c + 1);
  const decrements = () => {
    counted > 0 && setCount(c => c - 1);
  };
  useEffect(() => {
    if (counted !== 0) {
      AsyncStorage.setItem('DEMO_APP::COUNT_VALUE', `${counted}`);
    }
  }, [counted]);

  useEffect(() => {
    AsyncStorage.getItem('DEMO_APP::COUNT_VALUE').then(value => {
      if (value) {
        setCount(parseInt(value));
      }
    });
  }, []);
  return (
    <CounterContext.Provider value={{counted, increments, decrements}}>
      {children}
    </CounterContext.Provider>
  );
};
export {CounterContextProvider, CounterContext};
