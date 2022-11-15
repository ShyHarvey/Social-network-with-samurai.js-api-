import React from 'react';
import Posts from './MyPosts';
import "./posts.scss";

import{changeNewPostTextActionCreator,addPostActionCreator} from '../../../../redux/profileReducer';

function PostsContainer(props) {
    
    let onPostChange = (text) =>{
        props.dispatch(changeNewPostTextActionCreator(text))
    };

    let addPost = () =>{ 
        props.dispatch(addPostActionCreator())
    } ;

    return (
        <Posts newPostText={props.newPostText} addPost={addPost} onPostChange={onPostChange}  data={props.data} />
    )

}
export default PostsContainer;