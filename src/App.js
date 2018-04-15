import React, {Component} from 'react';
import Menu from "./js/Menu";
import Content from "./js/Content"

class App extends Component {
  render() {
    return (
      <div>
        <Menu/>
        <Content/>
      </div>
    );
  }
}

export default App;
