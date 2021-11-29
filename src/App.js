import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Toaster } from "react-hot-toast";
import IsAuth from "./pages/IsAuth";

function App() {
  return (
    <Provider store={store}>
      <IsAuth/>
      <Toaster position="top-right" />
    </Provider>
  );
}

export default App;
