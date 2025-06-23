import { Provider } from "react-redux";
import "./App.css";
import RtkCounter from "./components/RtkCounter";
import ZustandCounter from "./components/ZustandCounter";
import store from "./redux/config/configStore";

function App() {
  return (
    <div>
      <Provider store={store}>
        <h2>RTK Counter</h2>
        <RtkCounter />
      </Provider>
      <h2>Zustand Counter</h2>
      <ZustandCounter />
    </div>
  );
}

export default App;
