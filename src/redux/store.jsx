import { combineReducers, createStore } from "redux";
import serviceListReducer from "./service-list-reducer";
import newServiceReducer from "./new-service-reducer";
import editModeReduces from "./edit-mode-reduces";


const reducers = combineReducers({
    serviceList: serviceListReducer,
    newService: newServiceReducer,
    editMode: editModeReduces
});

const store = createStore(reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

window.store = store;

export default store;