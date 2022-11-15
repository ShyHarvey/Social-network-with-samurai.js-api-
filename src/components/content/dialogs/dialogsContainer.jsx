import React from "react";
import { addMessageActionCreator, changeMessageActionCreator } from "../../../redux/dialogsReducer";

import Dialogs from "./dialogs";


function DialogsContainer(props) {
    let addMessage = () => props.dispatch(addMessageActionCreator()) ;
    let changeMessage = (text) => props.dispatch(changeMessageActionCreator(text))
    return (
        <Dialogs data={props.data} addMessage={addMessage} changeMessage={changeMessage} />
    )
}

export default DialogsContainer;