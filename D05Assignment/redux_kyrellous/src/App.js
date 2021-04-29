import store from "./store"
import {Provider} from "react-redux"
import AppRouting from "./AppRouting"
function App() {
  return (
    <Provider store={store}>
      <AppRouting></AppRouting>
    </Provider>
  );
}

export default App;
