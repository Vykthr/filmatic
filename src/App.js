import './App.css';
import Routes from './navigation/routes'
import { Provider } from "react-redux";
import initStore from "./redux/store";

export const store = initStore({});


function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
