import { TOGGLE_EDIT_MODE } from "./constants";

const initialState = { isEditMode: false, idToEdit: 0 };

export default (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_EDIT_MODE:
            return {...state, isEditMode: !state.isEditMode, idToEdit: action.data};
        default:
            return state;
    }
};
