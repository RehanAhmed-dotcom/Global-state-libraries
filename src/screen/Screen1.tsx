import React, {useState, useContext} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {CounterContext} from '../Context/index';
import {
  increment,
  incrementByAmount,
  decrement,
  decrementByAmount,
  addUser,
} from '../../src/redux-toolkit/counter';

const Screen1 = () => {
  //   const [count, setCount] = useState(0);
  const user = {
    name: 'Rehans Ahmeds',
    email: 'rehanahmed0406@gmail.com',
    gender: 'Male',
  };
  interface CounterContextType {
    counted: number;
    increments: () => void;
    decrements: () => void;
  }
  const {counted, increments, decrements} =
    useContext<CounterContextType>(CounterContext);
  //   const {count, userData} = useSelector(state => state.counter);
  //   const dispatch = useDispatch();
  return (
    <View style={{alignItems: 'center', flex: 1, justifyContent: 'center'}}>
      <Text>{counted}</Text>

      <TouchableOpacity
        // onPress={() => dispatch(increment())}
        onPress={() => increments()}
        style={{height: 50, width: 100, backgroundColor: 'red'}}>
        <Text>Inc</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => decrements()}
        style={{height: 50, width: 100, backgroundColor: 'red'}}>
        <Text>dec </Text>
      </TouchableOpacity>
      {/* <TouchableOpacity
        onPress={() => dispatch(decrement())}
        style={{
          height: 50,
          marginTop: 50,
          width: 100,
          backgroundColor: 'yellow',
        }}>
        <Text>Dec</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => dispatch(addUser(user))}
        style={{
          height: 50,
          marginTop: 50,
          width: 100,
          backgroundColor: 'yellow',
        }}>
        <Text>Add User</Text>
      </TouchableOpacity> */}
      {/* <Text>User Name:{userData?.name}</Text> */}
    </View>
  );
};

export default Screen1;
