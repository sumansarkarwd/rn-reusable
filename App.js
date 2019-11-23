import React, {Component} from "react";
import {View, Text, ScrollView} from "react-native";
import {
  Card,
  Button,
  Image,
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
      { id: 1, text: 'Card #1', uri: 'https://images.unsplash.com/photo-1574447942165-b594a1be0194?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1402&q=80' },
      { id: 2, text: 'Card #2', uri: 'https://images.unsplash.com/photo-1574448731364-cb4fa680b770?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80' },
      { id: 3, text: 'Card #3', uri: 'https://images.unsplash.com/photo-1574449430309-aab2cb553b58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80' },
      { id: 4, text: 'Card #4', uri: 'https://images.unsplash.com/photo-1574449904246-354db32b1add?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80' },
      { id: 5, text: 'Card #5', uri: 'https://images.unsplash.com/photo-1562887250-1ccd2e28a02c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80' },
      { id: 6, text: 'Card #6', uri: 'https://images.unsplash.com/photo-1574430032801-5fabe1e138db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=405&q=80' },
      { id: 7, text: 'Card #7', uri: 'https://images.unsplash.com/photo-1572883515366-83f5e73c6fc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80' },
      { id: 8, text: 'Card #8', uri: 'https://images.unsplash.com/photo-1571942790878-b43e71f29476?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80' },
    ]
  }

  renderItem(item) {
    return (
      <Card>
        <Image 
        source={{uri: item.uri}}
        style={{height: 400, width: '100%'}}
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