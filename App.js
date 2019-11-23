import React, {Component} from "react";
import {View, Text, ScrollView} from "react-native";
import {
  Card,
  Button
} from "react-native-elements";

import Slider from "./src/components/Slider";
import AuthFrom from "./src/components/AuthFrom";
import IconInput from "./src/components/IconInput";
import TinderDeck from "./src/components/TinderDeck";

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
    ],
    deckData: [
      { id: 1, text: 'Card #1', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
      { id: 2, text: 'Card #2', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
      { id: 3, text: 'Card #3', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
      { id: 4, text: 'Card #4', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
      { id: 5, text: 'Card #5', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
      { id: 6, text: 'Card #6', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
      { id: 7, text: 'Card #7', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
      { id: 8, text: 'Card #8', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
    ]
  }

  renderItem(item) {
    return (
      <Card
      key={item.id}
      title={item.text}
      image={{uri: item.uri}}
      >
        <Button 
        icon={{name: 'code'}}
        title="View now"
        />
      </Card>
    )
  }
  renderNoMoreItems() {
    return (
      <Card
      title="All done!"
      >
        <Button 
        icon={{name: 'code'}}
        title="Get more"
        />
      </Card>
    )
  }

  render() {
    return (
      <View style={{backgroundColor: '#eee', flex: 1}}>
        {/* <Slider title='Suman Sarkar' data={this.state.data}>
          <Text>Foo</Text>
        </Slider> */}
        {/* <AuthFrom title="Login" items_count={2}>
          <IconInput 
          icon='envelope'
          icon_color='#999'
          icon_size={25}
          placeholder='Email'
          />
          <IconInput 
          icon='lock'
          icon_color='#999'
          icon_size={35}
          placeholder='Password'
          />
        </AuthFrom> */}
        <TinderDeck 
          data={this.state.deckData}
          renderItem={(item) => this.renderItem(item)}
          renderNoMoreItems={() => this.renderNoMoreItems()}
        />
      </View>
    )
  }
}

export default App;