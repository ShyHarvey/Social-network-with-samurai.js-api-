import React from "react";
import {useDispatch, useSelector} from 'react-redux'
import { addMessageActionCreator, changeMessageActionCreator } from "../../../redux/dialogsReducer";
import Dialogs from "./dialogs";



function DialogsContainer(props) {
    
    
    const state = useSelector(state=>state.dialogsReducer);
    const dispatch = useDispatch();

    let addMessage = () => dispatch(addMessageActionCreator()) ;
    let changeMessage = (text) => dispatch(changeMessageActionCreator(text))
    return (
        <Dialogs data={state} addMessage={addMessage} changeMessage={changeMessage} />
    )
}

export default DialogsContainer;