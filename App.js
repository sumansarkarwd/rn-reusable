import React, {Component} from "react";
import {View, Text} from "react-native";

import Slider from "./src/components/Slider";

class App extends Component {

  state = {
    data: [
      {
        "id": "5dd634e34be4ed1fcdd56f49",
        "name": "Flora Douglas"
      },
      {
        "id": "5dd634e32c2a0a858194ff4b",
        "name": "Alice Willis"
      },
      {
        "id": "5dd634e322567100bc9391c2",
        "name": "Beatrice Campos"
      },
      {
        "id": "5dd634e30a8cfc31b9ae6a85",
        "name": "Addie Hernandez"
      },
      {
        "id": "5dd634e397a2ff763d4840d6",
        "name": "Humphrey Griffith"
      },
      {
        "id": "5dd634e357f33421efc28bf7",
        "name": "Eaton Melendez"
      },
      {
        "id": "5dd634e34e91e8c7900f269c",
        "name": "Ernestine Roberson"
      },
      {
        "id": "5dd634e395430ed4e1867f36",
        "name": "Kathie Mayo"
      },
      {
        "id": "5dd634e35dee6706411281ea",
        "name": "Marsh Edwards"
      }
    ]
  }

  render() {
    return (
      <View style={{backgroundColor: '#eee', flex: 1}}>
        <Text>Reusable</Text>
        <Slider title='Suman Sarkar' data={this.state.data}/>
      </View>
    )
  }
}

export default App;