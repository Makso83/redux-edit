import shortid from "shortid";
import { ADD_SERVICE, REMOVE_SERVICE, EDIT_SERVICE } from "./constants";

const initialState = [
    { id: shortid.generate(), service: "Замена стекла", price: 2000 },
    { id: shortid.generate(), service: "Замена батареи", price: 1700 },
];

export default (state = initialState, action) => {
    switch (action.type) {
        case REMOVE_SERVICE: {
            return state.filter((s) => s.id !== action.data);
        }

        case ADD_SERVICE: {
            return [...state, {id: shortid.generate(), service: action.data.name, price: action.data.value}]
        }

        case EDIT_SERVICE: {
            return [...state.map((s) => {
                if(s.id === action.data.id) {
                    return {id: action.data.id, service: action.data.name, price: action.data.value}
                } else return s;
            })]
        }

        default:
            return state;
    }
};
