import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleEditModeAC, inputFieldChangeAC } from "../redux/action-creators";

function ServiceItem(props) {
    const editMode = useSelector((state) => state.editMode);
    const dispatch = useDispatch();

    const onEditHandler = () => {
        dispatch(toggleEditModeAC(props.id));
        dispatch(inputFieldChangeAC("service", props.service));
        dispatch(inputFieldChangeAC("price", props.price));
    };

    return (
        <div className="ServiceItem__container">
            <div className="ServiceItem__content-container">
                <p>{props.service}</p>
                <p>{`${props.price} p.`}</p>
            </div>
            <div className="ServiceItem__button-block">
                <button
                    disabled={editMode.isEditMode}
                    onClick={onEditHandler}
                    className="button">
                    Edit
                </button>
                <button
                    disabled={editMode.isEditMode}
                    onClick={() => props.removeService(props.id)}
                    className="button button-delete">
                    Delete
                </button>
            </div>
        </div>
    );
}

export default ServiceItem;
