import { legacy_createStore } from "redux";
import userReducer from "./reducers/userReducer.js";

const myStore = legacy_createStore(userReducer);

export default myStore;
