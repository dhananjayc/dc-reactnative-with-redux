import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

/**
 * Step 3 : when integreated Redux
 */
// import { createStore } from 'redux'; // Store creation
// import { Provider } from 'react-redux'; // brideges store with our react native app

// import CounterApp from './src/CounterApp';


/**
 * Step 3 : part a : when integreated Redux
 */
// const reducer = (state = { counter : 0 }, action) => {
//   return state;
// }

/**
 * Step 3 part b : when integreated Redux
 */
// const initialState = {
//   counter : 0
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
// const store = createStore();  // Reducer is mandatory to create store

class App extends Component {

  /**
   * Step 2 without integreated Redux, just a plain RN code
   */
  // constructor() {
  //   super();
  //   this.state = { counter: 0 };
  // };
  // incrementCounter = () => {
  //   this.setState({ counter: this.state.counter + 1 });
  // }
  // decrementCounter = () => {
  //   this.setState({ counter: this.state.counter - 1 });
  // }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize:30}}> React Native not yet with Redux</Text>
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


/**
 * Step 1 Initial RN app Code
 */
// render() {
//   return (
//     <View style={styles.container}>
//       <Text style={{fontSize:20}}>Hello! React Native not yet with Redux</Text>
//     </View>
//   );
// }


/**
 * Step 2 without integreated Redux, just a plain RN code
 */
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


/**
 * Step 3 when integreated Redux
 */
// render() {
//   return (
//     <Provider store={store}>
//         <CounterApp />
//       </Provider>
//   );
// }

/**
 *  DC : Uncomment and use code inside render method 
 *     Finally, step 3 will become our React Native app with Redux
 *  */