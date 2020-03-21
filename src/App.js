import React from "react";
import Main from "./component/main";
import { Provider } from "react-redux";

import store from "./store.js";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

export default App;
