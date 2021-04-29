import {createStore,applyMiddleware} from"redux"
import RootReducer from "./RootReducer"
import promiseMW from "redux-promise"
// import from ""
const createStoreWithMW  = applyMiddleware(promiseMW)(createStore)
const store = createStoreWithMW(RootReducer);
export default store;