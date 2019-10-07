import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

// import { createStore } from 'redux'; // Store creation
// import { Provider } from 'react-redux'; // brideges store with our react native app

// import CounterApp from './src/CounterApp';

// const initialState = {
//   counter : 0
// }
// const reducer = (state = { counter : 0 }, action) => {
//   return state;
// }

// const reducer = (state = initialState, action) => {
//   switch(action.type){
//     case 'INCREASE_COUNTER' :
//       return { counter : state.counter + 1}
//     case 'DECREASE_COUNTER' :
//     return { counter : state.counter - 1}
//   }
//   return state;
// }
// const store = createStore();  // Reducer mandatory

class App extends Component {
  constructor() {
    super();
    this.state = { counter: 0 };
  };
  
  incrementCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  }
  
  decrementCounter = () => {
    this.setState({ counter: this.state.counter - 1 });
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}> 
          <TouchableOpacity style={styles.button}
            onPress={() => this.incrementCounter()}
          >
            <Text style={styles.textSize}>Increment Counter</Text>
          </TouchableOpacity>
          
          {/* Example of Inline style  */}
          <Text style={{fontSize:30}}> {this.state.counter} </Text>
          
          <TouchableOpacity style={styles.button}
            onPress={() => this.decrementCounter()}
          >
            <Text style={styles.textSize}>Decrement Counter</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    width: 380,
    justifyContent: 'space-around'
  },
  textSize: {
    fontSize: 20
  },
  button: {
    borderColor: '#eee',
    borderWidth: 2,
    padding: 5
  }
});

{/* <Text style={{fontSize:30}}> React Native not yet with Redux</Text> */}

{/* <Provider store={store}>
        <CounterApp />
      </Provider> */}

// render() {
  // return (
  //   <View style={styles.container}>
  //     <View style={styles.row}> 
  //       <TouchableOpacity style={styles.button}
  //         onPress={() => this.incrementCounter()}
  //       >
  //         <Text style={styles.textSize}>Increment Counter</Text>
  //       </TouchableOpacity>
        
  //       {/* Example of Inline style  */}
  //       <Text style={{fontSize:30}}> {this.state.counter} </Text>
        
  //       <TouchableOpacity style={styles.button}
  //         onPress={() => this.decrementCounter()}
  //       >
  //         <Text style={styles.textSize}>Decrement Counter</Text>
  //       </TouchableOpacity>
  //     </View>
  //   </View>
  // );
// }

// const reducer = (state = initialState, action) => {
//   switch(action.type){
//     case 'INCREASE_COUNTER' :
//       return { counter : state.counter + 1}
//     case 'DECREASE_COUNTER' :
//     return { counter : state.counter - 1}
//   }
//   return state;
// }

// return (
  // <Provider store={store}>
  //   <CounterApp/>
  // </Provider>);