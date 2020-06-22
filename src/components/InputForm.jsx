import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    inputFieldChangeAC,
    addNewServiceAC,
    toggleEditModeAC,
    editService,
} from "../redux/action-creators";

function InputForm() {
    const newValue = useSelector((state) => state.newService);
    const editMode = useSelector((state) => state.editMode);
    const dispatch = useDispatch();

    const onInputChange = (evt) => {
        const { name, value } = evt.target;
        dispatch(inputFieldChangeAC(name, value));
    };

    const isValid = () => {
        return newValue.service !== "" && newValue.price > 0;
    };

    const fieldsClear = () => {
        dispatch(inputFieldChangeAC("service", ""));
        dispatch(inputFieldChangeAC("price", 0));
    };

    const onSubmit = (evt) => {
        evt.preventDefault();
        if (isValid()) {
            dispatch(addNewServiceAC(newValue.service, newValue.price));
            fieldsClear();
        }
    };

    const onReplace = () => {
        dispatch(
            editService(editMode.idToEdit, newValue.service, newValue.price)
        );
        dispatch(toggleEditModeAC());
        fieldsClear();
    };

    const onCancel = () => {
        dispatch(toggleEditModeAC());
        fieldsClear();
    };

    return (
        <form className="InputForm__container" onSubmit={onSubmit}>
            <input
                onChange={onInputChange}
                type="textarea"
                className="input-field"
                name="service"
                value={newValue.service}
            />
            <input
                onChange={onInputChange}
                type="textarea"
                className="input-field"
                name="price"
                value={newValue.price}
            />
            {editMode.isEditMode ? (
                <button onClick={onReplace} className="button ">
                    Изменить
                </button>
            ) : (
                <input className="button " type="submit" value="Добавить" />
            )}
            {editMode.isEditMode && (
                <button onClick={onCancel} className="button button-delete">
                    Отменить
                </button>
            )}
        </form>
    );
}

export default InputForm;
