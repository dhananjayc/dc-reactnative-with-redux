import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

// import { connect } from 'react-redux';

// Child component
import CounterButton from './CounterButton';

class CounterApp extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  };
  
  incrementCounter = () => {
    this.setState({ counter: this.state.counter + 1 })
  }
  
  decrementCounter = () => {
    this.setState({ counter: this.state.counter - 1 })
  }
  
  render() {
    // const { incrementCounter, incrementCounter } = this.props;
    return (
      <View style={styles.container}>
          <View style={styles.row}> 

          <TouchableOpacity style={styles.button}
            onPress={() => this.incrementCounter()}
          >
            <Text style={styles.textSize}>Increment</Text>
          </TouchableOpacity>

          <Text style={{fontSize:30}}> {this.state.counter} </Text>

          <TouchableOpacity style={styles.button}
            onPress={() => this.decrementCounter()}
          >
            <Text style={styles.textSize}>Decrement</Text>
          </TouchableOpacity>
          
        </View>
      </View>
    );
  }
}

export default CounterApp;

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

{/* <CounterButton
  handleChangeCounter={this.props.incrementCounter}
  name='Increment'
/>
<Text style={{fontSize:30}}> {this.props.counter} </Text>
<CounterButton
  handleChangeCounter={this.props.decrementCounter}
  name='Decrement'
/> */}

/**
 *  First only with reducers state
 *  */ 

// function mapStateToProps(state) {
//   return {
//     counter: state.counter
//   }
// }

// export default connect(mapStateToProps)(CounterApp); 

/**
 *  Second with actions along with reducers state
 *  */ 

// function mapDispatchToProps(dispatch){
//   return{
//     incrementCounter: () => dispatch({type:'INCREASE_COUNTER'}),
//     decrementCounter: () => dispatch({type:'DECREASE_COUNTER'})
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(CounterApp); 

