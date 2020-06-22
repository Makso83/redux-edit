import { REMOVE_SERVICE, FIELD_CHANGED, ADD_SERVICE, TOGGLE_EDIT_MODE, EDIT_SERVICE } from "./constants";

export const removeServiceAC = (data) => {
    return { type: REMOVE_SERVICE, data: data };
};

export const addNewServiceAC = (name, value) => {
    return { type: ADD_SERVICE, data: { name: name, value: value } };
};

export const inputFieldChangeAC = (name, value) => {
    return { type: FIELD_CHANGED, data: { name: name, value: value } };
};

export const toggleEditModeAC = (id) => {
    return {type: TOGGLE_EDIT_MODE, data: id}
}

export const editService = (id, name, value) => {
    return {type: EDIT_SERVICE, data: {id: id, name: name, value: value }}
}