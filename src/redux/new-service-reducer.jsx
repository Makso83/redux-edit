import { FIELD_CHANGED } from "./constants";

const initialState = {
    service: "",
    price: 0,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FIELD_CHANGED: {
            return { ...state, [action.data.name]: action.data.value };
        }

        default:
            return state;
    }
};
