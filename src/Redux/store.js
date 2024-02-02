import { createStore } from "redux";
import rootReducers from "../Redux/Reducer/reducer";

const store = createStore(rootReducers);

export default store;